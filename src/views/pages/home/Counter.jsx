import React from "react";

function Counter() {
  return (
    <div>
      <div className="counter-main">
        <div className="row">
          <div className="col-md-3">
            <div className="col-md-12 counter-common">
              <div className="row">
                <h4>500,000 +</h4>
                <p>Questions for a quiz</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 counter-common">
              <div className="row">
                <h4>50 +</h4>
                <p>Extra curricular activities</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 counter-common">
              <div className="row">
                <h4>5000 +</h4>
                <p>Minutes of Brain-gym activity</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-12 counter-common">
              <div className="row">
                <h4>500 +</h4>
                <p>Hours of Olympiad training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
