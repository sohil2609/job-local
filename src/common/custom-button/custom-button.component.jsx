import React from "react";

const CustomButton = ({ extraCssClass, text, onClick, type }) => (
  <button className={`btn ${extraCssClass}`} type={type} onClick={onClick}>
    {text}
  </button>
);

export default CustomButton;
