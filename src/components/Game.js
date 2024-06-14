// src/components/Game.js
import React, { useState } from "react";
import Board from "./Board";

import gameState from "../state/game.state";

function Game() {
  const [toggle, setToggle] = useState(true);
  const [player1, player2] = gameState.players;

  return (
    <div style={styles.gameContainer}>
      <div style={styles.header}>
        <div style={styles.playerInfo}>
          <div style={{ backgroundColor: player1.color }}>
            <h2>Player 1</h2>
          </div>
          <p>Score: {player1.score}</p>
        </div>
        <div style={styles.title}>
          <h1>Edgy</h1>
          <p>Cells: {gameState.cellsCount}</p>
        </div>
        <div style={styles.playerInfo}>
          <div style={{ backgroundColor: player2.color }}>
            <h2>Player 2</h2>
          </div>
          <p>Score: {player2.score}</p>
        </div>
      </div>
      <div style={styles.boardContainer}>
        <Board gameTick={() => setToggle(!toggle)} gameState={gameState} />
      </div>
    </div>
  );
}

const styles = {
  gameContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
  },
  playerInfo: {
    width: "25%",
    textAlign: "center",
    // fontSize: "12px", // Adjusted font size
  },
  title: {
    width: "50%",
    textAlign: "center",
    // fontSize: "16px", // Adjusted font size
  },
  boardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Align items to the top
    //alignItems: "center",
    flexGrow: 1,
    //marginTop: "5px", // Added a small margin for spacing
    width: "100%", // Ensure full width
  },
};

export default Game;
