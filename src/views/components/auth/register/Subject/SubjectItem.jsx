import React from 'react';
import Select from 'react-select';
import  { array, string, func } from 'prop-types';
import minus from '../../../../../assets/images/minus-button.png';
import plus from '../../../../../assets/images/plus-button.png';
import remove from '../../../../../assets/images/remove-red.svg';
import { examTypesOptions } from '../mockData/Coursedetailsdata';

const SubjectItem = ({
    subjectItem, subjectValue, setSubjectVal, subjectVal, removeSubject, handleClassCount,
}) => (
    <div className="row choose-subject">
        <div className="col-md-6 course-detail-select">
            <div className="label-div">Select subject*</div>
            <Select
                options={subjectValue}
                value={subjectVal}
                onChange={(e) => setSubjectVal(e)}
            />
        </div>
        <div className="col-md-6 course-detail-select">
            <div className="row">
                <div className="col-md-12">
                    <div className="label-div">Select classes* <span className="info-icon">i</span></div>
                    <div className="counter" onClick={() => handleClassCount(subjectItem?.id, 4, 'minus')} aria-hidden="true"><img src={minus} alt="minus" /></div>
                    <div className="input-box"><input type="text" onBlur={() => handleClassCount(subjectItem?.id, 0, 'blur')} onChange={(e) => handleClassCount(subjectItem?.id, e.target.value, '')} value={subjectItem?.classCount} /></div>
                    <div className="counter" onClick={() => handleClassCount(subjectItem?.id, 4, 'plus')} aria-hidden="true"><img src={plus} alt="plus" /></div>
                    <div className="remove-part" onClick={() => removeSubject(subjectItem?.id)} aria-hidden="true"><img src={remove} alt="remove" /> REMOVE</div>
                </div>
            </div>
        </div>
        <div className="col-md-6 course-detail-select mutiple-dropdown-part activity-dropdown">
            <div className="label-div">Select exam(s)*</div>
            <Select options={examTypesOptions} isMulti />
        </div>
        <div className="col-md-6 course-detail-select" />
    </div>
);

SubjectItem.propTypes = {
    removeSubject: array.isRequired,
    subjectItem: array.isRequired,
    handleClassCount: array.isRequired,
    subjectValue: array.isRequired,
    subjectVal: string.isRequired,
    setSubjectVal: func.isRequired,
};

export default SubjectItem;
