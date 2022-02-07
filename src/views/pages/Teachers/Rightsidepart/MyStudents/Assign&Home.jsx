import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Assignment from '../../../../../assets/images/My assignments.svg';
import Student from '../../../../../assets/images/sidebar-profile.png';

const AssignmentsAndHomeWork = () => (
    <>
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
                        <div className="container-lists-and-sublists">
                            <h3 className="list-name">1.Number and comparing</h3>
                            <div className="progress-and-percentage">
                                <ProgressBar now="49" className="progress-bar" />
                                <p className="percentage">49%</p>
                            </div>
                            <h3 className="sub-topic">A. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>

                        <div className="container-lists-and-sublists">
                            <h3 className="sub-topic">B. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>

                        <div className="container-lists-and-sublists">
                            <h3 className="list-name">2. Place values

                            </h3>
                            <div className="progress-and-percentage">
                                <ProgressBar now="49" className="progress-bar" />
                                <p className="percentage">49%</p>
                            </div>
                            <h3 className="sub-topic">A. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>

                        <div className="container-lists-and-sublists">
                            <h3 className="list-name">3. Multiplication</h3>
                            <div className="progress-and-percentage">
                                <ProgressBar now="49" className="progress-bar" />
                                <p className="percentage">49%</p>
                            </div>
                            <h3 className="sub-topic">A. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>

                        <div className="container-lists-and-sublists">
                            <h3 className="list-name">4. Logical Reasoning</h3>
                            <div className="progress-and-percentage">
                                <ProgressBar now="49" className="progress-bar" />
                                <p className="percentage">49%</p>
                            </div>
                            <h3 className="sub-topic">A. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>

                        <div className="container-lists-and-sublists">
                            <h3 className="list-name">5. Estimation and rounding</h3>
                            <div className="progress-and-percentage">
                                <ProgressBar now="49" className="progress-bar" />
                                <p className="percentage">49%</p>
                            </div>
                            <h3 className="sub-topic">A. Even or Odd</h3>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name-selected">A.1 Sub-topic 1</p>
                            </div>

                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>
                            <div className="label-and-checkbox">
                                <input className="checkbox" type="checkbox" />
                                <p className="subtopic-name">A.2 Sub-topic 1</p>
                            </div>

                        </div>
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

    </>
);

export default AssignmentsAndHomeWork;
