// src/App.js
import React from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App" style={styles.appContainer}>
      <Game />
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
