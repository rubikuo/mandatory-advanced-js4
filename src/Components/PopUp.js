import React from "react";
import ReactDOM from "react-dom";
import {handleColor} from "../Reducer/handleColor";


const PopUp = ({ winner, onClickReset }) => {
 
  return ReactDOM.createPortal(
    <div className="popUp">
      <p>{winner}</p>

      <button onClick={onClickReset}>Reset</button>
    </div>,
    document.body
  );
};

export default PopUp;
