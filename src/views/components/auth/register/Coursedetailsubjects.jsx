import React, { useState } from 'react';
import  { array, string, object } from 'prop-types';

const Coursedetailsubjects = ({
    label, data, setSubjectVal, subjectVal, validation,
}) => {
    const [checked, setChecked] = useState([]);
    const handleClick = (value, ind) => {
        if (checked.indexOf(ind) > -1) {
            const filteredValues = checked.filter((val) => val !== ind);
            setChecked([...filteredValues]);
        } else {
            setChecked([...checked, ind]);
        }

        if (subjectVal.indexOf(value) > -1) {
            const filteredsubjects = subjectVal.filter((val) => val !== value);
            setSubjectVal([...filteredsubjects]);
        } else {
            setSubjectVal([...subjectVal, value]);
        }
    };

    return (
        <div className="col-md-6 subject-list-main">
            <label className="label" htmlFor="sublist">{label}</label>
            <div>
                {data.map((val, ind) => (
                    <div
                        key={val.value}
                        className={`subject-list ${
                            checked.indexOf(ind) > -1 ? 'active' : ''
                        }`}
                    >

                        <label htmlFor={val.label} className="round">
                            <input type="checkbox" id={val.label} onClick={() => handleClick(val.value, ind)} />
                            <span className="checkmark"  />
                        </label>
                        {val.value}
                    </div>
                ))}
            </div>
            {validation.subjects && <span className="error-msg">subject is required.</span>}
        </div>
    );
};

Coursedetailsubjects.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
    setSubjectVal: object.isRequired,
    subjectVal: array.isRequired,
    validation: object.isRequired,
};

export default Coursedetailsubjects;
