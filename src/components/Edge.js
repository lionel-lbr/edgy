// src/Edge.js
import React from "react";

const DEFAULT_EDGE_SIZE = 3;

function Edge({ position, color, onClick, isOuterEdge }) {
  const size = isOuterEdge
    ? `${DEFAULT_EDGE_SIZE * 2}px`
    : `${DEFAULT_EDGE_SIZE}px`;
  return (
    <div
      style={{
        ...styles.edge,
        ...styles[position],
        backgroundColor: color,
        [position === "top" || position === "bottom" ? "height" : "width"]:
          size,
      }}
      onClick={onClick}
    ></div>
  );
}

const styles = {
  edge: {
    position: "absolute",
    cursor: "pointer", // Added cursor pointer style
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
  },
  right: {
    top: 0,
    bottom: 0,
    right: 0,
  },
};

export default Edge;
