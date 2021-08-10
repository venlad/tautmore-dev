import React from "react";
import physicalImg from "../../../assets/images/phyback.png";
import userone from "../../../assets/images/celebration.png";
import usertwo from "../../../assets/images/online-class.png";
import userthree from "../../../assets/images/male-teacher.png";
import userfour from "../../../assets/images/trophy.png";

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
            <div
              className="col-md-12 common-div common-div-1"
              style={{
                backgroundImage: `url(${physicalImg})`,
              }}
            >
              <img src={userone} alt="user_image" />
              <h5>
                Joyful, Self paced <br />
                learning
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="col-md-12 common-div common-div-2"
              style={{
                backgroundImage: `url(${physicalImg})`,
              }}
            >
              <img src={usertwo} alt="user_image" />
              <h5>
                Live classes &
                <br />
                assessments.
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="col-md-12 common-div common-div-3"
              style={{
                backgroundImage: `url(${physicalImg})`,
              }}
            >
              <img src={userthree} alt="user_image" />
              <h5>
                Doubt clearing
                <br />
                sessions
              </h5>
              <p>Lorem ipsum dolar sit amet Sip alum doren</p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="col-md-12 common-div common-div-4"
              style={{
                backgroundImage: `url(${physicalImg})`,
              }}
            >
              <img src={userfour} alt="user_image" />
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
