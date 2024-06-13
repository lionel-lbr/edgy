// src/Cell.js
import React from "react";
import Edge from "./Edge";

function Cell({ row, col, cellState, onEdgeClick }) {
  return (
    <div style={{ ...styles.cell, backgroundColor: cellState.color }}>
      <Edge
        position="top"
        color={cellState.top}
        onClick={() => onEdgeClick(row, col, "top")}
      />
      <Edge
        position="bottom"
        color={cellState.bottom}
        onClick={() => onEdgeClick(row, col, "bottom")}
      />
      <Edge
        position="left"
        color={cellState.left}
        onClick={() => onEdgeClick(row, col, "left")}
      />
      <Edge
        position="right"
        color={cellState.right}
        onClick={() => onEdgeClick(row, col, "right")}
      />
      <div style={styles.center}>
        ({row}, {col})
      </div>
    </div>
  );
}

const styles = {
  cell: {
    position: "relative",
    width: "50px",
    height: "50px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};

export default Cell;
