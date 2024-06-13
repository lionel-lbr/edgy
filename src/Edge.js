// src/Edge.js
import React from "react";

function Edge({ position, color, onClick }) {
  return (
    <div
      style={{ ...styles.edge, ...styles[position], backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}

const styles = {
  edge: {
    width: "100%",
    height: "100%",
    position: "absolute",
    //border: "1px solid black",
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
  },
  bottom: {
    bottom: "-5px", // Overlaps the cell below
    left: 0,
    right: 0,
    height: "5px",
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
    width: "5px",
  },
  right: {
    top: 0,
    bottom: 0,
    right: "-5px", // Overlaps the cell to the right
    width: "5px",
  },
};

export default Edge;
