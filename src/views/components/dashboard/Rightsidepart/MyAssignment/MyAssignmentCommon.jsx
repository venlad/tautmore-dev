import React from 'react';
import {  string, number } from 'prop-types';

const MyAssignmentCommon = ({
    topic, date, time, student,
}) => (
    <div className="row myexam-common-top">
        <div className="col-md-12 ">
            <div className="row myexam-common">
                <div className="row">
                    <div className="col-md-6 col-sm-5 col-12 myassignment-common-left">
                        <h5>{topic}</h5>
                    </div>
                    <div className="col-md-6 col-sm-7 col-12 myassignment-common-right">
                        <p className="p-one">
                            <span className="span-one">PENDING</span>
                            {/* <span className="span-two">{date}</span>
                            <span className="span-three">{time}</span> */}
                        </p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 col-sm-5 col-12 myexam-common-left">
                        <h5>Exam title</h5>
                    </div>
                    <div className="col-md-7 col-sm-7 col-12 myexam-common-right">
                        <p className="p-two"><span className="span-student">{student}</span> <span>Students completed</span></p>
                    </div>
                </div>

                <div className="col-md-12">
                    <button type="button">TAKE ASSIGNMENT </button>
                </div>

            </div>

        </div>
    </div>
);

MyAssignmentCommon.propTypes = {
    subject: string.isRequired,
    date: string.isRequired,
    time: string.isRequired,
    student: number.isRequired,
};

export default MyAssignmentCommon;
