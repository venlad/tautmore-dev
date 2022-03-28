import React, { useState } from 'react';
import './teachers.scss';
import { array } from 'yup/lib/locale';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import ZoomClassContainer from './Rightsidepart/MyClass/ZoomClassContainer';
import AddHistoryPopUp from './Rightsidepart/MyClass/AddHistoryPopUp';

import Warning from '../../../assets/images/warning.svg';
import Clockicon from '../../../assets/images/Shape.svg';
// import Subicon from '../../../assets/images/comp.svg';
// import Lapicon from '../../../assets/images/lapicon.svg';
import Lapicon from '../../../assets/images/lapicon.svg';
import Gradeicon from '../../../assets/images/gradeicon.svg';
import Studenticon from '../../../assets/images/students.svg';
import Testaudiovideo from '../../../assets/images/testaudiovideo.svg';

const OnlineClassalert = ({ latestClass }) => {
    const [model, setModel] = useState(false);

    return (

        <div>
            <div className="main1">
                <div className="main2">
                    <div className="onlineclassmain">
                        <div><p className="onlineHeading"><img className="rawnimg" src={Warning} alt="warning" />Online class alert!</p></div>
                        <div><p className="onlineTime"><img className="rawnimg" src={Clockicon} alt="clock" />Starts in 00:21 mins</p></div>
                    </div>
                    <div className=" col-md-12 col-sm-12 onlineclasssubject">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 floatleft subdivmain">
                                <div className="col-sm-4 subimgdiv">
                                    <img className="" src={Lapicon} alt="warning" />
                                </div>
                                <div className="col-sm-8 subtopicsec">
                                    <p className="onlineSubTitle">{latestClass?.subject}</p>
                                    {/* <p className="onlineTopic">Algebra - Topic 2</p> */}
                                    <a href="/" className="onlineTopiclink">View study material</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="row middlediv">
                                    <div className="col-sm-4">
                                        <img className="" src={Gradeicon} alt="Gradeicon" /> <span>Grade {latestClass?.grade}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="" src={Studenticon} alt="Studenticon" /> <span>{latestClass?.numberOfStudent} students</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="Clockicon" src={Clockicon} alt="clock" /><span>{latestClass?.duration} minutes class</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 floatleft">
                                <div className="jionlink">
                                    <button type="button" onClick={() => setModel(true)}>
                                        JOIN LINK
                                    </button>
                                    {/* <a href={latestClass?.startUrl}>JOIN LINK</a></button> */}
                                    {/* <Link to="/zoomCall" target="_blank">JOIN LINK</Link> */}

                                </div>
                                <div className="audioLinkdiv"> <a className="audioLink" href="/"> <img className="testicon" src={Testaudiovideo} alt="clock" />Test audio & video</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddHistoryPopUp latestClass={latestClass} model={model} handleModel={setModel} />
            </div>
        </div>
    );
};

OnlineClassalert.propTypes = {
    latestClass: array.isRequired,

};

// const mapStateToProps = (state) => ({
//     login: state.Auth,
// });

// const mapDispatchToProps = (dispatch) => ({
//     getMyClasses: () => dispatch(getMyClassesAction()),
//     getMyClassesHistory: () => dispatch(getMyClassesHistoryAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(OnlineClassalert);

export default OnlineClassalert;
