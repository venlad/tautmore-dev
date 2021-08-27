import React from 'react';
import  { string } from 'prop-types';

const Createstudent = ({
    name, labelone, labeltwo, className, classNametwo,
}) => (
    <div>
        <h4 className={`text-center ${classNametwo}`}>{name}</h4>
        <div className={`row create-student-main ${className}`}>
            <div className="col-md-6">
                <label htmlFor="course-label">{labelone}</label>
                <input type="text" />
            </div>
            <div className="col-md-6">
                <label htmlFor="course-label">{labeltwo}</label>
                <input type="text" />
            </div>
        </div>
    </div>
);

Createstudent.propTypes = {

    name: string.isRequired,
    labelone: string.isRequired,
    labeltwo: string.isRequired,
    className: string.isRequired,
    classNametwo: string.isRequired,
};

export default Createstudent;
