import React from "react";
import { chevRight } from "../../../assets/icons/IconList";
import olympidImg from "../../../assets/images/Groupolm.png";

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
            <button>
              Take sample test
              <span>{chevRight}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Olympiad;
