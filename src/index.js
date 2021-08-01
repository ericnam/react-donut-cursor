import React, { createContext, useContext, useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import { defaultConfig } from "./defaultConfig";
import { Cursor } from "./cursor";

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none;
  }
  a {
    cursor: none;
  }
`;

const CursorStore = createContext();

const DonutCursorProvider = ({ children, configSettings }) => {
  const [cursorState, setCursorState] = useState();
  const config = { ...defaultConfig, ...configSettings };

  console.log(config);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <GlobalStyle />
      <CursorStore.Provider
        value={{ cursorState, setCursorState }}
        initialState={null}
      >
        <Cursor config={config} />
        {children}
      </CursorStore.Provider>
    </div>
  );
};

const ChangeCursor = (newState) => {
  useContext(CursorStore).setCursorState(newState);
};

exports.CursorStore = CursorStore;
exports.DonutCursorProvider = DonutCursorProvider;
exports.ChangeCursor = ChangeCursor;
