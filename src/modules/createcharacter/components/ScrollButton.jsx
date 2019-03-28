import React from "react";

import "./css/ScrollButton.scss";

const ScrollButton = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}

      className={
        props.type === "up" ? "btn btn-up" : "btn btn-down"
      }

      onClick={props.action}>
    </button>
  );
};

export default ScrollButton;