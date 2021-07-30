import React, { useState, useEffect } from "react";

const Center = styled.div`
  position: aboslute;
  z-index: 1000;

  left: ${(props) => {
    props.x;
  }}px;
  top: ${(props) => {
    props.y;
  }}px;

  width: ${(props) => {
    props.center.size;
  }}px;
  height: ${(props) => {
    props.center.size;
  }}px;
  border-radius: ${(props) => {
    props.center.size;
  }}px;
`;

const Ring = styled.div`
  position: aboslute;
  z-index: 1000;

  width: ${(props) => {
    props.ring.size;
  }}px;
  height: ${(props) => {
    props.ring.size;
  }}px;
  border-radius: ${(props) => {
    props.ring.size;
  }}px;
`;

export const Cursor = () => {
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
      <Center x={mousePosition.x} y={mousePosition.y} />
      <Ring x={mousePosition.x} y={mousePosition.y} />
    </div>
  );
};
