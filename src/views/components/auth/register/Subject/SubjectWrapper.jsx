import React from 'react';
import  { array, func } from 'prop-types';
import add from '../../../../../assets/images/plus-green.svg';
import SubjectItem from './SubjectItem';

const Subject = ({
    subjects, removeSubject, handleClassCount, subjectOptions, addSubject,
}) => (
    <div>
        <h3 className="text-center bottom-title">choose subjects</h3>
        <p className="text-center bottom-desc">Select either one or multiple subjects you want to study</p>
        {subjects.map((subjectItem) => (
            <SubjectItem
                removeSubject={removeSubject}
                subjectOptions={subjectOptions}
                subjectItem={subjectItem}
                handleClassCount={handleClassCount}
            />
        ))}
        <div className="col-md-6 course-detail-select" />
        <div className="text-center">
            <button type="button" className="add-subject" onClick={addSubject}>
                <img src={add} alt="add" />add subject
            </button>
        </div>
    </div>
);

Subject.propTypes = {
    addSubject: func.isRequired,
    removeSubject: func.isRequired,
    handleClassCount: func.isRequired,
    subjects: array.isRequired,
    subjectOptions: array.isRequired,
};

export default Subject;
