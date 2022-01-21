import React from 'react';
import  { array } from 'prop-types';
import { v4 as uuid } from 'uuid';
import add from '../../../../../assets/images/plus-green.svg';
import SubjectItem from './SubjectItem';

const Subject = ({
    subjects, setSubjects, subjectOptions,
}) => {
    const addSubject = () => {
        const subjectObject = {
            id: uuid(),
            subject: '',
            classCount: 4,
            examTypes: [],
        };
        setSubjects([...subjects, subjectObject]);
    };

    const removeSubject = (id) => {
        const filterSubject = subjects?.filter((item) => item?.id !== id);
        setSubjects(filterSubject);
    };

    const handleClassCount = (id, val, countType) => {
        const filterSubject = subjects?.map((item) => {
            const adder = parseInt(val, 10);
            if (item?.id === id) {
                let number = 10;
                if (countType === 'minus') {
                    number -= adder;
                } else if (countType === 'plus') {
                    number += adder;
                } else if (countType === 'blur') {
                    const remainder = number % 4;
                    if (remainder < 2) {
                        number -= remainder;
                    } else if (remainder >= 2) {
                        number = number + 4 - remainder;
                    }
                } else {
                    number = adder;
                }
                if (number < 4) {
                    return { ...item, classCount: 4 };
                }
                return { ...item, classCount: number };
            }
            return item;
        });

        setSubjects(filterSubject);
    };

    return (
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
};

Subject.propTypes = {
    subjects: array.isRequired,
    setSubjects: array.isRequired,
    subjectOptions: array.isRequired,
};

export default Subject;
