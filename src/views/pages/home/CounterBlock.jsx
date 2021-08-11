import React from "react";

const CounterBlock = ({ title, desc }) => {
  return (
    <div className="col-md-3">
      <div className="col-md-12 counter-common">
        <div className="row">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBlock;
