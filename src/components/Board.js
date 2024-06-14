// src/Board.js
import React from "react";
import Cell from "./Cell";

function Board(props) {
  const { gameState, gameTick } = props;

  const handleEdgeClick = (row, col, position) => {
    console.log(`handleClick: ${row}-${col}-${position}`);

    if (!gameState.isEdgeSelected(row, col, position)) {
      gameState.setEdge(row, col, position);
    }

    gameTick();
  };

  const generateGrid = () => {
    let grid = [];
    for (let row = 0; row < gameState.rowsCount; row++) {
      let rowElements = [];
      for (let col = 0; col < gameState.colsCount; col++) {
        const cell = gameState.state[row][col];
        console.log(cell);
        rowElements.push(
          <Cell
            key={`${row}-${col}`}
            row={row}
            col={col}
            cellState={cell}
            onEdgeClick={handleEdgeClick}
            rows={gameState.rowsCount}
            cols={gameState.colsCount}
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
