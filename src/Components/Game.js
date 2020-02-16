import React, { useReducer } from "react";
import Board from "./Board";
import {targetGrid} from "../Actions/action";
import {getInitialState} from "../Functions/initialState";
import {handleColor} from "../Reducer/handleColor";


const Game = () => {
  const [state, dispatch] = useReducer(handleColor, getInitialState());
  return (
    <div className="container">
      <Board
        board={state.board}
        onClick={i => dispatch(targetGrid(i))}
        winningIndices={state.winningIndices}
      />
      {state.winner ? <p>{state.winner}</p> : null}
      {state.winner ? (
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      ) : null}
    </div>
  );
};

export default Game;
