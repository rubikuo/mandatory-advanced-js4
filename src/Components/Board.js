import React from "react";
import styles from "./Board.module.css";

const Board = ({ board, onClick, onClickReset,winner, winningIndices }) => {
  return (
    <div className={styles.board}>
      {board.map((grid, index) => {
        return (
          <div
            key={index}
            onClick={() => onClick(index)}
            className={styles.grid}
            style={{ backgroundColor: winningIndices.includes(index) ? "gold" : grid }}
          >{index}</div>
        );
      })}
      {winner? <button onClick={onClickReset}>Reset</button>: null}
    </div>
  );
};

export default Board;
