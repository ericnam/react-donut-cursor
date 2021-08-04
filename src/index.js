import React, { createContext, useContext, useState, useReducer } from 'react';
import styled from 'styled-components';

import { defaultConfig } from './defaultConfig';
import { Cursor } from './cursor';
import { GlobalStyle } from './globalStyles';

export const CursorStore = createContext();

const CursorWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

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
const InitialState = {
    classNamesArr: [],
    classConfigArr: {},
    state: 'base', //base, hover, click
    activeClass: '',
};

// classArr : [{className: "", img: <object> }]
export const DonutCursorProvider = ({ children, base, hover, classArr }) => {
    const [state, dispatch] = useReducer(DonutReducer, {
        classNamesArr: classArr.map((c) => c.className),
        classConfigArr: classArr,
        state: 'base',
        activeClass: '',
    });

    base = { ...defaultConfig.base, ...base };
    hover = { ...defaultConfig.hover, ...hover };

    return (
        <CursorWrapper>
            <GlobalStyle />
            <CursorStore.Provider
                value={{ state, dispatch }}
                initialState={state}
            >
                {children}
                <Cursor base={base} hover={hover} />
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
            classNames.every((ele, i) => {
                if (state.state.classNamesArr.indexOf(ele) >= 0) {
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
                    console.log('mouse leave!');
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
                    return InsertDonutsIntoChildren(children, state, dispatch);
                }
            }}
        </CursorStore.Consumer>
    );
};