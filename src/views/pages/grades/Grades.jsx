import React from "react";
import Sidebar from "./Sidebar";
import Rightpart from "./Rightpart";
import "./sidebar.scss";

const Grades = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <Rightpart />
        </div>
      </div>
    </div>
  );
};
export default Grades;
