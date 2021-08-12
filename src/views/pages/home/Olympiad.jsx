import React from "react";
import olympidImg from "../../../assets/images/Groupolm.png";
import Buttoncommon from "./Buttoncommon";

function Olympiad() {
  return (
    <div>
      <div className="olympiad-main">
        <div className="row">
          <div className="col-md-6 olympiad-left">
            <img src={olympidImg} alt="Olympid_img" />
          </div>
          <div className="col-md-4">
            <h4>
              Olymp<span>iad</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tem por incididunt ut
            </p>

            <Buttoncommon content="Take sample test" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Olympiad;
