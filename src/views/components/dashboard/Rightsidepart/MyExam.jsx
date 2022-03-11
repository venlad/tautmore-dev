import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {  func, object } from 'prop-types';
import MyexamTitle from './MyexamTitle';
import MyexamCommon from './MyexamCommon';
import MyexamTab from './MyexamTab';
import MyExamTotalscore from './MyExamTotalscore';
import MyexamExamlist from './MyexamExamlist';
import { chevRight } from '../../../../assets/icons/IconList';
import {
    finishExamAction,
    getQuestionInExamAction, previousExamAction, startExamAction, upcomingExamAction,
} from '../../../../stores/MyExam/MyExamAction';

import { formatDate, formatTime } from '../../../../helpers/utility';
import Olympiad from './Olympiad/Olympiad';
// import FinishExamPopup from './Olympiad/FinishExamPopup';
import CongratsPopup from './Olympiad/CongratsPopup';

const MyExam = ({
    upcomingexams, upcomingexamData, previousexams, previousexamData, startexam, questionInexam,
    questionInExamData, finishexam, startExamData, allQuesAns,
}) => {
    const [selectedSubject, setSelectedSubject] = useState({ _id: '', name: 'All Subject' });
    const [subdata, setSubdata] = useState({ _id: '', name: 'All Subject' });
    const [timedata, setTimedata] = useState({ name: 'All time', value: '' });
    const [startexamState, setStartExamState] = useState('');

    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);
    const [eachcurrenttime, setEachcurrenttime] = useState();
    const [time, setTime] = useState(180000);
    const [currenttime, setCurrenttime] = useState();
    const [finishTest, setFinishTest] = useState('step1');
    const [modal, setModal] = useState(false);

    const queData = [
    // {
    //     statusCode: 200,
    //     status: 'success',
    //     data: [
    //         {
    //             response:

        {
            _id: '6219c37385e04200097b2a90',
            id: 91266377,
            description: '<p>From the figure, the value of a + b + c + d is___.&nbsp;</p><figure class="image"><img src="https://tm-admin-images.s3.amazonaws.com/images/1645855502231-image18.png"></figure>',
            statement: [
                {
                    index: 0,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>360</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a91',
                },
                {
                    index: 1,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>240</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a92',
                },
                {
                    index: 2,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>180</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a93',
                },
                {
                    index: 3,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>160</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a94',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>360</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a95',
                },
                {
                    index: 1,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>240</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a96',
                },
                {
                    index: 2,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>180</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a97',
                },
                {
                    index: 3,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>160</mn><mo>°</mo></math></p>',
                    image: '',
                    _id: '6219c37385e04200097b2a98',
                },
            ],
            questionOrientaion: 'horizontal',
            solutionType: '1',
            passageQuestions: [],
            createdAt: '2022-02-26T06:06:43.856Z',
        },
        {
            _id: '6219c50785e04200097b2a9a',
            id: 94416719,
            description: '<p>James wants to find the number of diagonals a polygon can have. Which formula is suitable to find the number of diagonals of a polygon?</p><figure class="image"><img src="https://tm-admin-images.s3.amazonaws.com/images/1645855814761-image52.png"></figure>',
            statement: [
                {
                    index: 0,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi><mo>&nbsp;</mo><mo>−</mo><mo>&nbsp;</mo><mn>3</mn></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2a9b',
                },
                {
                    index: 1,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></mfrac></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2a9c',
                },
                {
                    index: 2,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi><mo>+</mo><mn>2</mn></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2a9d',
                },
                {
                    index: 3,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2a9e',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi><mo>&nbsp;</mo><mo>−</mo><mo>&nbsp;</mo><mn>3</mn></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2a9f',
                },
                {
                    index: 1,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></mfrac></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2aa0',
                },
                {
                    index: 2,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi><mo>+</mo><mn>2</mn></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2aa1',
                },
                {
                    index: 3,
                    text: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></p>',
                    image: '',
                    _id: '6219c50785e04200097b2aa2',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '1',
            passageQuestions: [],
            createdAt: '2022-02-26T06:13:27.859Z',
        },
        {
            _id: '6219c64cf9ad130009c7fbb2',
            id: 90938688,
            description: '<p><strong>Statement 1 :</strong> A Polygon having six sides is called a hexagon&nbsp;</p><p><strong>Statement 2 :</strong> A Quadrilateral has two diagonals.</p>',
            statement: [
                {
                    index: 0,
                    text: '<p>Statement 1 is correct and Statement 2 is wrong</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb3',
                },
                {
                    index: 1,
                    text: '<p>Statement 1 is wrong and Statement 2 is correct</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb4',
                },
                {
                    index: 2,
                    text: '<p>Both statements 1 &amp; 2 are correct</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb5',
                },
                {
                    index: 3,
                    text: '<p>Both statement 1 &amp; 2 are incorrect</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb6',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p>Statement 1 is correct and Statement 2 is wrong</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb7',
                },
                {
                    index: 1,
                    text: '<p>Statement 1 is wrong and Statement 2 is correct</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb8',
                },
                {
                    index: 2,
                    text: '<p>Both statements 1 &amp; 2 are correct</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbb9',
                },
                {
                    index: 3,
                    text: '<p>Both statement 1 &amp; 2 are incorrect</p>',
                    image: '',
                    _id: '6219c64cf9ad130009c7fbba',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '2',
            passageQuestions: [],
            createdAt: '2022-02-26T06:18:52.880Z',
        },
        {
            _id: '6219c6bbf9ad130009c7fbbc',
            id: 45283102,
            description: '<p>Which of the following is a&nbsp; simple closed figure formed by line segments?</p>',
            statement: [
                {
                    index: 0,
                    text: '<p>Curve</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbbd',
                },
                {
                    index: 1,
                    text: '<p>Polygon&nbsp;</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbbe',
                },
                {
                    index: 2,
                    text: '<p>Circle</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbbf',
                },
                {
                    index: 3,
                    text: '<p>Point&nbsp;</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbc0',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p>Curve</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbc1',
                },
                {
                    index: 1,
                    text: '<p>Polygon&nbsp;</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbc2',
                },
                {
                    index: 2,
                    text: '<p>Circle</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbc3',
                },
                {
                    index: 3,
                    text: '<p>Point&nbsp;</p>',
                    image: '',
                    _id: '6219c6bbf9ad130009c7fbc4',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '2',
            passageQuestions: [],
            createdAt: '2022-02-26T06:20:43.433Z',
        },
        {
            _id: '6219c74550a2d4000994419e',
            id: 90993394,
            description: '<p>What is the polygon reflected in the school zone board shown in the image?&nbsp;</p><figure class="image"><img src="https://tm-admin-images.s3.amazonaws.com/images/1645856530451-image89.png"></figure>',
            statement: [
                {
                    index: 0,
                    text: '<p>Triangle</p>',
                    image: '',
                    _id: '6219c74550a2d4000994419f',
                },
                {
                    index: 1,
                    text: '<p>Pentagon&nbsp;</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a0',
                },
                {
                    index: 2,
                    text: '<p>Octagon</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a1',
                },
                {
                    index: 3,
                    text: '<p>Nonagon&nbsp;</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a2',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p>Triangle</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a3',
                },
                {
                    index: 1,
                    text: '<p>Pentagon&nbsp;</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a4',
                },
                {
                    index: 2,
                    text: '<p>Octagon</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a5',
                },
                {
                    index: 3,
                    text: '<p>Nonagon&nbsp;</p>',
                    image: '',
                    _id: '6219c74550a2d400099441a6',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '2',
            passageQuestions: [],
            createdAt: '2022-02-26T06:23:01.262Z',
        },
        {
            _id: '6219c7d050a2d400099441a8',
            id: 52311936,
            description: '<p>The&nbsp; shape of the starfish reflects a concave polygon.</p><figure class="image"><img src="https://tm-admin-images.s3.amazonaws.com/images/1645856688886-image20.gif"></figure>',
            statement: [
                {
                    index: 0,
                    text: '<p>Yes</p>',
                    image: '',
                    _id: '6219c7d050a2d400099441a9',
                },
                {
                    index: 1,
                    text: '<p>No</p>',
                    image: '',
                    _id: '6219c7d050a2d400099441aa',
                },
            ],
            options: [
                {
                    index: 0,
                    text: '<p>Yes</p>',
                    image: '',
                    _id: '6219c7d050a2d400099441ab',
                },
                {
                    index: 1,
                    text: '<p>No</p>',
                    image: '',
                    _id: '6219c7d050a2d400099441ac',
                },
            ],
            questionOrientaion: 'vertical',
            solutionType: '2',
            passageQuestions: [],
            createdAt: '2022-02-26T06:25:20.837Z',
        },
    ];
    //             count: [
    //                 {
    //                     _id: null,
    //                     count: 6,
    //                 },
    //             ],
    //         },
    //     ],
    // };

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
            // student: '6228671a11b09f000923b8c0',
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
            // student: '61f3bf5ed81efd0009c31a5d',
                // student: '621367b7d8f8340009d4a866',
                student: '6228671a11b09f000923b8c0',
                exam: selectedExam?._id,
                subject: selectedExam?.subject,

            });
            questionInexam({
                exam: selectedExam?._id,
            });
        }
        // const TotalTime = upcomingexamData?.data[0]?.response
        //     ?.filter((x) => x._id === startExamData?.data?.exam)[0];
        // setTime(TotalTime?.totalTime);
    }, [upcomingexamData, startexamState]);
    useEffect(() => {
        if (finishTest === 'step3' || time === 0) {
            finishexam({
                student: '61f3bf5ed81efd0009c31a5d',
                examm: startExamData?.data?.exam,
                timeTakenInSecs: 80,
                results: [allQuesAns],
            });
        }
    }, [finishTest, time]);
    // console.log('upcomingexamData', upcomingexamData);
    // console.log('subjectList', subjectList);

    return (
        <div>
            {startexamState !== ''
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
                                        student={15}
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
                    <MyExamTotalscore
                        previousexamData={previousexamData}
                    />
                    <MyexamExamlist
                        previousexamData={previousexamData}
                    />
                </div>
            )}
            {/* { console.log('startexam', startexam)} */}
            {startexamState === ''
            && (
                <Olympiad
                    // questionInExamData={questionInExamData}
                    questionInExamData={queData}
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
                />

            )}
            {finishTest === 'step2'
            && (
                // <FinishExamPopup />
                <CongratsPopup />
            )}
            {console.log('finishTest', finishTest)}
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
    questionInexam: func.isRequired,
    questionInExamData: object.isRequired,
    startExamData: object.isRequired,
    allQuesAns: object.isRequired,
};
const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
    studentId: state.Auth.Login?.data?._id,
    upcomingexamData: state.MyExam.upcomingExam,
    previousexamData: state.MyExam.previousExam,
    questionInExamData: state.MyExam.questionInExam,
    startExamData: state.MyExam.startExam,
    allQuesAns: state.MyExam.allQuesAns,
});
const mapDispatchToProps = (dispatch) => ({
    upcomingexams: (data) => dispatch(upcomingExamAction(data)),
    previousexams: (data) => dispatch(previousExamAction(data)),
    startexam: (data) => dispatch(startExamAction(data)),
    questionInexam: (data) => dispatch(getQuestionInExamAction(data)),
    finishexam: (data) => dispatch(finishExamAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyExam);
