import React from 'react';
import '../../components/dashboard/dashboard.scss';
import { Modal } from 'react-bootstrap';
import { func, bool } from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Gradeicon from '../../../assets/images/gradeicon.svg';
import Studenticon from '../../../assets/images/students.svg';
import Clockicon from '../../../assets/images/Shape.svg';
import Studentimg from '../../../assets/images/studentimg.png';
import Calendericon from '../../../assets/images/calendaricon.svg';
import Viewassignmenticon from '../../../assets/images/viewassignment.svg';

import Progressbar from '../../components/dashboard/Rightsidepart/Progressbar';
import './teachers.scss';
import {
    assignment, students,
} from './mockData/SubjectModel';

function SubjectModel({ handleSubjectModel, showSubjectModel }) {
    return (
        <>
            <Modal
                size="lg"
                show={showSubjectModel}
                onHide={() => handleSubjectModel(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Mathematics<br /> <span className="subtopic">Trigonometry - Topic 2</span>
                    </Modal.Title>
                </Modal.Header>
                <div className="col-sm-12 modelsecdiv">
                    <div className="row">
                        <div className="col-sm-5 floatleft">
                            <img className="Clockicon" src={Calendericon} alt="clock" />
                            <span>Tue 27th Jul |  10:30 AM - 11:30 AM</span>
                        </div>
                        <div className="col-sm-2 floatleft">
                            <img className="Clockicon" src={Gradeicon} alt="clock" />
                            <span>Grade 4</span>
                        </div>
                        <div className="col-sm-2 padd0">
                            <img className="Clockicon" src={Studenticon} alt="clock" />
                            <span>27 students</span>
                        </div>
                        <div className="col-sm-3 floatleft">
                            <img className="Clockicon" src={Clockicon} alt="clock" />
                            <span>45 minutes class</span>
                        </div>
                    </div>
                </div>
                <div className="tabsection">
                    <Tabs defaultActiveKey="first">
                        <Tab eventKey="first" title="Topic details">
                            <div className="firsttabcontent">
                                <h3 className="tabheadtext">1.1 How to count to 3 active</h3>
                                <span className="tabsubhead">1.1.1 Learn how to count till 3</span>
                                <p className="tabcontent">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque
                                    laudantium.
                                    <br /><br />
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt...

                                </p>
                                <div className="">
                                    <button type="button" className="buttondiv">
                                        <a href="/" className="">TAKE ME TO CHAPTER</a>
                                    </button>
                                </div>
                            </div>

                        </Tab>
                        <Tab eventKey="second" title="Students">
                            <div className="col-sm-12 secondtabcontent floatleft">
                                <div className="row">
                                    {students.map((item) => (
                                        <div className="col-sm-6 divpadd floatleft" key={item.id}>

                                            <div className="col-sm-12 floatleft studentlistdiv">
                                                <div className="row">
                                                    <div className="col-sm-2 floatleft">

                                                        <img className="Clockicon" src={Studentimg} alt="studentimg" />
                                                    </div>
                                                    <div className="col-sm-10 progressbarsection floatleft">
                                                        <div className="studentname"> {item.name}</div>
                                                        <div className="studentgrade">Grade {item.grade}</div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 floatleft">
                                                    <Progressbar className="progress-bar-one" peronevalue={item.progress} perone title="Subject completion" />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                        </Tab>
                        <Tab eventKey="third" title="Assignment">
                            <div className="col-sm-12 assignstudlistdiv">
                                <div className="row">
                                    {assignment.map((item) => (
                                        <div className="col-sm-6 divpadd " key={item.id}>

                                            <div className="col-sm-12  studentlistdiv">
                                                <div className="row">
                                                    <div className="col-sm-2 ">
                                                        <img className="Clockicon" src={Studentimg} alt="studentimg" />
                                                    </div>
                                                    <div className="col-sm-7 progressbarsection ">
                                                        <div className="studentname">{item.name} </div>
                                                        <div className="studentgrade">Grade {item.grade}</div>
                                                    </div>
                                                    <div className="col-sm-3 progressbarsection ">
                                                        <div className="atteddiv">{item.attendance === 'true' ? <span className="attendance"> Present</span> : <span className="attendanceAbsent">Absent</span> }<br /></div>

                                                    </div>
                                                </div>
                                                <div className="col-sm-12 ">
                                                    <Progressbar className="progress-bar-one" peronevalue={item.progress} perone title="Subject completion" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 viewassign">
                                                {item.submission === 'true' ? <><a href="/">View assignment</a><img src={Viewassignmenticon} alt="assignment" /> </> : <span className="notsubmitted">Assignment not submitted</span>}

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-sm-12">

                                <div className="completeddiv">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <p>img</p>
                                        </div>
                                        <div className="col-sm-10">
                                            <span className="classcompleted">Online class completed!</span><br />
                                            <span className="sendassignment">Please send the assignments to the
                                                students now
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="chapttitle">Chapter</p>
                                            <p className="subtitle">Trigonometry</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="chapttitle">Topic</p>
                                            <p className="subtitle">Topic 2.1</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="chapttitle">Submission date</p>
                                            <p className="subtitle">Tue Aug 27th</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="assignbutdiv">
                                    <button type="button" className="button-common">Assign
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-chevron-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <Modal.Body />
            </Modal>
        </>
    );
}

// render(<SubjectModel />);
SubjectModel.propTypes = {
    handleSubjectModel: func.isRequired,
    showSubjectModel: bool.isRequired,
};

export default SubjectModel;
