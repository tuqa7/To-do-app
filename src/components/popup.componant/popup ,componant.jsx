import React from "react";
import "./popup.css";

const PopUp = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>

        {<div>Are You Sure that You Want To Delete ?!</div>}
        <div><button onClick={props.handledelete}>yes</button></div>
      </div>
    </div>
  );
};

export default PopUp;