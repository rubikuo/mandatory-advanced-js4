import React, {useReducer} from "react";
import styles from "./Board.module.css"


const Board = ({board, onClick}) =>{
   
    return(
        <div className={styles.board}>
            {board.map((grid, index)=> {
                return(
                    <div 
                    key={index}
                    onClick={() => onClick(index)} 
                    className={styles.grid}
                    style={{backgroundColor: grid}}> 
                    </div>
                )
            })}

        </div>
    )

}

export default Board