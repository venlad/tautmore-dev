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
    const [answedQueCount, setAnswedQueCount] = useState([]);
    const [notanswedQueCount, setNotanswedQueCount] = useState(allQuesAns);
    const dropDownone = () => {
        setShow(!show);
        setShowtwo(false);
    };

    const dropDowntwo = () => {
        setShowtwo(!showtwo);
        setShow(false);
    };
    useEffect(() => {
        const ansQ = [];
        const noAnsQ = [];
        allQuesAns.forEach((element, index) => {
            const copyOfElement = element;
            copyOfElement.index = index;
            if ('passageQuestions' in element) {
                let allPasQueAnswered = true;
                element?.passageQuestions?.forEach((item) => {
                    if (allPasQueAnswered && !item?.solutionIndex?.includes(-1)) {
                        allPasQueAnswered = true;
                    } else {
                        allPasQueAnswered = false;
                    }
                });
                if (allPasQueAnswered) {
                    ansQ.push(copyOfElement);
                } else {
                    noAnsQ.push(copyOfElement);
                }
            } else if (element?.solutionIndex?.includes(-1)) {
                noAnsQ.push(copyOfElement);
            } else {
                ansQ.push(copyOfElement);
            }
        });
        setAnswedQueCount(ansQ);
        setNotanswedQueCount(noAnsQ);
    }, [selectedOption, allQuesAns]);

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
                                    Answered Questions : <span className="number green">{answedQueCount?.length}</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${show ? 'active' : ''}`}>
                                    {answedQueCount?.map((val) => (
                                        // !val?.solutionIndex.includes(-1) && (
                                        <div
                                            key={Math.random()}
                                            onClick={() => {
                                                // setSelect(val);
                                                setSelectedQuestion(val?.index);
                                                setShow(false);
                                            }}
                                            aria-hidden="true"
                                        >
                                            Question {val?.index + 1}
                                        </div>
                                        // )
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
                                    Questions not Answered :<span className="number orange">{notanswedQueCount?.length}</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${showtwo ? 'active' : ''}`}>
                                    {notanswedQueCount?.map((val) => (
                                        // val?.solutionIndex.includes(-1) && (
                                        <div
                                            key={Math.random()}
                                            onClick={() => {
                                                // setSelecttwo(val);
                                                setSelectedQuestion(val?.index);
                                                setShowtwo(false);
                                            }}
                                            aria-hidden="true"
                                        >
                                            Question {val?.index + 1}
                                        </div>
                                        // )
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
