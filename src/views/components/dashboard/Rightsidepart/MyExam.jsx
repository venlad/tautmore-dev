import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {   func, object } from 'prop-types';
import MyexamTitle from './MyexamTitle';
import MyexamCommon from './MyexamCommon';
import MyexamTab from './MyexamTab';
import MyExamTotalscore from './MyExamTotalscore';
import MyexamExamlist from './MyexamExamlist';
import { chevRight } from '../../../../assets/icons/IconList';
import {
    finishExamAction, updateAllQueAnsAction,
    getQuestionInExamAction, previousExamAction,
    startExamAction, upcomingExamAction, myReportAction,
} from '../../../../stores/MyExam/MyExamAction';

import { formatDate, formatTime } from '../../../../helpers/utility';
import Olympiad from './Olympiad/Olympiad';
import FinishExamPopup from './Olympiad/FinishExamPopup';
import CongratsPopup from './Olympiad/CongratsPopup';
import { findKeyByValue } from './BrainGym/QueAnswer/questionHelper';

const MyExam = ({
    upcomingexams, upcomingexamData, previousexams, previousexamData, startexam, questionInexam,
    questionInExamData, finishexam, startExamData, updateQueAns,
    allQuesAns, myReport,
    // studentId,
}) => {
    const [selectedSubject, setSelectedSubject] = useState({ _id: '', name: 'All Subject' });
    const [subdata, setSubdata] = useState({ _id: '', name: 'All Subject' });
    const [timedata, setTimedata] = useState({ name: 'All time', value: '' });
    const [startexamState, setStartExamState] = useState('');

    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);
    const [eachcurrenttime, setEachcurrenttime] = useState();
    const [time, setTime] = useState();
    const [totaltime, setTotalTime] = useState();
    const [examName, setExamName] = useState('');
    const [currenttime, setCurrenttime] = useState();
    const [finishTest, setFinishTest] = useState('step1');
    const [modal, setModal] = useState(false);

    // console.log(studentId);
    // const toggle = () => {
    //     setModal(!modal);
    // };
    // console.log(startExamData, eachcurrenttime, currenttime);
    // if (upcomingexamData?.data[0]?.response?._id === startExamData?.data?.exam) {
    //     setTime(upcomingexamData?.data[0]?.response?.totalTime);
    // }
    useEffect(() => {
        let interval = null;
        if (questionInExamData?.length > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1000);
            }, 1000);
            const setQueAnsData = questionInExamData?.map((data) => {
                let que = {};
                if (findKeyByValue(data?.solutionType)
              !== 'passage') {
                    que = {
                        question: data?._id,
                        solutionIndex: [
                            -1,
                        ],
                        timeTakenInSecs: 0,
                    };
                } else {
                    que = {
                        question: data?._id,
                        passageQuestions:
                            data?.passageQuestions?.map((item) => {
                                const items = {
                                    question: item?._id,
                                    solutionIndex: [
                                        -1,
                                    ],
                                };
                                return items;
                            }),
                        timeTakenInSecs: 0,
                    };
                }

                return que;
            });
            updateQueAns(setQueAnsData);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [questionInExamData]);

    useEffect(() => {
        setCurrenttime(`${(`0${Math.floor((time / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((time / 1000) % 60)}`).slice(-2)}`);
    });

    useEffect(() => {
        let intervalEach = null;
        setEachTimeOn(true);
        if (questionInExamData?.length > 0 && eachtimeOn) {
            intervalEach = setInterval(() => {
                setEachtime((prevTimeEach) => prevTimeEach + 1000);
            }, 1000);
        } else {
            clearInterval(intervalEach);
        }
        return () => clearInterval(intervalEach);
    }, [eachtimeOn, questionInExamData]);

    useEffect(() => {
        setEachcurrenttime(eachtime / 1000);
    });

    useEffect(() => {
        // if (!subdata?._id) {
        upcomingexams({
            student: '61f3bf5ed81efd0009c31a5d',
            // student: studentId,
            subject: subdata?._id,
            page_no: 1,
            examType: '',
        });
        // }
    }, [subdata]);
    useEffect(() => {
        // if (!subdata?._id) {
        previousexams({
            student: '61f3bf5ed81efd0009c31a5d',
            // student: studentId,
            subject: selectedSubject?._id,
            page_no: 1,
            examType: '',
            timeFrame: timedata?.value,
        });
        // }
    }, [selectedSubject, timedata]);

    useEffect(() => {
        if (startexamState) {
            const selectedExam = upcomingexamData?.data && upcomingexamData?.data[0]?.response
                ?.filter((item) => item._id === startexamState)[0];
            // console.log('startexamStateUSEEEEEE', startexamState, selectedExam);
            startexam({

                student: '61f3bf5ed81efd0009c31a5d',
                // student: studentId,
                exam: selectedExam?._id,
                subject: selectedExam?.subject,

            });
            questionInexam({
                exam: selectedExam?._id,
            });
        }
    }, [upcomingexamData, startexamState]);

    useEffect(() => {
        if (upcomingexamData?.data && startExamData?.data) {
            console.log('upcomingexamData', startExamData?.data);
            const TotalTime = upcomingexamData?.data &&  upcomingexamData?.data[0]?.response
                ?.filter((x) => x._id === startExamData?.data?.exam)[0];
            console.log('TotalTime', TotalTime);
            setTime(TotalTime?.totalTime * 60 * 1000);
            setTotalTime(TotalTime?.totalTime * 60 * 1000);
            setExamName(TotalTime?.name);
        }
    }, [startExamData]);
    useEffect(() => {
        if (finishTest === 'step5') {
            console.log('finish test called');
            myReport({
                examResultId: startExamData?.data?._id,
            });
        }
    }, [finishTest]);

    useEffect(() => {
        if (finishTest === 'step3' || time === 0) {
            setFinishTest('step4');
            finishexam({
                student: '61f3bf5ed81efd0009c31a5d',
                // student: studentId,
                exam: startExamData?.data?.exam,
                timeTakenInSecs: (totaltime - time) / 1000,
                results: allQuesAns,
                // results: [{ question: '622b04b14336f30009aa2222', solutionIndex: [1],
                // timeTakenInSecs: 13 },
                // { question: '622b04da43cf610009798307', solutionIndex: [2], timeTakenInSecs: 2 },
                // { question: '622b051043cf610009798311', solutionIndex: [2], timeTakenInSecs: 1 },
                // { question: '622b051c43cf61000979831b', solutionIndex: [2], timeTakenInSecs: 2 },
                // { question: '622b057743cf610009798325', solutionIndex: [2], timeTakenInSecs: 2 },
                // { question: '622b05fa43cf61000979832f', solutionIndex: [2], timeTakenInSecs: 3 },
                // { question: '622b06164336f30009aa222c', solutionIndex: [0], timeTakenInSecs: 5 },
                // { question: '622b0b5121bfcf0009f26643', solutionIndex: [2], timeTakenInSecs: 2 },
                // { question: '622b13cd5fd84f0009f14ccd', solutionIndex: [2], timeTakenInSecs: 4 }]
                // ,
            });
        }
    },
    [finishTest, time]);
    // console.log('finishExam', finishTest);
    // console.log('time', time, (180000 - time), currenttime);

    return (
        <div>
            {startexamState === ''
            && (
                <div className="myexam-main">
                    <MyexamTitle
                        title="Upcoming exams"
                        select
                        setSubdata={setSubdata}
                        subdata={subdata}
                    />
                    <div className="row">
                        {/* {console.log('upcomingexamData?.data?.response',
                         upcomingexamData?.data)} */}
                        <div className="col-md-6 myexam-main-common-left">
                            {upcomingexamData?.data && upcomingexamData?.data[0]?.response
                                ?.map((item) => (
                                    <MyexamCommon
                                        key={item?._id}
                                        examId={item?._id}
                                        subject={item?.subjectName}
                                        date={formatDate(item?.endDate)}
                                        time={formatTime(item?.endDate)}
                                        title={item?.name}
                                        examType={item?.examType}
                                        // student={15}
                                        setStartExam={setStartExamState}
                                    />
                                ))}
                        </div>

                        {/* <div className="col-md-6 myexam-main-common-right">
                    <MyexamCommon subject="English" date="20 Oct 2020" time="23:59" student={15} />
                </div> */}
                    </div>
                    <div className="subscribe-for-more-exam">
                        <button type="button">Subcribe for more exams <span>{chevRight}</span></button>
                    </div>
                    <MyexamTitle
                        title="Previous exams history"
                        setSubdata={setSubdata}
                        subdata={subdata}

                    />
                    <MyexamTab
                        setSelectedSubject={setSelectedSubject}
                        selectedSubject={selectedSubject}
                        timedata={timedata}
                        setTimedata={setTimedata}
                    />
                    {previousexamData && previousexamData?.data?.length > 0
                    && previousexamData?.data[0]?.summary?.length > 0

                    && (
                        <MyExamTotalscore
                            previousexamData={previousexamData?.data[0]?.summary[0]}
                        />
                    )                    }
                    {console.log('previousexamData', previousexamData)}

                    <MyexamExamlist
                        previousexamData={previousexamData}
                        setStartExam={setStartExamState}
                    />
                </div>
            )}
            {/* { console.log('startexam', startexam)} */}
            {startexamState !== ''
            && (
                <Olympiad
                    questionInExamData={questionInExamData}
                    // questionInExamData={queData}
                    time={time}
                    setTime={setTime}
                    currenttime={currenttime}
                    setCurrenttime={setCurrenttime}
                    eachtime={eachtime}
                    setEachtime={setEachtime}
                    eachtimeOn={eachtimeOn}
                    setEachTimeOn={setEachTimeOn}
                    eachcurrenttime={eachcurrenttime}
                    setEachcurrenttime={setEachcurrenttime}
                    finishTest={finishTest}
                    setFinishTest={setFinishTest}
                    setModal={setModal}
                    modal={modal}
                    examName={examName}
                />

            )}
            {finishTest === 'step2'
            && (
                <FinishExamPopup
                    setFinishTest={setFinishTest}
                    setModal={setModal}
                    modal={modal}
                />
                // <CongratsPopup
                //     setFinishTest={setFinishTest}
                //     setStartExamState={setStartExamState}
                // />
            )}
            {finishTest === 'step4'
            && (

                <CongratsPopup
                    setFinishTest={setFinishTest}
                    setStartExamState={setStartExamState}
                    timeInSec={(totaltime - time) / 1000}
                />
            )}
        </div>
    );
};
MyExam.propTypes = {
    upcomingexams: func.isRequired,
    upcomingexamData: object.isRequired,
    previousexams: func.isRequired,
    previousexamData: object.isRequired,
    startexam: func.isRequired,
    finishexam: func.isRequired,
    // subjectList: array.isRequired,
    // studentId: string.isRequired,
    questionInexam: func.isRequired,
    updateQueAns: func.isRequired,
    questionInExamData: object.isRequired,
    startExamData: object.isRequired,
    // finishExam: object.isRequired,
    allQuesAns: object.isRequired,
    myReport: func.isRequired,
    // myReportData: object.isRequired,
};
const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
    studentId: state.Auth.Login?.data?._id,
    upcomingexamData: state.MyExam.upcomingExam,
    previousexamData: state.MyExam.previousExam,
    questionInExamData: state.MyExam.questionInExam,
    startExamData: state.MyExam.startExam,
    allQuesAns: state.MyExam.allQuesAns,
    finishExam: state.MyExam.finishExam,
    myReportData: state.MyExam.myReport,

});
const mapDispatchToProps = (dispatch) => ({
    upcomingexams: (data) => dispatch(upcomingExamAction(data)),
    previousexams: (data) => dispatch(previousExamAction(data)),
    startexam: (data) => dispatch(startExamAction(data)),
    questionInexam: (data) => dispatch(getQuestionInExamAction(data)),
    finishexam: (data) => dispatch(finishExamAction(data)),
    updateQueAns: (data) => dispatch(updateAllQueAnsAction(data)),
    myReport: (data) => dispatch(myReportAction(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(MyExam);
