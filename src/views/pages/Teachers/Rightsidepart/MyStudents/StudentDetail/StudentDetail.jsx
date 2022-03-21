import React from 'react';
import { func } from 'prop-types';
import StudentDetailHead from './StudentDetailHead';
import SubjectPerformance from './SubjectPerformance';
import Assignments from './Assignments';

const StudentDetail = ({ setStudents }) => (
    <div className="student-detail-main">
        <StudentDetailHead setStudents={setStudents} />
        <SubjectPerformance />
        <Assignments />
    </div>
);

StudentDetail.propTypes = {
    setStudents: func.isRequired,
};

export default StudentDetail;
