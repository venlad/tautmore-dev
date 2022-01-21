import React from 'react';
import  { array, object, func } from 'prop-types';
import { v4 as uuid } from 'uuid';
import SubjectWrapper from './SubjectWrapper';

const Subject = ({ subjectValue, subjects, setSubjects }) => {
    const addSubject = () => {
        const subjectObject = {
            id: uuid(),
            subject: {},
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
        const updatedSubject = subjects?.map((item) => {
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

        setSubjects(updatedSubject);
    };

    const handleSelectSubject = (id, value) => {
        console.log(id, value);
        const updatedSubject = subjects?.map((item) => {
            if (item?.id === id) {
                return { ...item, subject: value };
            }
            return item;
        });
        setSubjects(updatedSubject);
    };

    const handleSelectExams = (id, value) => {
        const updatedSubject = subjects?.map((item) => {
            if (item?.id === id) {
                return { ...item, exams: value };
            }
            return item;
        });
        setSubjects(updatedSubject);
    };

    console.log(subjectValue, subjects);

    return (
        <SubjectWrapper
            addSubject={addSubject}
            removeSubject={removeSubject}
            handleClassCount={handleClassCount}
            handleSelectSubject={handleSelectSubject}
            handleSelectExams={handleSelectExams}
            subjects={subjects}
            setSubjects={setSubjects}
            subjectOptions={subjectValue}
        />
    );
};

Subject.propTypes = {
    subjectValue: array.isRequired,
    subjects: object.isRequired,
    setSubjects: func.isRequired,
};

export default Subject;
