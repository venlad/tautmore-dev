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

    console.log(subjectValue, subjectVal, subjects);

    return (
        <SubjectWrapper
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
