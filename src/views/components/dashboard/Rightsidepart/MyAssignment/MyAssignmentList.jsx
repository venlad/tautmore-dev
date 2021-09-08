import React from 'react';
import assignmentList from '../../mockData/MyAssignmentList';
import MyAssignmentListCommon from './MyAssignmentListCommon';

const MyAssignmentList = () => (
    <div className="myexam-examlist">
        {assignmentList.map((data) => (
            <div key={data.title}>
                <div className="examlist-title">
                    <h4>{data.title}</h4>
                </div>
                {data?.data?.map((val) => (
                    <MyAssignmentListCommon val={val} key={val.key}  />
                ))}
            </div>
        ))}
    </div>
);

export default MyAssignmentList;
