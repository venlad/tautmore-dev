import React, { forwardRef } from "react";
import aeroplane from "../../../assets/images/travelling.png";

const SubtopicDesc = forwardRef(({ isShow, shouldToggleStyle, index }, ref) => {
  return (
    isShow && (
      <div
        className={`subtopic-desc ${
          !shouldToggleStyle ? "toggle" : "no-toggle"
        }`}
        ref={ref}
        id={index}
        onClick={shouldToggleStyle}
      >
        <h1>How many planes can you spot flying here?</h1>
        <div className="desc-img-cont">
          {[1, 2, 3, 4, 5, 6, 7].map((imgKey) => {
            return (
              <div className="img-cont" key={imgKey}>
                <img src={aeroplane} alt="aeroplane_img" />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
});

export default SubtopicDesc;
