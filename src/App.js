import React from "react";
import Game from "./Components/Game";
import "./App.css";

//arrays in arrays board[7][6] --> board[y*7+x]

const App = () => {
  return (
    <>
      <Game />
      <footer className="footer">
        <p>&copy; Ju-I Kuo || Feb. 2020</p>{" "}
      </footer>
    </>
  );
};

export default App;
