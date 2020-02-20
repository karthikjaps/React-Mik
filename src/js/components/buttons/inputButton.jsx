import React from "react";

const InputButton = props => (
  <input
    type={props.type}
    value={props.value}
    className={`button ${props.className} ${
      props.loading ? "button--loading" : ""
    }`}
    disabled={props.disabled}
    onClick={props.onButtonClick}
    onTouchStart={e => {
      e.target.classList.add("button--touch");
    }}
    onTouchEnd={e => {
      e.target.classList.remove("button--touch");
    }}
  />
);

export default InputButton;
