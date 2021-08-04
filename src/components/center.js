import styled from 'styled-components';

export const CenterContainer = styled.div.attrs((props) => ({
    style: {
        top: props.y,
        left: props.x,
    },
}))`
    position: absolute;
    z-index: 1000;
    pointer-events: none;

    transition: ${(props) => `${props.transition}`};
`;
export const Center = styled.div`
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);

    width: ${(props) => `${props.styles.width}`};
    height: ${(props) => `${props.styles.height}`};
    border-radius: ${(props) => `${props.styles.width}`};
    background-color: ${(props) => `${props.styles.backgroundColor}`};
    transition: ${(props) => `${props.styles.transition}`};
    display: ${(props) => `${props.styles.display}`};
`;
