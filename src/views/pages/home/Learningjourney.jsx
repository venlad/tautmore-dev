import React from "react";
import { chevRight } from "../../../assets/icons/IconList";
import journeyImg from "../../../assets/images/Group 24.png";

function Learningjourney() {
  return (
    <div>
      <div className="learning-journey-main">
        <div className="row">
          <div className="col-md-5">
            <h4>
              <span>We</span> keep the fun
              <br />
              going throughout
              <br />
              the learning journey
            </h4>

            <button>
              Let’s try brain-gym
              <span>{chevRight}</span>
            </button>
          </div>
          <div className="col-md-7 learning-journey-right">
            <img src={journeyImg} alt="Journey_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learningjourney;
