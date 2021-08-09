import React from "react";
import { chevRight } from "../../../assets/icons/IconList";

function Banner() {
  return (
    <div className="banner-main">
      <div className="row">
        <div className="col-md-6 banner-left">
          <h4>
            Better <span>Learning.</span>
          </h4>
          <h4>Better Results.</h4>

          <p>
            Tautmore is a holistic platform with focus on both classroom &
            co-curricular learning. Give your child the gift of wholesome
            development & prepare for the future.
          </p>
          <button>
            Let’s try brain - gym <span>{chevRight}</span>
          </button>

          <div className="banner-left-bottom-icon"></div>
        </div>
        <div className="col-md-6 banner-right"></div>
      </div>
    </div>
  );
}

export default Banner;
