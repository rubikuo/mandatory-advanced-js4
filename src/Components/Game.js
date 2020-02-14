import React, { useReducer } from "react";
import Board from "./Board";

function getInitialState() {
  const initialboard = new Array(7 * 6).fill("white");

  return {
    board: initialboard, // define default box as initialboxes
    color: "red", // define default color as red
    filledIndex: [],
    winner: null,
    winningIndices: [],
  };
}

function checkWinner(board) {
  // check rows and jump every 7 cells
  for (let x = 0; x <= 35; x += 7) {
    // to check next 3 neighbours in one row
    for (let y = x; y < x + 3; y++) {
      if (board[y] !== "white") {
        if (
          board[y] === board[y + 1] &&
          board[y] === board[y + 2] &&
          board[y] === board[y + 3]
        ) {
          return [
              [y, y + 1, y + 2, y + 3],
              board[y],
          ];
        }
      }
    }
  }
  // check rows
  // check columns everytime move one column
  for (let x = 0; x <= 6; x += 1) {
    // check same column lower neighbours
    // 14 is to stop there so dont go down 
    for (let y = x; y <= x + 14; y += 7) {
      if (board[y] !== "white") {
        if (
          board[y] === board[y + 7] &&
          board[y] === board[y + 14] &&
          board[y] === board[y + 21]
        ) {
          return [
              [y, y + 7, y + 14, y + 21],
              board[y],
          ];
        }
      }
    }
  }
  // check diagonal 1
  // to go down 3 rows
  for (let x = 0; x < 3; x++) {
    // to go 4 columns
    for (let y = 0; y < 4; y++) {
      let idx = x * 7 + y;
      if (board[idx] !== "white") {
        if (
          board[idx] === board[idx + 8] &&
          board[idx] === board[idx + 16] &&
          board[idx] === board[idx + 24]
        ) {
        
          console.log("someone Win index");
          return board[idx];
        }
      }
    }
  }
  // check diagonal 2
  // to go down 3 rows
  for (let x = 0; x < 3; x++) {
    // to go 4 next columns
    for (let y = 0; y < 4; y++) {
      // to start from 21st
      let idx = x * 7 + y + 21;
      if (board[idx] !== "white") {
        if (
          board[idx] === board[idx - 6] &&
          board[idx] === board[idx - 12] &&
          board[idx] === board[idx - 18]
        ) {
          console.log("someone Win");
          return board[idx];
        }
      }
    }
  }

  return [[], null];
}

const handleColor = (state, action) => {
  // define difference situations to change different state result
  switch (action.type) {
    case "reset":
      return getInitialState();
    case "change_color":
      if (state.winner) {
        return state;
      }
      //   console.log(action.index);

      const newBoard = [...state.board];
      let column = action.index % 7;
      let index = 5 * 7 + column;
      console.log("col", column);

      let copyfillIndex = [...state.filledIndex];
      while (copyfillIndex.includes(index)) {
        index -= 7;
      }

      if (index < 0) {
        return state;
      }

      console.log(state.filledIndex);
      newBoard[index] = state.color;
      // in return will update the state

      const [winningIndices, winner] = checkWinner(newBoard);

      return {
        ...state,
        board: newBoard,
        color: state.color === "red" ? "blue" : "red",
        filledIndex: [...state.filledIndex, index],
        winner: winner,
        winningIndices: winningIndices,
      };

    default:
      // this is to define the initial state otherwise the state would be undefined
      return state;
  }
};

const targetGrid = i => {
  console.log("clicked");
  return {
    type: "change_color",
    index: i
  };
};

const Game = () => {
  const [state, dispatch] = useReducer(handleColor, getInitialState());
  return (
    <>
      <Board
        board={state.board}
        winner={state.winner}
        onClickReset={() => dispatch({ type: "reset" })}
        onClick={i => dispatch(targetGrid(i))}
        winningIndices={state.winningIndices}
      />
      {state.winner? <p>{state.winner}</p>: null}
    </>
  );
};

export default Game;
