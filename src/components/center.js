import styled from "styled-components";

export const Center = styled.div.attrs((props) => ({
  style: {
    top: props.y,
    left: props.x
  }
}))`
  position: absolute;
  z-index: 1000;
  pointer-events: none;

  width: ${(props) => `${props.styles.width}px`};
  height: ${(props) => `${props.styles.width}px`};
  border-radius: ${(props) => `${props.styles.width}px`};
  background-color: ${(props) => props.state === "base" ? `${props.styles.color}` : `green`};
`;