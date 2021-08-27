import React from 'react';
import {
    country,
    state,
    grade,
    subject,
    exam,
    activities,
} from './mockData/Coursedetailsdata';
import Coursedetaildropdown from './Coursedetaildropdown';
import Coursedetailsubjects from './Coursedetailsubjects';
import CoursedetailMultipledropdown from './CoursedetailMultipledropdown';

const Coursedetail = () => (
    <div>
        <div className="coursedetails-main">
            <h3 className="text-center">
                Course details - <span>Student 1</span>
            </h3>
            <div className="row">
                <Coursedetaildropdown label="Country*" data={country} />
                <Coursedetaildropdown label="State*" data={state} />
                <Coursedetaildropdown label="Select grade*" data={grade} />
                <Coursedetailsubjects label="Select subject(s)*" data={subject} />
                <CoursedetailMultipledropdown label="Select exam(s)" data={exam} />
                <CoursedetailMultipledropdown
                    label="Select co-curricular activities"
                    data={activities}
                />
            </div>
        </div>
    </div>
);

export default Coursedetail;
