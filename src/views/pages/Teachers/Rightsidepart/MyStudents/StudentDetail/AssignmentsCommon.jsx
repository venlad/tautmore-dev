import React from 'react';
import { string, bool } from 'prop-types';

const AssignmentsCommon = ({
    sub, status, desc, date, viewAssignment, bgColor, color,
}) => (
    <div className="col-md-4">
        <div className="assignment-common">
            <h3>{sub} <span className="status" style={{ color, backgroundColor: bgColor }}>{status}</span></h3>
            <p className="desc">{desc}</p>
            <h5>Submission date</h5>
            <p className="date">{date} <span>{viewAssignment && 'View assignment'}</span></p>
        </div>
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
