// src/BoardComponent.js
import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const rows = 16;
  const cols = 16;

  // Initialize edge colors state
  const initialEdgeColors = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      top: "gray",
      bottom: "gray",
      left: "gray",
      right: "gray",
    }))
  );

  const [edgeColors, setEdgeColors] = useState(initialEdgeColors);
  const [currentColor, setCurrentColor] = useState("blue");

  const handleEdgeClick = (row, col, position) => {
    console.log(`handleClick: ${row}-${col}-${position}`);
    const newColor = currentColor;

    const newEdgeColors = edgeColors.map((_row, rowIndex) =>
      _row.map((_cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return { ..._cell, [position]: newColor };
        }

        // Update the adjacent edge
        if (position === "top" && rowIndex === row - 1 && colIndex === col) {
          return { ..._cell, bottom: newColor };
        }
        if (position === "bottom" && rowIndex === row + 1 && colIndex === col) {
          return { ..._cell, top: newColor };
        }
        if (position === "left" && rowIndex === row && colIndex === col - 1) {
          return { ..._cell, right: newColor };
        }
        if (position === "right" && rowIndex === row && colIndex === col + 1) {
          return { ..._cell, left: newColor };
        }

        return _cell;
      })
    );

    setEdgeColors(newEdgeColors);
    setCurrentColor(currentColor === "blue" ? "red" : "blue");
  };

  const generateGrid = () => {
    let grid = [];
    for (let row = 0; row < rows; row++) {
      let rowElements = [];
      for (let col = 0; col < cols; col++) {
        rowElements.push(
          <Cell
            key={`${row}-${col}`}
            row={row}
            col={col}
            edgeColors={edgeColors[row][col]}
            onEdgeClick={handleEdgeClick}
          />
        );
      }
      grid.push(
        <div key={row} style={styles.row}>
          {rowElements}
        </div>
      );
    }
    return grid;
  };

  return <div style={styles.board}>{generateGrid()}</div>;
}

const styles = {
  board: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
  },
};

export default Board;
