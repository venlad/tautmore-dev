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
import Progressbar from '../../components/dashboard/Rightsidepart/Progressbar';
import './teachers.scss';

const assignment = [
    {
        id: 1,  name: 'Susan Richards', grade: 4, attendance: 'Present', progress: 34,
    },
    {
        id: 2,  name: 'Suresh raina', grade: 5, attendance: 'Absent', progress: 54,
    },
    {
        id: 3, name: 'Ramesh power', grade: 7, attendance: 'Present', progress: 74,
    },
    {
        id: 4, name: 'balaji', grade: 5, attendance: 'Absent', progress: 44,
    },
    {
        id: 5, name: 'ramanna', grade: 5, attendance: 'Present', progress: 24,
    },
];

const students = [
    {
        id: 1,  name: 'Lokesh', grade: 4, progress: 87,
        //  img: 'https://navrathan.com/wp-content/uploads/2020/09/Navrathan-logo.png',
    },
    {
        id: 2,  name: 'Ramesh', grade: 5, progress: 76,
        //  img: 'https://navrathan.com/wp-content/uploads/2020/09/Navrathan-logo.png',
    },
    {
        id: 3, name: 'Umesh', grade: 7, progress: 56,
    },
    {
        id: 4, name: 'Rakesh', grade: 5, progress: 56,
    },
    {
        id: 5, name: 'Mallesh', grade: 5, progress: 54,
    },

];

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
                        <div className="col-sm-2 floatleft">
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
                                        <div className="col-sm-6 divpadd floatleft">

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
                                        <div className="col-sm-6 divpadd floatleft">

                                            <div className="col-sm-12 floatleft studentlistdiv">
                                                <div className="row">
                                                    <div className="col-sm-2 floatleft">
                                                        <img className="Clockicon" src={Studentimg} alt="studentimg" />
                                                    </div>
                                                    <div className="col-sm-7 progressbarsection floatleft">
                                                        <div className="studentname">{item.name} </div>
                                                        <div className="studentgrade">Grade {item.grade}</div>
                                                    </div>
                                                    <div className="col-sm-3 progressbarsection floatleft">
                                                        <div className="atteddiv"><span className="attendance"> {item.attendance}</span><br /></div>

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
