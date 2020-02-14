import React, {useReducer} from 'react';
import Game from "./Components/Game";
import './App.css';

//arrays in arrays board[7][6] --> board[y*7+x]

const App =()=> {


  return (
  
    <div className="container">
      
      <Game />
    </div>
  );
}

export default App;


