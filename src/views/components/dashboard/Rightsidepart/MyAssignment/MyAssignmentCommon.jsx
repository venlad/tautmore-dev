import React from 'react';
import {  string, number } from 'prop-types';
import Time from '../../../../../assets/images/noun_Time.svg';

const MyAssignmentCommon = ({
    topic, date, time,
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
                        </p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 myassignment-common-subject-left">
                        <h5>MATHEMATICS — CONCEPT 2 </h5>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-12 myassignment-assigned-left">
                        <p className="p-one">
                            <span className="span-one">Assigned -</span>
                            <span className="span-two">{date}</span>
                            <span className="span-three">{time}</span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 myassignment-common-day-left">
                        <p className="p-one">
                            <span><img src={Time} alt="time icon" /> 2 days left</span>

                        </p>

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
    topic: string.isRequired,
    date: number.isRequired,
    time: string.isRequired,
};

export default MyAssignmentCommon;
