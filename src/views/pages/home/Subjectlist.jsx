import React from "react";
import { errowRight } from "../../../assets/icons/IconList";
import { SubjectData } from "./mockData/SubjectlistData";
import { Link } from "react-router-dom";

function Subjectlist(props) {
  return (
    <div>
      <div className={`sub-list-main ${props.subdata && `mainactive`}`}>
        {SubjectData.map((data) => {
          return (
            <div
              className={`col-md-2 ${props.subdata === data.title && `active`}`}
              key={data.key}
            >
              <Link to={`/chapters/${data.title}`}>
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
