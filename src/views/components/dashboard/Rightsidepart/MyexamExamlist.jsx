import React from 'react';
import examlist from '../mockData/MyexamExamlist';
import MyexamExamlistcommon from './MyexamExamlistcommon';

const MyexamExamlist = () => (
    <div className="myexam-examlist">
        {examlist.map((data) => (
            <div>
                <div className="examlist-title">
                    <h4>{data.title}</h4>
                </div>
                {data?.data?.map((val) => (
                    <MyexamExamlistcommon val={val} />
                ))}
            </div>
        ))}
    </div>
);

export default MyexamExamlist;
