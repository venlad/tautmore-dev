import React from "react";
import { Circle } from "../../../assets/icons/IconList";
import classroomimg from "../../../assets/images/Group 17.png";
import Buttoncommon from "./Buttoncommon";

function Classroom() {
  return (
    <div>
      <div className="classroom-main">
        <div className="row">
          <div className="col-md-6 classroom-left">
            <img src={classroomimg} alt="Classroom_img" />
          </div>
          <div className="col-md-4 classroom-right">
            <h4>
              Class<span>room</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tem por incididunt ut
            </p>

            <ul>
              <li>{Circle} Sed do eiusmod tem por incididunt ut</li>
              <li>{Circle} Lorem ipsum dolor sit amet</li>
              <li>{Circle} Consec tetur adipiscing elit</li>
            </ul>

            <Buttoncommon content="Subscribe now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classroom;
