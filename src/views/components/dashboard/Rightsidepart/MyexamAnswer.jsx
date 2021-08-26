import React from 'react';
import MyexamanswerLeftpart from './MyexamanswerLeftpart';
import MyexamanswerRightpart from './MyexamanswerRightpart';

const MyexamAnswer = () => (
    <div className="row myexam-answer-main">
        <div className="col-md-4">
            <MyexamanswerLeftpart />
        </div>
        <div className="col-md-8">
            <MyexamanswerRightpart />
        </div>
    </div>
);

export default MyexamAnswer;
