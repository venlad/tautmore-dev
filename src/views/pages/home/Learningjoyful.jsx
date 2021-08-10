import React from "react";
import { chevRight } from "../../../assets/icons/IconList";
import joyfulImg from "../../../assets/images/Group 27.png";

function Learningjoyful() {
  return (
    <div>
      <div className="learningjoyful-main">
        <div className="row">
          <div className="col-md-6 learningjoyful-left">
            <img src={joyfulImg} alt="Joyful_img" />
          </div>
          <div className="col-md-5">
            <h4>
              Tautmore makes <br />
              learning joyful
            </h4>

            <p>
              Brain gym is a unique activity created by our educators. It tests
              your child on various skills everyday for 10 mins. It’s a fun
              activity that also helps your child learn concepts beyond
              classroom.
            </p>
            <button>
              Let’s try brain-gym
              <span>{chevRight}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learningjoyful;
