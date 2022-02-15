import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentsCommon = ({
    sub, status, desc, date, viewAssignment, bgColor, color,
}) => (
    <div className="assignment-common">
        <h3>{sub} <span className="status" style={{ color, backgroundColor: bgColor }}>{status}</span></h3>
        <p className="desc">{desc}</p>
        <h5>Submission date</h5>
        <p className="date">{date} <span><Link to="/teacher/assignments">{viewAssignment && 'View assignment'}</Link></span></p>
    </div>
);

AssignmentsCommon.propTypes = {
    sub: string.isRequired,
    status: string.isRequired,
    desc: string.isRequired,
    date: string.isRequired,
    bgColor: string.isRequired,
    color: string.isRequired,
    viewAssignment: bool.isRequired,
};

export default AssignmentsCommon;
