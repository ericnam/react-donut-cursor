import React, { createContext, useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { defaultConfig } from "./defaultConfig";
import { Cursor } from "./cursor";
import { GlobalStyle } from "./globalStyles";

const CursorStore = createContext({
  cursorState: "base",
  setCursorState: () => {},
});

const CursorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DonutCursorProvider = ({
  children,
  base,
  hover,
  hoverTagArr,
  classImgArr,
}) => {
  const [cursorState, setCursorState] = useState("base");

  base = { ...defaultConfig.base, ...base };
  hover = { ...defaultConfig.hover, ...hover };

  console.log(base);

  return (
    <CursorWrapper>
      <GlobalStyle hover={hover} hoverTagArr={hoverTagArr} />
      <CursorStore.Provider
        value={{ cursorState, setCursorState }}
        initialState={null}
      >
        {children}
        <Cursor base={base} hover={hover} state={cursorState} />
      </CursorStore.Provider>
    </CursorWrapper>
  );
};

const CursorEventHandler = () => {
  useContext(CursorStore);
};

exports.CursorStore = CursorStore;
exports.DonutCursorProvider = DonutCursorProvider;
exports.CursorEventHandler = CursorEventHandler;
