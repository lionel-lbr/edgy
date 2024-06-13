// src/Board.js
import React, { useState } from "react";
import Cell from "./Cell";
const DEFAULT_COLOR = "grey";

function Board() {
  const rows = 16;
  const cols = 16;

  // Initialize edge colors state
  const initialCellStates = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      top: DEFAULT_COLOR,
      bottom: DEFAULT_COLOR,
      left: DEFAULT_COLOR,
      right: DEFAULT_COLOR,
      closed: false,
      color: "transparent",
    }))
  );

  const [cellStates, setCellStates] = useState(initialCellStates);
  const [currentColor, setCurrentColor] = useState("blue");

  const shouldClosed = (cell) => {
    if (
      cell.top !== DEFAULT_COLOR &&
      cell.bottom !== DEFAULT_COLOR &&
      cell.left !== DEFAULT_COLOR &&
      cell.right !== DEFAULT_COLOR &&
      !cell.closed
    ) {
      return true;
    }
    return false;
  };

  const isSelected = (row, col, position) => {
    const cell = cellStates[row][col];
    if (cell[position] !== DEFAULT_COLOR) {
      return true;
    }
    return false;
  };

  const handleEdgeClick = (row, col, position) => {
    console.log(`handleClick: ${row}-${col}-${position}`);

    // Prevent changing the color if the edge is already colored
    if (isSelected(row, col, position)) {
      return;
    }
    const newColor = currentColor;

    const newCellStates = cellStates.map((_row, rowIndex) =>
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

    let newClosedCount = 0;
    const closedCellState = newCellStates.map((_row) =>
      _row.map((_cell) => {
        if (shouldClosed(_cell)) {
          newClosedCount++;
          return { ..._cell, closed: true, color: currentColor };
        }
        return _cell;
      })
    );

    setCellStates(closedCellState);
    // change color if we didn't close a cell
    if (newClosedCount === 0)
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
            cellState={cellStates[row][col]}
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

  // Updated return statement to include boardContainer
  return (
    <div style={styles.boardContainer}>
      <div style={styles.board}>{generateGrid()}</div>
    </div>
  );
}

const styles = {
  boardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  board: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
  },
};

export default Board;
