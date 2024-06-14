// src/Board.js
import React, { useState } from "react";
import Cell from "./Cell";

import gameState from "../state/game.state";

function Board() {
  const rows = 16;
  const cols = 16;

  const [toggle, setToggle] = useState(true);
  // const [currentColor, setCurrentColor] = useState("blue");

  const handleEdgeClick = (row, col, position) => {
    console.log(`handleClick: ${row}-${col}-${position}`);

    if (gameState.isEdgeSelected(row, col, position)) return;

    gameState.setEdge(row, col, position);
    setToggle(!toggle); // toggle to trigger refresh
  };

  const generateGrid = () => {
    let grid = [];
    for (let row = 0; row < rows; row++) {
      let rowElements = [];
      for (let col = 0; col < cols; col++) {
        const cell = gameState.state[row][col];
        console.log(cell);
        rowElements.push(
          <Cell
            key={`${row}-${col}`}
            row={row}
            col={col}
            cellState={cell}
            onEdgeClick={handleEdgeClick}
            rows={rows}
            cols={cols}
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
