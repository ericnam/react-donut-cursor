import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Center, CenterContainer } from './components/center';
import { Ring, RingContainer } from './components/ring';
import { CursorStore } from './index';

/**
 * Main cursor component
 * @returns
 */
export const Cursor = () => {
    const [clicked, setClicked] = useState(false);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const { state } = useContext(CursorStore);

    const cursorStyle = GetCursorStateStyle(
        state.base,
        state.hover,
        state.cursorState,
        clicked,
        state.activeClass,
        state.classConfigArr
    );

    const centerStyles = cursorStyle.center;
    const ringStyles = cursorStyle.ring;

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEventListener, false);
        document.addEventListener('scroll', mouseScrollEventListener, false);
        document.addEventListener('mousedown', mouseDownEventListener, false);
        document.addEventListener('mouseup', mouseUpEventListener, false);

        return () => {
            document.removeEventListener(
                'mousemove',
                mouseMoveEventListener,
                false
            );
            document.removeEventListener(
                'scroll',
                mouseScrollEventListener,
                false
            );
            document.removeEventListener(
                'mousedown',
                mouseDownEventListener,
                false
            );
            document.removeEventListener(
                'mouseup',
                mouseUpEventListener,
                false
            );
        };
    });

    const mouseMoveEventListener = (e) => {
        setMouseMoving(true);
        setTimeout(() => {
            setMouseMoving(false);
        }, 300);
        setMousePosition({ x: e.x, y: e.y + scrollY });
    };
    const mouseScrollEventListener = (e) => {
        let scrollTop = e.srcElement.scrollingElement.scrollTop;
        setScrollY(scrollTop);
        if (!mouseMoving) {
            setMousePosition({
                x: mousePosition.x,
                y: mousePosition.y + (scrollTop - scrollY),
            });
        }
    };
    const mouseDownEventListener = (e) => {
        setClicked(true);
    };
    const mouseUpEventListener = (e) => {
        setClicked(false);
    };

    return (
        <div>
            <CenterContainer
                x={mousePosition.x}
                y={mousePosition.y}
                transition={centerStyles.lag}
            >
                <Center styles={centerStyles}>
                    {!!centerStyles.jsx ? (
                        <CenterContentWrapper>
                            <CenterContentInnerWrapper
                                height={centerStyles.jsx.props.style.height}
                            >
                                {centerStyles.jsx}
                            </CenterContentInnerWrapper>
                        </CenterContentWrapper>
                    ) : null}
                </Center>
            </CenterContainer>
            <RingContainer
                x={mousePosition.x}
                y={mousePosition.y}
                transition={ringStyles.lag}
            >
                <Ring styles={ringStyles} />
            </RingContainer>
        </div>
    );
};

const CenterContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
`;

const CenterContentInnerWrapper = styled.div`
    transform: translateY(50%);
    margin: 0 auto;
    margin-top: -${(props) => props.height};
`;

/**
 * Get the Ring and Center styles based on current cursor's state
 * @param {*} base
 * @param {*} hover
 * @param {*} cursorState
 * @param {*} clicked
 * @param {*} activeClass
 * @param {*} classArr
 * @returns
 */
const GetCursorStateStyle = (
    base,
    hover,
    cursorState,
    clicked,
    activeClass,
    classArr
) => {
    let cursorStyle;

    switch (cursorState) {
        case 'base':
            cursorStyle = base;
            break;
        case 'hover':
            cursorStyle = !!activeClass ? classArr[activeClass] : hover;
            break;
        default:
            break;
    }

    if (clicked) {
        cursorStyle = cursorStyle.click;
    }

    return cursorStyle;
};
