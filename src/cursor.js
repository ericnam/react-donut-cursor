import React, { useState, useEffect } from "react";

import { Center } from "./components/center";
import { CursorStore } from "./index";

const CenterStyle = (mousePosition, styles) => {
  const centerBase = styles.base.center;
  const centerBaseClick = styles.base.click.center;

  const centerHover = styles.hover.center;
  const centerHoverClick = styles.hover.click.center;

  return {
    position: "absolute",
    zIndex: 1000,
    width: `${centerBase.width}px`,
    height: `${centerBase.width}px`,
    borderRadius: `${centerBase.width}px`,
    backgroundColor: `${centerBase.color}`,
    left: mousePosition.x,
    top: mousePosition.y,
  };
};

const RingStyle = (mousePosition, styles) => {
  const ringBase = styles.base.ring;

  return {
    position: "absolute",
    zIndex: 1000,
    width: `${ringBase.width}px`,
    height: `${ringBase.width}px`,
    borderRadius: `${ringBase.width}px`,
    border: `${ringBase.color} 1px solid`,
    left: mousePosition.x,
    top: mousePosition.y,
  };
};

export const Cursor = ({ base, hover, state }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const styles = { base, hover };

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
      <Center id="donut-center" x={mousePosition.x} y={mousePosition.y} styles={base.center} state={state} />
      {/* <div style={CenterStyle(mousePosition, styles)}></div> */}
      {/* <div style={RingStyle(mousePosition, styles)}></div> */}
    </div>
  );
};
