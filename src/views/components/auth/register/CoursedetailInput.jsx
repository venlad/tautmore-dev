import React from 'react';
import  { string, func } from 'prop-types';

const CoursedetailInput = ({
    label, type, name, id, value, setValue,
}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="coursedetail-input-part">
            <div className="label-div">{label}</div>
            <input type={type} name={name} id={id} value={value} onChange={handleChange} />
        </div>
    );
};

CoursedetailInput.propTypes = {
    label: string.isRequired,
    type: string.isRequired,
    name: string.isRequired,
    id: string.isRequired,
    value: string.isRequired,
    setValue: func.isRequired,
};

export default CoursedetailInput;
