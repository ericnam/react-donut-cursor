import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Center, CenterContainer } from './components/center';
import { Ring, RingContainer } from './components/ring';
import { CursorStore } from './index';
import { defaultConfig } from './defaultConfig';

export const Cursor = ({ base, hover }) => {
    const [clicked, setClicked] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const { state } = useContext(CursorStore);

    const cursorStyle = GetCursorConfiguration(
        state.state,
        clicked,
        state.activeClass,
        state.classConfigArr,
        base,
        hover
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
        setMousePosition({ x: e.x, y: e.y + scrollY });
    };
    const mouseScrollEventListener = (e) => {
        let scrollTop = e.srcElement.scrollingElement.scrollTop;
        setScrollY(scrollTop);
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

const GetCursorConfiguration = (
    cursorState,
    cursorClicked,
    activeClass,
    classConfigArr,
    baseInput,
    hoverInput
) => {
    let defaultSetting;
    let userSetting;

    if (!!cursorState && cursorState === 'hover') {
        defaultSetting = defaultConfig.hover;
        userSetting = hoverInput;

        if (!!activeClass) {
            userSetting = { ...userSetting, ...classConfigArr[activeClass] };
        }
    } else {
        defaultSetting = defaultConfig.base;
        userSetting = baseInput;
    }

    if (cursorClicked) {
        defaultSetting = defaultSetting.click;

        var clickSetting = { ...userSetting.click };

        if (
            !!!userSetting.click ||
            !userSetting.click.hasOwnProperty('center')
        ) {
            if (!!userSetting.center) {
                clickSetting = { ...clickSetting, center: userSetting.center };
            }
            if (
                !!!userSetting.click ||
                !userSetting.click.hasOwnProperty('ring')
            ) {
                if (!!userSetting.ring) {
                    clickSetting = { ...clickSetting, ring: userSetting.ring };
                }
            }

            userSetting = { ...clickSetting };
        }

        return !!userSetting ? userSetting : defaultSetting;
    }
};
