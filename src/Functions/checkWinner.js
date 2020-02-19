export const checkWinner = board => {
  // check rows and jump every 7 cells
  let winColor;
  for (let x = 0; x <= 35; x += 7) {
    // to check next 3 neighbours in one row
    for (let y = x; y <= x + 3; y++) {
      if (board[y] !== "white") {
        if (
          board[y] === board[y + 1] &&
          board[y] === board[y + 2] &&
          board[y] === board[y + 3]
        ) {
          if (board[y] === "#D787E9") {
            winColor = "Pink";
          } else {
            winColor = "Blue";
          }
          return [[y, y + 1, y + 2, y + 3], `${winColor} Win `];
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
          if (board[y] === "#D787E9") {
            winColor = "Pink";
          } else {
            winColor = "Blue";
          }

          return [[y, y + 7, y + 14, y + 21], `${winColor} Win `];
        }
      }
    }
  }
  // check diagonal 1
  //  go down 3 rows
  for (let x = 0; x < 3; x++) {
    // go 4 columns
    for (let y = 0; y < 4; y++) {
      let idx = x * 7 + y;
      if (board[idx] !== "white") {
        if (
          board[idx] === board[idx + 8] &&
          board[idx] === board[idx + 16] &&
          board[idx] === board[idx + 24]
        ) {
          if (board[idx] === "#D787E9") {
            winColor = "Pink";
          } else {
            winColor = "Blue";
          }
          return [[idx, idx + 8, idx + 16, idx + 24], `${winColor} Win `];
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
          if (board[idx] === "#D787E9") {
            winColor = "Pink";
          } else {
            winColor = "Blue";
          }
          return [[idx, idx - 6, idx - 12, idx - 18], `${winColor} Win `];
        }
      }
    }
  }

  for (let i = 0; i <= 41; i++) {
    if (!board.includes("white")) {
      return [[], "Draw"];
    }
  }

  return [[], null];
};
