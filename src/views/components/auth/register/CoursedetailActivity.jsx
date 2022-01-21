import React from 'react';
import Select from 'react-select';
import  { array, func } from 'prop-types';

const CoursedetailActivity = ({
    options, value, setValue,
}) => {
    const activityChange = (selected) => {
        const adata = selected.map((val) => (val.value));
        setValue(adata);
    };
    return (
        <div className="row">
            <h3 className="text-center bottom-title">choose co-curricular</h3>
            <p className="text-center bottom-desc">Select either one or multiple subjects you want to study</p>
            <div className="col-md-6 course-detail-select mutiple-dropdown-part activity-dropdown">
                <div className="label-div">Select Co-Curricular*</div>
                <Select isMulti onChange={activityChange} options={options} value={value?.value} />
            </div>
            <div className="col-md-6 course-detail-select mutiple-dropdown-part mutiple-dropdown-part-right">
                <div className="selected-top">
                    {value.length > 0 && value.map((data) => (
                        <div className="selected-common">
                            {data}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

CoursedetailActivity.propTypes = {
    options: array.isRequired,
    setValue: func.isRequired,
    value: array.isRequired,
};

export default CoursedetailActivity;
