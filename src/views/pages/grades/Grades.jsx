import React from "react";
import Rightpart from "./Rightpart";
import "./sidebar.scss";
import Chapterslink from "../Chapters/Chapterslink";

const Grades = () => {
  return (
    <div>
      <div className="grade-container">
        <Chapterslink />
        <Rightpart />
      </div>
    </div>
  );
};
export default Grades;
