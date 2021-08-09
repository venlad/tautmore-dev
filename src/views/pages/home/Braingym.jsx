import React from "react";
import { chevRight } from "../../../assets/icons/IconList";
function Braingym() {
  return (
    <div>
      <div className="brain-main">
        <div className="row">
          <div className="col-md-5">
            <h4>
              Brain - <span>gym</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec teturadipiscing elit, sed do
              eiusmod tem porincididunt ut
            </p>
            <button>
              Let’s try brain-gym
              <span>{chevRight}</span>
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Braingym;
