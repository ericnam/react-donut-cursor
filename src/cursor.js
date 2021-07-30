import React, { useState, useEffect } from "react";

const CenterStyle = (mousePosition, props) => {
  return {
    position: "absolute",
    zIndex: 1000,
    width: props.center.size,
    height: props.center.size,
    borderRadius: props.center.size,
    left: mousePosition.x,
    top: mousePosition.y,
  };
};

const RingStyle = (mousePosition, props) => {
  return {
    position: "absolute",
    zIndex: 1000,
    width: props.ring.size,
    height: props.ring.size,
    borderRadius: props.ring.size,
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
