import React from "react";
import { errowRight } from "../../../assets/icons/IconList";
import { SubjectData } from "./mockData/SubjectlistData";

function Subjectlist() {
  return (
    <div>
      <div>
        <div className="row sub-list-main">
          {SubjectData.map((data, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img src={data.image} alt="webbsite_log"/>
                <h5>{data.title}</h5>
              </div>
            );
          })}
          <div className="col-md-2 ">
            <span className="sub-next">Next {errowRight}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjectlist;
