import React, { useState } from 'react';
import Select from 'react-select';
import  { array, string, func } from 'prop-types';
import minus from '../../../../assets/images/minus-button.png';
import plus from '../../../../assets/images/plus-button.png';
import remove from '../../../../assets/images/remove-red.svg';
import add from '../../../../assets/images/plus-green.svg';
import { examTypesOptions } from './mockData/Coursedetailsdata';

const CoursedetailChoosesub = ({ subjectValue, setSubjectVal, subjectVal }) => {
    const [part, setPart] = useState(['']);
    const [counter, setCounter] = useState(0);

    const addSubject = () => {
        setPart([...part, '']);
    };

    const plusCounter = () => {
        setCounter(counter + 1);
    };

    const minusCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div>
            <h3 className="text-center bottom-title">choose subjects</h3>
            <p className="text-center bottom-desc">Select either one or multiple subjects you want to study</p>
            {part.map(() => (
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
                                <div className="counter" onClick={minusCounter} aria-hidden="true"><img src={minus} alt="minus" /></div>
                                <div className="input-box"><input type="text" value={counter} /></div>
                                <div className="counter" onClick={plusCounter} aria-hidden="true"><img src={plus} alt="plus" /></div>
                                <div className="remove-part"><img src={remove} alt="remove" /> REMOVE</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 course-detail-select mutiple-dropdown-part activity-dropdown">
                        <div className="label-div">Select exam(s)*</div>
                        <Select options={examTypesOptions} isMulti />
                    </div>
                    <div className="col-md-6 course-detail-select" />
                </div>
            ))}
            <div className="col-md-6 course-detail-select" />
            <div className="text-center">
                <button type="button" className="add-subject" onClick={addSubject}>
                    <img src={add} alt="add" />add subject
                </button>
            </div>
        </div>
    );
};

CoursedetailChoosesub.propTypes = {
    subjectValue: array.isRequired,
    subjectVal: string.isRequired,
    setSubjectVal: func.isRequired,
};

export default CoursedetailChoosesub;
