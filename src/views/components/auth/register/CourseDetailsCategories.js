import React, { useState } from 'react';
import  { array, string, object } from 'prop-types';

const CourseDetailsCategories = ({
    label, data, setCategoryVal, categoryVal, validation, userType,
}) => {
    const [checked, setChecked] = useState([]);

    const handleClick2 = (value, ind) => {
        if (checked.indexOf(ind) > -1) {
            const filteredValues = checked.filter((val) => val !== ind);
            setChecked([...filteredValues]);
        } else {
            setChecked([...checked, ind]);
        }

        if (categoryVal.indexOf(value) > -1) {
            const filteredsubjects = categoryVal.filter((val) => val !== value);
            setCategoryVal([...filteredsubjects]);
        } else {
            setCategoryVal([...categoryVal, value]);
        }
    };

    return (
        <div className="col-md-6 subject-list-main" style={{ display: (userType === 'Student' ? 'block' : 'none')  }}>
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
                            <input type="checkbox" id={val.label} onClick={() => handleClick2(val.value, ind)} />
                            <span className="checkmark"  />
                        </label>
                        {val.value}
                    </div>
                ))}
            </div>
            {validation.category && <span className="error-msg">category is required.</span>}
        </div>
    );
};

CourseDetailsCategories.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
    setCategoryVal: object.isRequired,
    categoryVal: array.isRequired,
    validation: object.isRequired,
    userType: string.isRequired,

};

export default CourseDetailsCategories;
