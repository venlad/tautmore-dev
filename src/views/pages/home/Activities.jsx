import React from "react";
import { chevRight } from "../../../assets/icons/IconList";
import activityImg from "../../../assets/images/Group 14.png";

function Activities() {
  return (
    <div>
      <div className="activities-main">
        <div className="row">
          <div className="col-md-4">
            <h4>
              Ex<span>tra</span> - Curricular activities
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec teturadipiscing elit, sed do
              eiusmod tem porincididunt ut
            </p>
            <button>
              Subscribe now
              <span>{chevRight}</span>
            </button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7 activity-right">
            <img src={activityImg} alt="activity_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
