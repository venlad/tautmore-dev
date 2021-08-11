import React from "react";

const GivegiftBlock = ({ icon, content, className }) => {
  return (
    <div className={`gift-common row ${className}`}>
      <div className="col-md-1">
        <div className="icon">{icon}</div>
      </div>
      <div className="col-md-11">
        <h5>{content}</h5>
      </div>
    </div>
  );
};

export default GivegiftBlock;
