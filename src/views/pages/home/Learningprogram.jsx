import React from "react";

import { Building, errowRight } from "../../../assets/icons/IconList";

function Learningprogram() {
  return (
    <div className="learningprogram-main">
      <div className="row">
        <div className="col-md-3 learning-progress-left">
          <h4>
            <span className="our">Our</span>
            <span className="learn">learning</span>
          </h4>
          <h4>programs - A</h4>
          <h4>holistic approach.</h4>

          <p>
            We pride ourselves in our ability to provide holistic learning for
            your child. Our educators have carefully crafted programs that help
            your child with learning various topics & skillsets in classroom &
            beyond.
          </p>
        </div>
        <div className="col-md-9 learning-progress-right">
          <div className="row">
            <div className="col-md-6 ">
              <div className="col-md-12 learning-block-main first">
                <div className="row">
                  <div className="col-md-3 learning-block-left">
                    <div className="icon">{Building}</div>
                  </div>
                  <div className="col-md-7 learning-block-right">
                    <h5>Classroom</h5>
                    <p>Lorem ipsum dolar sit ametSip alum doren</p>
                  </div>

                  <div className="col-md-2 learning-right-icon">
                    {errowRight}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 learning-six-second">
              <div className="col-md-12 learning-block-main second">
                <div className="row">
                  <div className="col-md-3 learning-block-left">
                    <div className="icon">{Building}</div>
                  </div>
                  <div className="col-md-7 learning-block-right">
                    <h5>Extra curricular activities </h5>
                    <p>Lorem ipsum dolar sit ametSip alum doren</p>
                  </div>

                  <div className="col-md-2 learning-right-icon">
                    {errowRight}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 ">
              <div className="col-md-12 learning-block-main third">
                <div className="row">
                  <div className="col-md-3 learning-block-left">
                    <div className="icon">{Building}</div>
                  </div>
                  <div className="col-md-7 learning-block-right">
                    <h5>Self-paced learning</h5>
                    <p>Lorem ipsum dolar sit ametSip alum doren</p>
                  </div>

                  <div className="col-md-2 learning-right-icon">
                    {errowRight}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="col-md-12 learning-block-main fourth">
                <div className="row">
                  <div className="col-md-3 learning-block-left">
                    <div className="icon">{Building}</div>
                  </div>
                  <div className="col-md-7 learning-block-right">
                    <h5>Olympiad</h5>
                    <p>Lorem ipsum dolar sit ametSip alum doren</p>
                  </div>

                  <div className="col-md-2 learning-right-icon">
                    {errowRight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learningprogram;
