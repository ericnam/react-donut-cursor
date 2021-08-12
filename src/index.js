import React, { createContext, useReducer } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';

import { ValidateUserInput, ValidateClassArray } from './validation';
import { Cursor } from './cursor';
import { GlobalStyle, CursorWrapper } from './globalStyles';
import { defaultConfig } from './defaultConfig';

export const CursorStore = createContext();

const DonutReducer = (state, action) => {
    switch (action.type) {
        case 'base':
            return { ...state, cursorState: action.type, activeClass: '' };
        case 'hover':
            return {
                ...state,
                cursorState: action.type,
                activeClass: action.class,
            };
        default:
            break;
    }
};

export const DonutCursorProvider = ({ children, base, hover, classArr }) => {
    // Validate user (base, hover, class-specific) settings
    let userInput = ValidateUserInput(
        base,
        hover,
        defaultConfig.base,
        defaultConfig.hover
    );
    classArr = ValidateClassArray(classArr, defaultConfig.hover);

    const [state, dispatch] = useReducer(DonutReducer, {
        classNamesArr: Object.keys(classArr),
        classConfigArr: classArr,
        cursorState: 'base',
        activeClass: '',
        base: userInput.base,
        hover: userInput.hover,
    });

    return (
        <CursorWrapper>
            <GlobalStyle />
            <CursorStore.Provider
                value={{ state, dispatch }}
                initialState={state}
            >
                {children}
                {isMobile ? null : <Cursor />}
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
