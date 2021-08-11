import React from "react";
import { Building, errowRight } from "../../../assets/icons/IconList";

function LearningprogramBlock({ title, desc, className, second }) {
  return (
    <div className={`col-md-6 ${second}`}>
      <div className={`col-md-12 learning-block-main ${className}`}>
        <div className="row">
          <div className="col-md-3 learning-block-left">
            <div className="icon">{Building}</div>
          </div>
          <div className="col-md-7 learning-block-right">
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>

          <div className="col-md-2 learning-right-icon">{errowRight}</div>
        </div>
      </div>
    </div>
  );
}

export default LearningprogramBlock;
