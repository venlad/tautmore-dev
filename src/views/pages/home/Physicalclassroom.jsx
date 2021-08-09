import React from "react";
import { User } from "../../../assets/icons/IconList";

function Physicalclassroom() {
  return (
    <div>
      <div className="physical-classroom-main">
        <h4>
          As good as a physical class<span>room</span>
        </h4>

        <p className="main-p">
          At Tautmore we have created processes to mimic physical classrooms and
          help your child learn with similar enthusiasm
        </p>

        <div className="row">
          <div className="col-md-3">
            <div className="col-md-12 common-div common-div-1">
              {User}
              <h5>
                Joyful, Self paced <br />
                learning
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 common-div common-div-2">
              {User}
              <h5>
                Live classes &
                <br />
                assessments.
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 common-div common-div-3">
              {User}
              <h5>
                Doubt clearing
                <br />
                sessions
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 common-div common-div-4">
              {User}
              <h5>
                Fun badges &
                <br />
                awards
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Physicalclassroom;
