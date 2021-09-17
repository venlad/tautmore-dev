import React from 'react';
import RenewDropdown from './RenewDropdown';
import RenewCheckbox from './RenewCheckbox';
import {
    country, state, grade, subject, exam, activity,
} from './mockData/Renewdata';

const RenewsubLeftpart = () => (
    <div className="renew-left-main">
        <h3>Your course details</h3>
        <RenewDropdown label="Country*" data={country}  />
        <RenewDropdown label="State*" data={state}  />
        <RenewDropdown label="Select grade*" data={grade}  />
        <RenewCheckbox label="Select subject(s)*" data={subject}  />
        <h3 className="curricular-title">Exams & Extra curricular details</h3>
        <RenewCheckbox label="Select exams*" data={exam}  />
        <RenewDropdown label="Select co-curricular activities" data={activity}  />
    </div>
);

export default RenewsubLeftpart;
