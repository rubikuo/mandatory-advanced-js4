export const getInitialState = () => {
    const initialboard = new Array(7 * 6).fill("white");
  
    return {
      board: initialboard, // define default box as initialboxes
      color: "#D787E9", // define default color as #D787E9
      filledIndex: [],
      winner: null,
      winningIndices: []
    };
  }
  