import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Assignment from '../../../../../../assets/images/My assignments.svg';
import Student from '../../../../../../assets/images/sidebar-profile.png';
import assignments from './mockData/MyAssignementsData';
import close from '../../../../../../assets/images/close.png';
import { chevRight } from '../../../../../../assets/icons/IconList';

const AssignmentsAndHomeWork = () => {
    console.log('ABC');

    return (
        <div className="teacher-assign-main">
            <div className="container-body">

                <div className="heading-and-icon">
                    <div className="row">
                        <div className="col-md-7">
                            <img src={Assignment} alt="Assignment" />
                            <h2 className="heading">Assignments & Homework</h2>
                            <h3>Assign homeworks to this students
                                by clicking on sub-topics, check
                                the students progress in completion
                                of assignments
                            </h3>
                        </div>
                        <div className="col-md-5 text-right">
                            <button type="button">
                                <img src={close} alt="close" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="container-lists-and-sublists-main">
                    <div className="lists-and-sublists">
                        {assignments.map((item) => (
                            <div className="container-lists-and-sublists" key={item.title}>
                                <h3 className="list-name">{item.title}</h3>
                                <div className="progress-and-percentage">
                                    <ProgressBar now={49} />
                                    <p className="percentage">49%</p>
                                </div>
                                {item.subTopicListItems.map((data) => (
                                    <div className="label-and-checkbox">
                                        <h3 className="sub-topic">{data?.title}</h3>
                                        {data?.desc.map((val) => (
                                            <div className="data-desc">
                                                <input className="checkbox" type="checkbox" />
                                                <p className="subtopic-name">{val}</p>
                                            </div>
                                        ))}
                                    </div>

                                ))}

                            </div>

                        ))}
                    </div>

                </div>

            </div>
            <div className="fixed-assign-bar">
                <div className="container-fixed-assign-bar">
                    <div className="row">
                        <div className="heading-and-selected-topics col-md-6">
                            <h2 className="heading-assigned">SUB-TOPICS ASSIGNED:</h2>
                            <p className="selected-topics">A.3 Even or odd; C.1 Data and graphs</p>
                        </div>
                        <div className="student-name-and-assign-button desktop-view col-md-6">
                            <img src={Student} alt="Student" />
                            <div className="student-name-and-grades">
                                <h2 className="student-name">Susan Richards</h2>
                                <h4 className="grades">Grade 4 | Mathematics</h4>
                            </div>
                            <button type="button" className="assign-button button-common">Assign <span>{chevRight}</span></button>
                        </div>

                        <div className="student-name-and-assign-button mobile-view col-md-6">
                            <div className="stu-common">
                                <img src={Student} alt="Student" />
                                <div className="student-name-and-grades">
                                    <h2 className="student-name">Susan Richards</h2>
                                    <h4 className="grades">Grade 4 | Mathematics</h4>
                                </div>
                            </div>
                            <button type="button" className="assign-button button-common">Assign <span>{chevRight}</span></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsAndHomeWork;
