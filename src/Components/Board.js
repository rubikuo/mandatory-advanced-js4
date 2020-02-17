import React from "react";
import styles from "./Board.module.css";

const Board = ({ board, onClick, winningIndices }) => {
  return (
    <div className={styles.board}>
      {board.map((grid, index) => {
        return (
          <div
            key={index}
            onClick={() => onClick(index)}
            className={styles.grid}
            // to check if the winningIndices includes the index we have then 
            style={{ backgroundColor: grid, border: winningIndices.includes(index) ? `3px dashed #FFFC8E` : `1px solid silver` }}
          ></div>
        );
      })}
     
    </div>
  );
};

export default Board;
