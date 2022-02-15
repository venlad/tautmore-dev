import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Assignment from '../../../../../../assets/images/My assignments.svg';
import Student from '../../../../../../assets/images/sidebar-profile.png';
import assignments from './mockData/MyAssignementsData';

const AssignmentsAndHomeWork = () => {
    console.log('ABC');

    return (
        <div className="container">
            <div className="container-body">

                <div className="heading-and-icon">
                    <img src={Assignment} alt="Assignment" />
                    <h2 className="heading">Assignments and Homework</h2>
                </div>

                <div>
                    <div className="about">

                        <h3>Assign homeworks to this students
                            by clicking on sub-topics, check
                            the students progress in completion
                            of assignments
                        </h3>
                    </div>
                </div>

                <div className="container-lists-and-sublists-main">
                    <div className="lists-and-sublists">
                        {assignments.map((item) => (
                            <div className="container-lists-and-sublists" key={item.title}>
                                <h3 className="list-name">{item.title}</h3>
                                <div className="progress-and-percentage">
                                    <ProgressBar now={item.progressbar.percentage} className="progress-bar" />
                                    <p className="percentage">{item.progressbar.percentage}</p>
                                </div>
                                {item.subTopic.map((item2) => (
                                    <h3 className="sub-topic">{item2}</h3>
                                ))}

                                {item.subTopicListItems.map((item3) => (
                                    <div className="label-and-checkbox">
                                        <input className="checkbox" type="checkbox" />
                                        <p className="subtopic-name">{item3}</p>
                                    </div>

                                ))}

                            </div>

                        ))}
                    </div>

                </div>

            </div>
            <div className="fixed-assign-bar">
                <div className="container-fixed-assign-bar">
                    <div className="heading-and-selected-topics">
                        <h2 className="heading-assigned">SUB-TOPICS ASSIGNED:</h2>
                        <p className="selected-topics">A.3 Even or odd; C.1 Data and graphs</p>
                    </div>
                    <div className="student-name-and-assign-button">
                        <img src={Student} alt="Student" />
                        <div className="student-name-and-grades">
                            <h2 className="student-name">Susan Richards</h2>
                            <h4 className="grades">Grade 4 | Mathematics</h4>
                        </div>
                        <button type="button" className="assign-button">Assign</button>

                    </div>

                </div>
            </div>

        </div>

    );
};

export default AssignmentsAndHomeWork;
