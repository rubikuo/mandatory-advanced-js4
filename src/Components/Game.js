import React, { useReducer } from "react";
import Board from "./Board";
import { targetGrid } from "../Actions/action";
import { getInitialState } from "../Functions/initialState";
import { handleColor } from "../Reducer/handleColor";
import PopUp from "./PopUp";

const Game = () => {
  const [state, dispatch] = useReducer(handleColor, getInitialState());
  return (
    <>
      <div className="container">
        <Board
          board={state.board}
          onClick={i => dispatch(targetGrid(i))}
          winningIndices={state.winningIndices}
        />
      </div>
      {state.winner ? (
        <PopUp
          winner={state.winner}
          onClickReset={() => dispatch({ type: "reset" })}
        />
      ) : null}
    </>
  );
};

export default Game;
