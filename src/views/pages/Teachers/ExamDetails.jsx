import React from 'react';
import {  func } from 'prop-types';
import MyexamanswerLeftpart from '../../components/dashboard/Rightsidepart/MyexamanswerLeftpart';
import MyexamanswerRightpart from '../../components/dashboard/Rightsidepart/MyexamanswerRightpart';
import close from '../../../assets/images/close.png';
import '../../components/dashboard/dashboard.scss';
// import { Accordion } from 'react-bootstrap-accordion';
// import '../../components/dashboard/dashboard.scss';
// import './teachers.scss';

const ExamDetails = ({ setExam }) => (
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

ExamDetails.propTypes = {
    setExam: func.isRequired,
};
export default ExamDetails;
