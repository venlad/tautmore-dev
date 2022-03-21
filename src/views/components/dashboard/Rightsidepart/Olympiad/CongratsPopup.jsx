import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import stopwatch from '../../../../../assets/images/stopwatch.png';
import { chevRight } from '../../../../../assets/icons/IconList';
import MyexamAnswer from '../MyexamAnswer';
import close from '../../../../../assets/images/close.png';

const CongratsPopup = ({
    finishExam, setStartExamState, setFinishTest, startExamData,
}) => {
    const [exam, setExam] = useState(false);
    const showreport = () => {
        setExam(!exam);
    };
    const closepopup = () => {
        setStartExamState('');
        setFinishTest('step1');
    };

    return (
        <div className="congrats-popup-main">
            <div className="right-answer-container">
                <div className="close-top">
                    <button type="button" className="close-btn" onClick={closepopup}><img src={close} alt="close" /></button>
                </div>
                <div className="right-answer-modal-bg" />
                <div className="right-answer-modal">
                    <div className="congrats-detail">
                        <h2>Congrats !</h2>
                        <h4>You have scored <span>{finishExam?.data?.marksObtained}</span>
                            points in your custom test
                            Average time/question:
                            {finishExam?.data?.timeTakenInSecs / finishExam?.data?.totalQuestions}
                            secs
                        </h4>
                        <div className="congrats-detail-sub">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="congrats-detail-sub-part">
                                        <img src={stopwatch} alt="stopwatch" />
                                        <div className="congrats-detail-sub-part-right">
                                            <p>Time taken (min)</p>
                                            <h5>{`${Math.floor(finishExam?.data?.timeTakenInSecs / 60)}:${finishExam?.data?.timeTakenInSecs % 60 ? finishExam?.data?.timeTakenInSecs % 60 : '00'}`}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="congrats-detail-sub-part">
                                        <img src={stopwatch} alt="stopwatch" />
                                        <div className="congrats-detail-sub-part-right">
                                            <p>Accuracy</p>
                                            <h5>{finishExam?.data?.accuracy} %</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="congrats-detail-sub-part">
                                        <img src={stopwatch} alt="stopwatch" />
                                        <div className="congrats-detail-sub-part-right">
                                            <p>Right answers</p>
                                            <h5>{finishExam?.data?.rightAnswers} out of
                                                {finishExam?.data?.totalQuestions}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={showreport}
                            className="button-common"
                        >
                            View Report
                            <span>{chevRight}</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                exam && <MyexamAnswer setExam={setExam} prevExamId={startExamData?.data?._id} />
            }

        </div>
    );
};

CongratsPopup.propTypes = {
    finishExam: object.isRequired,
    startExamData: object.isRequired,
    setStartExamState: func.isRequired,
    setFinishTest: func.isRequired,
};
const mapStateToProps = (state) => ({
    finishExam: state.MyExam.finishExam,
    startExamData: state.MyExam.startExam,
});
export default connect(mapStateToProps)(CongratsPopup);
