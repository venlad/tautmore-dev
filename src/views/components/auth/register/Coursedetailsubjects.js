import React, { useState } from "react";

const Coursedetailsubjects = ({ label, data }) => {
  const [checked, setChecked] = useState([]);
  const handleClick = (value) => {
    if (checked.indexOf(value) > -1) {
      alert("yes");
    } else {
      alert("no");
    }
  };

  return (
    <div className="col-md-6 subject-list-main">
      <label className="label">{label}</label>
      <div>
        {data.map((data, ind) => {
          return (
            <div key={ind} className="subject-list">
              <label className={`round ${ind === checked ? "active" : ""}`}>
                <input type="checkbox" onClick={() => handleClick(ind)} />
                <span class="checkmark"></span>
              </label>
              {data.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coursedetailsubjects;
