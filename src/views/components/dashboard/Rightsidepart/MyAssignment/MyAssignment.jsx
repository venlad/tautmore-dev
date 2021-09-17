import React from 'react';
import MyAssignmentTitle from '../MyexamTitle';

import MyAssignmentList from './MyAssignmentList';
import MyAssignmentTab  from '../MyexamTab';
import MyAssignmentCommon from './MyAssignmentCommon';

const MyAssignment = () => (
    <div className="myexam-main">
        <MyAssignmentTitle title="My pending assignments - 3" select />
        <div className="row">
            <div className="col-md-4 myexam-main-common-left">
                <MyAssignmentCommon topic="Algebra" date="27 Jul 2021" time=" 10:30 AM - 11:30 AM" student={15} />
            </div>
            <div className="col-md-4 myexam-main-common-right">
                <MyAssignmentCommon topic="Algebra" date="20 Oct 2020" time="23:59" student={15} />
            </div>
            <div className="col-md-4 myexam-main-common-right">
                <MyAssignmentCommon topic="Algebra" date="20 Oct 2020" time="23:59" student={15} />
            </div>
            <MyAssignmentTitle title="Completed assignments history" />
            <MyAssignmentTab />
            <MyAssignmentList />
        </div>
        <MyAssignmentList />
    </div>

);
export default MyAssignment;
