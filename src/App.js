// src/App.js
import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App" style={styles.appContainer}>
      <Board />
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
export default App;
