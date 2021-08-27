import React from 'react';
import Createstudent from './Createstudent';

const Createstudentaccount = () => (
    <div>
        <div className="create-student-main">
            <h3 className="text-center">create account</h3>
            <Createstudent
                name="Student 1"
                labelone="Full name*"
                labeltwo="Username*"
            />
            <Createstudent
                name="Student 2"
                labelone="Full name*"
                labeltwo="Username*"
                className="student-last"
                classNametwo="title-last"
            />

            <div className="addparent-above" />

            <div className="addparent-above-below" />

            <div className="addparent-top" />

            <div className="addparent-bottom" />

            <h3 className="text-center parent-title">add parent/guardian</h3>

            <Createstudent labelone="Full name*" labeltwo="Email ID*" />
        </div>
    </div>
);

export default Createstudentaccount;
