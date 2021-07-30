import React, { createContext, useContext, useState, useEffect } from "react";

import { defaultConfig } from "./defaultConfig";
import { Cursor } from "./cursor";

const CursorStore = createContext();

export const DonutCursorProvider = ({ children, configSettings }) => {
  const [cursorState, setCursorState] = useState(null);
  const config = { ...defaultConfig, ...configSettings };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
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

export const ChangeCursor = (newState) => {
  useContext(CursorStore).setCursorState(newState);
};
