import { createGlobalStyle } from "styled-components";
import { Center } from "./components/center";

const PopulateHoverStyles = (arr, style) => {
  var hoverStyles = "";

  if (!!arr && arr.length > 0) {
    arr.forEach((tag) => {
      hoverStyles += `
        div { background-color: red; }
        #root:hover ${tag}:hover ~ #donut-center {
          transition: 100ms;
          background-color: green;
        }
      `;
    });
  }

  return hoverStyles;
};

const DisablePointers = (arr) => {
  return `${arr.join(",")} { cursor: none; }`
}

export const GlobalStyle = createGlobalStyle`
  *, a, button {
    cursor: none;
  }
`;

// ${(props) => {
//   let globalHoverStyles = DisablePointers(props.hoverTagArr);
//   return globalHoverStyles;
// }}
// ${(props) => {
//   let globalHoverStyles = PopulateHoverStyles(props.hoverTagArr, props.hover);
//   return globalHoverStyles;
// }}