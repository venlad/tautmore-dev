import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import  { array, string } from 'prop-types';

const CoursedetailMultipledropdown = ({ label, data, setData }) => {
    const handleChange = (selected) => {
        console.log(selected, 'selected');
        const sdata = selected.map((val) => (val.value));
        setData(sdata);
    };
    return (
        <div className="col-md-6 course-detail-select mutiple-dropdown-part">
            <label htmlFor="multidropdown-label">{label}</label>
            <ReactMultiSelectCheckboxes
                options={data}
                placeholderButtonLabel={data[0].label}
                onChange={handleChange}
            />
        </div>
    );
};

CoursedetailMultipledropdown.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
    setData: array.isRequired,
};

export default CoursedetailMultipledropdown;
