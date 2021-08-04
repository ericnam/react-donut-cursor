import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Center, CenterContainer } from './components/center';
import { Ring, RingContainer } from './components/ring';
import { CursorStore } from './index';

export const Cursor = ({ base, hover }) => {
    const [clicked, setClicked] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { state } = useContext(CursorStore);

    let centerStyles = { ...base.center };
    let ringStyles = { ...base.ring };

    if (!!state) {
        if (state.state === 'hover') {
            centerStyles = { ...centerStyles, ...hover.center };
            ringStyles = { ...ringStyles, ...hover.ring };
        }
        if (!!state.activeClass) {
            let classConfig = state.classConfigArr[state.activeClass];
            centerStyles = { ...centerStyles, ...classConfig.center };
            ringStyles = { ...ringStyles, ...classConfig.ring };
        }
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEventListener, false);
        document.addEventListener('click', mouseClickEventListener, false);

        return () => {
            document.removeEventListener(
                'mousemove',
                mouseMoveEventListener,
                false
            );
            document.removeEventListener(
                'click',
                mouseClickEventListener,
                false
            );
        };
    });

    const mouseMoveEventListener = (e) => {
        setMousePosition({ x: e.x, y: e.y });
    };
    const mouseClickEventListener = (e) => {
        setClicked(true);
    };

    return (
        <div>
            <CenterContainer
                x={mousePosition.x}
                y={mousePosition.y}
                transition={centerStyles.lag}
            >
                <Center styles={centerStyles}>
                    <div
                        style={{
                            transform: 'translate(-50%,-50%)',
                            position: 'absolute',
                            pointerEvents: 'none',
                        }}
                    >
                        {!!centerStyles.jsx ? centerStyles.jsx : null}
                    </div>
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
