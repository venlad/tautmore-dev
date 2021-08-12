import React from "react";

const Coursedetaildropdown = ({ label, data }) => {
  return (
    <div className="col-md-6 course-detail-select">
      <label>{label}</label>
      <select>
        {data.map((data, ind) => {
          return (
            <option key={ind} value={data.title}>
              {data.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Coursedetaildropdown;
