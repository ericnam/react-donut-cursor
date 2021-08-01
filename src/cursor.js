import React, { useState, useEffect } from "react";
import { CursorStore } from "./index";

const CenterStyle = (mousePosition, props) => {
  const centerDefault = props.center.default;

  return {
    position: "absolute",
    zIndex: 1000,
    width: `${centerDefault.size}px`,
    height: `${centerDefault.size}px`,
    borderRadius: `${centerDefault.size}px`,
    backgroundColor: `${centerDefault.backgroundColor}`,
    left: mousePosition.x,
    top: mousePosition.y,
  };
};

const RingStyle = (mousePosition, props) => {
  const ringDefault = props.ring.default;

  return {
    position: "absolute",
    zIndex: 1000,
    width: `${ringDefault.size}px`,
    height: `${ringDefault.size}px`,
    borderRadius: `${ringDefault.size}px`,
    border: `${ringDefault.color} 1px solid`,
    left: mousePosition.x,
    top: mousePosition.y,
  };
};

export const Cursor = ({ config }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEventListener, false);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEventListener, false);
    };
  });

  const mouseMoveEventListener = (e) => {
    setMousePosition({ x: e.x, y: e.y });
  };

  return (
    <div>
      <div style={CenterStyle(mousePosition, config)}></div>
      <div style={RingStyle(mousePosition, config)}></div>
    </div>
  );
};
