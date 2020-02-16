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
            // to check if the winningIndices includes the index we have then 
            style={{ backgroundColor: winningIndices.includes(index) ? "#FFFC8E" : grid }}
          ></div>
        );
      })}
     
    </div>
  );
};

export default Board;
