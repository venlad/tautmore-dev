import React from 'react';
import {  func } from 'prop-types';
import MyexamanswerLeftpart from './MyexamanswerLeftpart';
import MyexamanswerRightpart from './MyexamanswerRightpart';
import close from '../../../../assets/images/close.png';

const MyexamAnswer = ({ setExam }) => (
    <div className="myexam-answer-main-top">
        <div className="close-top">
            <button type="button" className="close-btn" onClick={() => setExam(false)}><img src={close} alt="close" /></button>
        </div>
        <div className="row myexam-answer-main">

            <div className="col-md-4">
                <MyexamanswerLeftpart />
            </div>
            <div className="col-md-8">

                <MyexamanswerRightpart />
            </div>
        </div>
    </div>
);

MyexamAnswer.propTypes = {
    setExam: func.isRequired,
};

export default MyexamAnswer;
