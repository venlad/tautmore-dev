import {
    array,
    func, object, string,
} from 'prop-types';
import React, {  useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OlympiadQueanspart from './OlympiadQueanspart';

const OlympiadRIghtsidepart = ({
    questionInExamData, selectedQuestion, setSelectedQuestion, selectedOption,
    setSelectedOption, allQuesAns, setEachTimeOn,
    eachcurrenttime,
    setEachtime,
}) => {
    // useEffect(() => {
    //     const setQueAnsData = questionInExamData?.map((data) => ({
    //         question: data?._id,
    //         solutionIndex:[
    //             -1,
    //         ],
    //         timeTakenInSecs: 0,
    //     }));
    //     addQueAns(setQueAnsData);
    // }, [questionInExamData]);

    const [show, setShow] = useState(false);
    const [showtwo, setShowtwo] = useState(false);
    const [answedQue, setAnswedQue] = useState([]);
    const [notanswedQue, setNotanswedQue] = useState([]);
    // const answedQue = [];// allQuesAns?.filter((x) => !x?.solutionIndex?.includes(-1));
    // const notanswedQue = []; // allQuesAns?.filter((x) => x?.solutionIndex?.includes(-1));
    const dropDownone = () => {
        setShow(!show);
        setShowtwo(false);
    };

    const dropDowntwo = () => {
        setShowtwo(!showtwo);
        setShow(false);
    };
    // let answedQue = [];
    // let notanswedQue = [];
    useEffect(() => {
        // console.log('SSSSSS');
        setAnswedQue(allQuesAns?.filter((x) => !x?.solutionIndex?.includes(-1)));
        setNotanswedQue(allQuesAns?.filter((x) => x?.solutionIndex?.includes(-1)));
    }, [allQuesAns]);

    return (
        <div className="olympiad-rightside-part">
            <div className="rightsidepart-top row">
                <div className="col-md-4 top-left">
                    <div className="current-que">

                        <h5>
                            Current question :
                            <span>{selectedQuestion + 1} / {questionInExamData?.length}
                            </span>
                        </h5>
                    </div>
                </div>
                <div className="col-md-8 top-right">
                    <div className="row">
                        <div className="col-md-6 top-right-common">
                            <div className="dropdown-main">
                                <div
                                    className={`select ${show ? 'active' : ''}`}
                                    onClick={dropDownone}
                                    aria-hidden="true"
                                >
                                    Answered Questions : <span className="number green">{answedQue?.length}</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${show ? 'active' : ''}`}>
                                    {allQuesAns?.map((val, i) => (
                                        !val?.solutionIndex.includes(-1) && (
                                            <div
                                                key={val}
                                                onClick={() => {
                                                // setSelect(val);
                                                    setSelectedQuestion(i);
                                                    setShow(false);
                                                }}
                                                aria-hidden="true"
                                            >
                                                Question {i + 1}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 top-right-common">
                            <div className="dropdown-main">
                                <div
                                    className={`select ${showtwo ? 'active' : ''}`}
                                    onClick={dropDowntwo}
                                    aria-hidden="true"
                                >
                                    Questions not Answered :<span className="number orange">{notanswedQue?.length}</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${showtwo ? 'active' : ''}`}>
                                    {allQuesAns.map((val, i) => (
                                        val?.solutionIndex.includes(-1) && (
                                            <div
                                                key={val}
                                                onClick={() => {
                                                // setSelecttwo(val);
                                                    setSelectedQuestion(i);
                                                    setShowtwo(false);
                                                }}
                                                aria-hidden="true"
                                            >
                                                Question {i + 1}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="olympiad-practice-test">
                <OlympiadQueanspart
                    questionInExamData={questionInExamData}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    setEachTimeOn={setEachTimeOn}
                    eachcurrenttime={eachcurrenttime}
                    setEachtime={setEachtime}
                />
            </div>

        </div>
    );
};
OlympiadRIghtsidepart.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    setSelectedQuestion: func.isRequired,
    selectedOption: string.isRequired,
    setSelectedOption: func.isRequired,
    allQuesAns: array.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: func.isRequired,
};
const mapStateToProps = (state) => ({
    allQuesAns: state.MyExam.allQuesAns,
});

export default  connect(mapStateToProps)(OlympiadRIghtsidepart);
