import React from "react";
import { chevRight } from "../../../assets/icons/IconList";

const Button = ({ content }) => {
  return (
    <button className="button-common">
      {content}
      <span>{chevRight}</span>
    </button>
  );
};

export default Button;
