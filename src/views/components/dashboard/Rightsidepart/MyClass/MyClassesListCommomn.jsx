import React, { useState } from 'react';
import { object } from 'prop-types';
import assignmentlistcalendar from '../../../../../assets/images/calendar.png';
import assignmetlistcalendernormal from '../../../../../assets/images/calendar_normal.png';
import assignmentlistclock from '../../../../../assets/images/wall-clock.png';
import assignmentlistclocknormal from '../../../../../assets/images/wall-clock_normal.png';
import assignmentlistduration from '../../../../../assets/images/examlisthover4.png';
import assignmentlistdurationnormal from '../../../../../assets/images/examlistglass.png';
import assignmentlistclipboard from '../../../../../assets/images/examlisthover3.png';
import assignmentlistclipboardnormal from '../../../../../assets/images/examlistclipboard.png';

const MyClassListCommon = ({ val }) => {
    const [calendar, setCalendar] = useState(assignmetlistcalendernormal);
    const [target, setTarget] = useState(assignmentlistclocknormal);
    const [idea, setIdea] = useState(assignmentlistdurationnormal);
    const [flash, setFlash] = useState(assignmentlistclipboardnormal);
    const [exam, setExam] = useState(false);
    return (
        <div>
            <div
                className="examlist-common"
                onMouseEnter={() => {
                    setCalendar(assignmentlistcalendar);
                    setTarget(assignmentlistclock);
                    setIdea(assignmentlistduration);
                    setFlash(assignmentlistclipboard);
                }}
                onMouseLeave={() => {
                    setCalendar(assignmetlistcalendernormal);
                    setTarget(assignmentlistclocknormal);
                    setIdea(assignmentlistdurationnormal);
                    setFlash(assignmentlistclipboardnormal);
                }}
                onClick={() => setExam(!exam)}
                aria-hidden="true"
            >
                <div className="row examlist-common-one">
                    <div className="col-md-3 col-sm-2">
                        <p>
                            <span>Grade</span> -{' '}
                            <span className="span-bold">{val.grade}</span>
                        </p>
                    </div>
                    {/* <div className="col-md-3 col-sm-4 examlist-common-date-time ">
                        <p><span>Due date</span> - <span className="span-bold">{val.dueDate}</span>
                        <img className = "shape" src={Time} alt="time icon"/>
                        <span className="span-bold">{val.dueDateTime}</span></p>
                    </div> */}
                    <div className="col-md-3 col-sm-2">
                        <p>
                            <span>Subject</span> -{' '}
                            <span className="span-bold">{val.subject}</span>
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-2">
                        <p>
                            <span>Concept</span> -{' '}
                            <span className="span-bold">{val.concept}</span>
                        </p>
                    </div>
                    {/* <div className="col-md-4 col-sm-6 examlist-common-date-time">
                        <p><span>Submitted on</span> - <span className="span-bold">
                        {val.submittedOnDate}</span>
                        <img className = "shape" src={Time} alt="time icon"/>
                        <span className="span-bold">{val.submittedOnTime}</span>
                        </p>
                    </div> */}
                    {/* <div className="col-md-2 col-sm-12 examlist-last">
                        <li>Try Again</li>
                    </div> */}
                </div>
                <div className="row examlist-common-two">
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlisthand">
                                <img src={calendar} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Date</p>
                                <h5>{val.date}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistidea">
                                <img src={target} alt="examlistidea" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Time</p>
                                <h5>{val.time}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistclipboard">
                                <img src={idea} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Duration</p>
                                <h5>{val.duration}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistglass">
                                <img src={flash} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Assignments</p>
                                <h5>{val.assignments}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyClassListCommon.propTypes = {
    val: object.isRequired,
};

export default MyClassListCommon;
