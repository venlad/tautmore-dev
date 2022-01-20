import React from 'react';
import Select from 'react-select';
import  { array, func } from 'prop-types';

const CoursedetailActivity = ({ options, onChange }) => (
    <div className="row">
        <h3 className="text-center bottom-title">choose co-curricular</h3>
        <p className="text-center bottom-desc">Select either one or multiple subjects you want to study</p>
        <div className="col-md-6 course-detail-select mutiple-dropdown-part activity-dropdown">
            <div className="label-div">Select Co-Curricular*</div>
            <Select isMulti onChange={onChange} options={options} />
        </div>
    </div>
);

CoursedetailActivity.propTypes = {
    options: array.isRequired,
    onChange: func.isRequired,
};

export default CoursedetailActivity;
