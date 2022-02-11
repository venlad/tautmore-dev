import React from 'react';
import { func } from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import  profile  from '../../../../../../assets/images/sidebar-profile.png';

const StudentDetailHead = ({ setStudents }) => (
    <div>
        <button type="button" className="back-btn" onClick={() => setStudents('home')}>Go back</button>
        <div className="head">
            <div className="row">
                <div className="col-md-5 head-left">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="col-md-9">
                            <h4>Susan Richards</h4>
                            <p>Grade 4</p>
                            <div className="row">
                                <div className="col-md-9 text-left">
                                    Syllabus completion
                                </div>
                                <div className="col-md-3 text-right">
                                    49%
                                </div>
                            </div>
                            <ProgressBar now={49} />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 head-right">
                    <div className="row">
                        <div className="col-md-6 orange">
                            <div className="icon" />
                            <div className="text">
                                <h4>7</h4>
                                <p>Assignments pending</p>
                            </div>
                        </div>
                        <div className="col-md-6 green">
                            <div className="icon" />
                            <div className="text">
                                <h4>70 / 100</h4>
                                <p>Recent exam score</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

StudentDetailHead.propTypes = {
    setStudents: func.isRequired,
};

export default StudentDetailHead;
