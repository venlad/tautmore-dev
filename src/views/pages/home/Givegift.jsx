import React from "react";
import { chevRight } from "../../../assets/icons/IconList";

function Givegift() {
  return (
    <div>
      <div className="give-gift-main">
        <div className="row">
          <div className="col-md-6 gift-left">
            <div className="gift-common gift-common-1 row">
              <div className="col-md-1">
                <div className="icon">1</div>
              </div>
              <div className="col-md-11">
                <h5>Enrol your child</h5>
              </div>
            </div>
            <span className="border-common"></span>
            <div className="gift-common gift-common-2 row">
              <div className="col-md-1">
                <div className="icon">2</div>
              </div>
              <div className="col-md-11">
                <h5>Select one of our programs</h5>
              </div>
            </div>
            <span className="border-common border-common-2"></span>
            <div className="gift-common gift-common-3 row">
              <div className="col-md-1">
                <div className="icon">3</div>
              </div>
              <div className="col-md-11">
                <h5>Lorem ipsum dolar sit</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 gift-right">
            <h4>
              <span className="span-1">Give</span> the gift
              <span className="span-2"> of</span>
              <span className="span-3"> better</span>
              <br />
              learning in just 3
              <br />
              easy <span className="span-4">steps</span>.
            </h4>

            <button>
              Subscribe now
              <span>{chevRight}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Givegift;
