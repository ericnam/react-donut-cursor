import React, { createContext, useReducer } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';

// import { defaultConfig } from './defaultConfig';
import { Cursor } from './cursor';
import { GlobalStyle, CursorWrapper } from './globalStyles';

export const CursorStore = createContext();

const DonutReducer = (state, action) => {
    switch (action.type) {
        case 'base':
            return { ...state, state: action.type, activeClass: '' };
        case 'hover':
            return { ...state, state: action.type, activeClass: action.class };
        default:
            break;
    }
};

export const DonutCursorProvider = ({ children, base, hover, classArr }) => {
    const [state, dispatch] = useReducer(DonutReducer, {
        classNamesArr: Object.keys(classArr),
        classConfigArr: classArr,
        state: 'base',
        activeClass: '',
    });

    // base = { ...defaultConfig.base, ...base };
    // hover = { ...defaultConfig.hover, ...hover };

    let cursor = isMobile ? null : <Cursor base={base} hover={hover} />;

    return (
        <CursorWrapper>
            <GlobalStyle />
            <CursorStore.Provider
                value={{ state, dispatch }}
                initialState={state}
            >
                {children}
                {cursor}
                {/* <Cursor base={base} hover={hover} /> */}
            </CursorStore.Provider>
        </CursorWrapper>
    );
};

export const DonutConsumer = ({ children }) => {
    const InsertDonutsIntoChildren = (children, state, dispatch) => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(
                    child,
                    DonutElementProps(child, state),
                    !!child.props && !!child.props.children
                        ? InsertDonutsIntoChildren(
                              child.props.children,
                              state,
                              dispatch
                          )
                        : child.props.children
                );
            }

            return child;
        });
    };

    const DonutElementProps = (child, state) => {
        if (
            !!child.props &&
            !!child.props.className &&
            child.props.className.indexOf('donut-hover') >= 0
        ) {
            let userDefinedClass = '';
            const classNames = child.props.className.split(' ');

            classNames.forEach((ele, i) => {
                if (state.state.classNamesArr.includes(ele)) {
                    userDefinedClass = ele;
                    return;
                }
            });

            return {
                ...child.props,
                onMouseEnter: () => {
                    state.dispatch({ type: 'hover', class: userDefinedClass });
                },
                onMouseLeave: () => {
                    state.dispatch({ type: 'base' });
                },
            };
        } else {
            return child.props;
        }
    };

    return (
        <CursorStore.Consumer>
            {(state, dispatch) => {
                {
                    return isBrowser
                        ? InsertDonutsIntoChildren(children, state, dispatch)
                        : children;
                }
            }}
        </CursorStore.Consumer>
    );
};
