import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import  { array, string } from 'prop-types';

const CoursedetailMultipledropdown = ({ label, data }) => (
    <div className="col-md-6 course-detail-select mutiple-dropdown-part">
        <label htmlFor="multidropdown-label">{label}</label>
        <ReactMultiSelectCheckboxes
            options={data}
            placeholderButtonLabel={data[0].label}

        />

    </div>
);

CoursedetailMultipledropdown.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
};

export default CoursedetailMultipledropdown;
