// src/EdgeComponent.js
import React from "react";
import Edge from "./Edge";

function Cell({ row, col, edgeColors, onEdgeClick }) {
  return (
    <div style={styles.cell}>
      <Edge
        position="top"
        color={edgeColors.top}
        onClick={() => onEdgeClick(row, col, "top")}
      />
      <Edge
        position="bottom"
        color={edgeColors.bottom}
        onClick={() => onEdgeClick(row, col, "bottom")}
      />
      <Edge
        position="left"
        color={edgeColors.left}
        onClick={() => onEdgeClick(row, col, "left")}
      />
      <Edge
        position="right"
        color={edgeColors.right}
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
    margin: "0px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};

export default Cell;
