import React, { useState } from 'react';
import  { array, string, func } from 'prop-types';
import { v4 as uuid } from 'uuid';
import SubjectWrapper from './SubjectWrapper';

const Subject = ({ subjectValue, setSubjectVal, subjectVal }) => {
    const [subjects, setSubjects] = useState([{
        id: uuid(),
        subject: '',
        classCount: 4,
        examTypes: [],
    }]);

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

    console.log(subjectValue, subjectVal, subjects);

    return (
        <SubjectWrapper
            addSubject={addSubject}
            removeSubject={removeSubject}
            handleClassCount={handleClassCount}
            v={setSubjectVal}
            subjects={subjects}
            setSubjects={setSubjects}
            subjectOptions={subjectValue}
        />
    );
};

Subject.propTypes = {
    subjectValue: array.isRequired,
    subjectVal: string.isRequired,
    setSubjectVal: func.isRequired,
};

export default Subject;
