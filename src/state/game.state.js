import {
  DEFAULT_COLOR,
  PLAYER_1_COLOR,
  PLAYER_2_COLOR,
  ROWS_COUNT,
  COLS_COUNT,
} from "../const";

const cell = {
  top: DEFAULT_COLOR,
  bottom: DEFAULT_COLOR,
  left: DEFAULT_COLOR,
  right: DEFAULT_COLOR,
  closed: false,
  color: "transparent",
};

const PLAYER_1 = 0;
const PLAYER_2 = 1;

class GameState {
  rowsCount = 0;
  colsCount = 0;
  state = [];
  players = [
    { name: "unknown", score: 0, color: PLAYER_1_COLOR },
    { name: "unknown", score: 0, color: PLAYER_2_COLOR },
  ];
  currentPlayer = PLAYER_1;

  constructor(rows, cols) {
    this.rowsCount = rows;
    this.colsCount = cols;
    this.state = this.initialCellsState(rows, cols);
  }

  initialCellsState(rowsCount, colsCount) {
    const state = Array.from({ length: rowsCount }, () =>
      Array.from({ length: colsCount }, () => ({ ...cell }))
    );

    return state;
  }

  isEdgeSelected(rowIndex, colIndex, position) {
    const cell = this._getCell(rowIndex, colIndex);
    if (cell[position] !== DEFAULT_COLOR) return true;
    return false;
  }

  // set an edge to the current player color, and return true if the cell is closed
  // false otherwise
  setEdge(rowIndex, colIndex, position) {
    let cellClosedCount = 0;

    if (this._setEdge(rowIndex, colIndex, position)) cellClosedCount++;

    // Update the adjacent edge
    if (position === "top" && rowIndex > 0) {
      if (this._setEdge(rowIndex - 1, colIndex, "bottom")) cellClosedCount++;
    }

    if (position === "bottom" && rowIndex < this.rowsCount - 1) {
      if (this._setEdge(rowIndex + 1, colIndex, "top")) cellClosedCount++;
    }

    if (position === "left" && colIndex > 0) {
      if (this._setEdge(rowIndex, colIndex - 1, "right")) cellClosedCount++;
    }

    if (position === "right" && colIndex < this.colsCount - 1) {
      if (this._setEdge(rowIndex, colIndex + 1, "left")) cellClosedCount++;
    }

    // update player score
    if (cellClosedCount > 0) {
      this.players[this.currentPlayer].score += cellClosedCount;
      return true;
    }

    // switch player is we didn't close any cell at this turn
    this.currentPlayer = this.currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    return false;
  }

  // set an edge to the current color and check the cell is "closed"
  _setEdge(rowIndex, colIndex, position) {
    const cell = this._getCell(rowIndex, colIndex);
    cell[position] = this._getCurrentColor();
    if (this._shouldClosed(cell)) {
      cell.color = this._getCurrentColor();
      cell.closed = true;
      return true;
    }
    return false;
  }

  _getCell(rowIndex, colIndex) {
    return this.state[rowIndex][colIndex];
  }

  _shouldClosed(cell) {
    if (
      !cell.closed &&
      cell.top !== DEFAULT_COLOR &&
      cell.bottom !== DEFAULT_COLOR &&
      cell.left !== DEFAULT_COLOR &&
      cell.right !== DEFAULT_COLOR
    ) {
      return true;
    }
    return false;
  }

  _getCurrentColor() {
    return this.players[this.currentPlayer].color;
  }
}

const gameState = new GameState(ROWS_COUNT, COLS_COUNT);
export default gameState;
