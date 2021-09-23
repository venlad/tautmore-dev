import React from 'react';
import assignmentList from '../../mockData/MyAssignmentList';
import MyAssignmentListCommon from './MyAssignmentListCommon';

const MyAssignmentList = () => (
    <div className="myexam-examlist">
        {assignmentList.map((data) => (
            <div>
                {data?.data?.map((val) => (
                    <MyAssignmentListCommon val={val} key={val.key}  />
                ))}
            </div>
        ))}
    </div>
);

export default MyAssignmentList;
