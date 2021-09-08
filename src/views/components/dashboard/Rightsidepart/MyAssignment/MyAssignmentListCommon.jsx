import React, { useState } from 'react';
import {  object } from 'prop-types';
import assignmentlistcalendar from '../../../../../assets/images/calendar.png';
import assignmetlistcalendernormal from '../../../../../assets/images/calendar_normal.png'
import assignmentlisttarget from '../../../../../assets/images/target.png';
import assignmentlisttargetnormal from '../../../../../assets/images/target_normal.png';
import assignmentlistidea from '../../../../../assets/images/idea.png';
import assignmentlistideanormal from '../../../../../assets/images/idea_normal.png';
import assignmentlistflash from '../../../../../assets/images/flash.png';
import assignmentlistflashnormal from '../../../../../assets/images/flash_normal.png';
import Time from '../../../../../assets/images/noun_Time.svg'


const MyAssignmentListCommon = ({ val }) => {
    const [calendar, setCalendar] = useState(assignmetlistcalendernormal);
    const [target, setTarget] = useState(assignmentlisttargetnormal);
    const [idea, setIdea] = useState(assignmentlistideanormal);
    const [flash, setFlash] = useState(assignmentlistflashnormal);
    const [exam, setExam] = useState(false);
    return (
        <div>

            <div
                className="examlist-common"
                onMouseEnter={
                    () => {
                        setCalendar(assignmentlistcalendar);
                        setTarget(assignmentlisttarget);
                        setIdea(assignmentlistidea);
                        setFlash(assignmentlistflash);
                    }
                }
                onMouseLeave={
                    () => {
                        setCalendar(assignmetlistcalendernormal);
                        setTarget(assignmentlisttargetnormal);
                        setIdea(assignmentlistideanormal);
                        setFlash(assignmentlistflashnormal);
                    }
                }
                onClick={() => setExam(!exam)}
                aria-hidden="true"
            >
                <div className="row examlist-common-one">
                    <div className="col-md-3 col-sm-2">
                        <p><span>Grade 2</span> - <span className="span-bold">{val.grade2}</span></p>
                    </div>
                    <div className="col-md-3 col-sm-4 examlist-common-date-time ">
                        <p><span>Due date</span> - <span className="span-bold">{val.dueDate}</span>
                        <img className = "shape" src={Time} alt="time icon"/>
                        <span className="span-bold">{val.dueDateTime}</span></p>
                    </div>
                    <div className="col-md-4 col-sm-6 examlist-common-date-time">
                        <p><span>Submitted on</span> - <span className="span-bold">{val.submittedOnDate}</span>
                        <img className = "shape" src={Time} alt="time icon"/>
                        <span className="span-bold">{val.submittedOnTime}</span>
                        </p>
                    </div>
                    <div className="col-md-2 col-sm-12 examlist-last">
                        <li>Try Again</li>
                    </div>
                </div>
                <div className="row examlist-common-two">
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlisthand">
                                <img
                                    src={calendar}
                                    alt="examlisthand"
                                />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Class Date</p>
                                <h5>{val.classDate}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistidea">
                                <img src={target} alt="examlistidea" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Accurancy</p>
                                <h5>{val.accurancy}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistclipboard">
                                <img src={idea} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Inteli Score</p>
                              <h5>{val.inteliScore}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistglass">
                                <img src={flash} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Average speed</p>
                                <h5>{val.averageSpeed}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

MyAssignmentListCommon.propTypes = {
    val: object.isRequired,
};

export default MyAssignmentListCommon;
