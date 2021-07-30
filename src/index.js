import React, { createContext, useContext, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { defaultConfig } from "./defaultConfig";
import { Cursor } from "./cursor";

const CursorStore = createContext();
const CursorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const GlobalStyle = createGlobalStyle`
* {
    cursor: none !important;
}
`;

export const NamCursorProvider = ({ children, configSettings }) => {
  const [cursorState, setCursorState] = useState(null);
  const config = { ...defaultConfig, ...configSettings };

  return (
    <CursorWrapper>
      <CursorStore.Provider
        value={{ cursorState, setCursorState }}
        initialState={null}
      >
        <GlobalStyle />
        <Cursor />
        {children}
      </CursorStore.Provider>
    </CursorWrapper>
  );
};

export const ChangeCursor = (newState) => {
  useContext(CursorStore).setCursorState(newState);
};