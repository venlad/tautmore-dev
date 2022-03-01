import React from 'react';
import {  string, number, func } from 'prop-types';
import exam from '../../../../assets/images/timeClock.svg';

const MyexamCommon = ({
    subject, date, time, student, title, setStartExam, examId,
}) => {
    const startExamClick = () => {
        setStartExam(examId);
    };
    console.log('examId', examId);
    return (
        <div className="row myexam-common-top">
            <div className="col-md-12 ">
                <div className=" myexam-common">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-12 myexam-common-left">
                            <h4>{subject}</h4>

                        </div>
                        <div className="col-md-7 col-sm-7 col-12 myexam-common-right">
                            <p className="p-one">
                                <span className="span-one">Due date</span>
                                <span className="span-two">{date}</span>

                                <span className="span-three"> <img src={exam} alt="exam" /> {time}</span>
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-12 myexam-common-left">
                            <h5>{title}</h5>
                        </div>
                        <div className="col-md-7 col-sm-7 col-12 myexam-common-right">
                            <p className="p-two"><span className="span-student">{student}</span> <span>Students completed</span></p>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <button type="button" onClick={startExamClick}>start the exam </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

MyexamCommon.propTypes = {
    subject: string.isRequired,
    date: string.isRequired,
    time: string.isRequired,
    student: number.isRequired,
    title: string.isRequired,
    setStartExam: func.isRequired,
    examId: string.isRequired,
};

export default MyexamCommon;
