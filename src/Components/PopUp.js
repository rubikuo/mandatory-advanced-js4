import React from "react";
import ReactDOM from "react-dom";


const PopUp = ({ winner, onClickReset }) => {
 
  return ReactDOM.createPortal(
    <div className="popUp">
      <p>{winner}</p>
      <button className="resetBtn" onClick={onClickReset}>Play Again</button>
    </div>,
    document.body
  );
};

export default PopUp;
