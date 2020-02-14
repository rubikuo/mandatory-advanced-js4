import React, { useReducer } from "react";
import Board from "./Board";

function checkWinner(board) {
  // check rows
  // check columns
  // check diagonal 1
  // check diagonal 2
}

const handleColor = (state, action) => {
  // define difference situations to change different state result
  switch (action.type) {
    case "change_color":
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

      const winner = checkWinner(newBoard);

      return {
        board: newBoard,
        color: state.color === "red" ? "blue" : "red",
        filledIndex: [...state.filledIndex, index]
      };

    default:
      // this is to define the initial state otherwise the state would be undefined
      return state;
  }
};

const targetGrid = i => {
  return {
    type: "change_color",
    index: i
  };
};

const Game = () => {
  const initialboard = new Array(7 * 6).fill("white");

  const [state, dispatch] = useReducer(handleColor, {
    board: initialboard, // define default box as initialboxes
    color: "red", // define default color as red
    filledIndex: []
  });
  return (
    <>
      <Board board={state.board} onClick={i => dispatch(targetGrid(i))} />
    </>
  );
};

export default Game;
