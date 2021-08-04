import styled from 'styled-components';

export const RingContainer = styled.div.attrs((props) => ({
    style: {
        top: props.y,
        left: props.x,
    },
}))`
    position: absolute;
    z-index: 999;
    pointer-events: none;

    transition: ${(props) => `${props.transition}`};
`;
export const Ring = styled.div`
    position: relative;
    pointer-events: none;
    transform: translate(-50%, -50%);

    width: ${(props) => `${props.styles.width}`};
    height: ${(props) => `${props.styles.height}`};
    border-radius: ${(props) => `${props.styles.width}`};
    border-color: ${(props) => `${props.styles.borderColor}`};
    border-width: ${(props) => `${props.styles.borderWidth}`};
    border-style: ${(props) => `${props.styles.borderStyle}`};
    transition: ${(props) => `${props.styles.transition}`};
    display: ${(props) => `${props.styles.display}`};
`;
