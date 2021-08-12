import React from "react";
import Sidebar from "./Sidebar";
import Rightpart from "./Rightpart";
import "./sidebar.scss";
import Syllabuslink from "../Syllabus/Syllabuslink";

const Grades = () => {
  return (
    <div>
      <div className="grade-container">
        {/* <Sidebar /> */}
        <Syllabuslink />
        <Rightpart />
      </div>
    </div>
  );
};
export default Grades;
