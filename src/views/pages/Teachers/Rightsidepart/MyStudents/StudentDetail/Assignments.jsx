import React from 'react';
import exam from '../../../../../../assets/images/exam.png';
import AssignmentsCommon from './AssignmentsCommon';

const Assignments = () => (
    <div className="assignment-main">
        <h3 className="title"><img src={exam} alt="Assignments" /> Assignments</h3>
        <div className="row">
            <AssignmentsCommon
                sub="Mathematics"
                status="pending"
                desc="Trigonometry - Topic 2.2"
                date="Aug 12, 2021"
                bgColor="#FFEAF1"
                color="#FD2A5B"
            />
            <AssignmentsCommon
                sub="Mathematics"
                status="COmpleted"
                desc="Trigonometry - Topic 2.2"
                date="Aug 12, 2021"
                bgColor="#E3FFF6"
                color="#43AA8B"
                viewAssignment
            />
            <AssignmentsCommon
                sub="Mathematics"
                status="pending"
                desc="Trigonometry - Topic 2.2"
                date="Aug 12, 2021"
                bgColor="#FFEAF1"
                color="#FD2A5B"
            />
        </div>
    </div>
);

export default Assignments;
