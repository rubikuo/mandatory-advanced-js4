import { getInitialState } from "../Functions/initialState";
import { checkWinner } from "../Functions/checkWinner";

export const handleColor = (state, action) => {
  // define difference situations to change different state result
  switch (action.type) {
    case "reset":
      return getInitialState;
    case "change_color":
      if (state.winner) {
        return state;
      }

      const newBoard = [...state.board];
      let column = action.index % 7;
      let index = 5 * 7 + column;
      console.log("col", column);

      let copyfillIndex = [...state.filledIndex];
      while (copyfillIndex.includes(index)) {
        index -= 7;
      }
      // to stop the while loop
      if (index < 0) {
        return state;
      }

      // console.log(state.filledIndex);
      newBoard[index] = state.color;
      // in return will update the state

      const [winningIndices, winner] = checkWinner(newBoard);

      return {
        ...state,
        board: newBoard,
        color: state.color === "#D787E9" ? "#7199FF" : "#D787E9",
        filledIndex: [...state.filledIndex, index],
        winner: winner,
        winningIndices: winningIndices
      };

    default:
      // this is to define the initial state otherwise the state would be undefined
      return state;
  }
};
