import React, { useEffect, useState } from "react";
import { errowRight } from "../../../assets/icons/IconList";
import { SubjectData } from "./mockData/SubjectlistData";
import { Link } from "react-router-dom";

function Subjectlist({ subdata, setSubdata }) {
  return (
    <div>
      <div className=" sub-list-main">
        {SubjectData.map((data, index) => {
          return (
            <div
              className={`col-md-2 ${subdata === data.title && `active`}`}
              key={index}
            >
              <Link to={`/syllabus/${data.title}`}>
                <img src={data.image} alt="webbsite_log" />
                <h5>{data.title}</h5>
              </Link>
            </div>
          );
        })}
        <div className="col-md-2 ">
          <span className="sub-next">Next {errowRight}</span>
        </div>
      </div>
    </div>
  );
}

export default Subjectlist;
