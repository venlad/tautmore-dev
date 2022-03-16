import React, { useEffect } from 'react';
// import speaker from '../../../assets/images/speaker.png';
import {
    array,
    func, object, string,
} from 'prop-types';
// import APImage from '../../../../../assets/images/travelling.png';
// import { quesData } from './mockData/RightsidepartData';
import { connect } from 'react-redux';
import {  chevRight, chevLeft } from '../../../../../assets/icons/IconList';
// import OlympiadAnswerOption from './OlympiadAnswerOption';
// import { renderText } from '../BrainGym/QueAnswer/textHelper';
import { addAllQueAnsAction, updateAllQueAnsAction } from '../../../../../stores/MyExam/MyExamAction';
import OlympiadQuesAnsWrapper from './OlympiadQuesAnsWrapper';
import { findKeyByValue } from '../BrainGym/QueAnswer/questionHelper';
import DraggAndDropQuestion from './DragAndDropQuestion/DraggAndDropQuestion';

const OlympiadQueanspart = ({
    updateQueAns, questionInExamData, selectedQuestion, setSelectedQuestion,
    selectedOption, setSelectedOption, allQuesAns,
    // addQueAns,
    setEachTimeOn,
    eachcurrenttime,
    setEachtime,
}) => {
    const questionObject = questionInExamData[selectedQuestion];
    useEffect(() => {
        console.log('step0', allQuesAns[selectedQuestion], '@@@@', selectedQuestion);

        if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]
            && !allQuesAns[selectedQuestion]?.solutionIndex?.includes(-1)) {
            console.log('step1', allQuesAns[selectedQuestion]?.solutionIndex);
            setSelectedOption(allQuesAns[selectedQuestion]?.solutionIndex);
            console.log(selectedOption, '@#@#@#@#@#@');
        } else if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]?.passageQuestions
            && !allQuesAns[selectedQuestion]?.passageQuestions?.solutionIndex?.includes(-1)) {
            setSelectedOption(allQuesAns[selectedQuestion]?.passageQuestions?.solutionIndex);
        } else {
            console.log('step3');

            setSelectedOption([]);
        }
    }, [selectedQuestion]);

    // console.log('TTTTTTTTTTTTT',  questionObject);
    useEffect(() => {
        console.log('ithe aala', selectedOption);
        //  const que = allQuesAns.findIndex((obj) => obj.question === questionObject?._id);
        if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]) {
            const allQnA = allQuesAns;
            if ('passageQuestions' in allQuesAns?.[selectedQuestion]
             && allQuesAns[selectedQuestion]?.passageQuestions?.length > 0) {
                //  allQnA[selectedQuestion]?.passageQuestions?.solutionIndex =
                //     passageQuestions?.question ===
                // questionObject?.passageQuestions?._id ? selectedOption : [
                //                     -1,
                //                 ];

                allQnA[selectedQuestion].timeTakenInSecs = eachcurrenttime;
            } else {
                allQnA[selectedQuestion].solutionIndex = selectedOption?.length > 0
                    ? selectedOption : [
                        -1,
                    ];
                allQnA[selectedQuestion].timeTakenInSecs = eachcurrenttime;
            }
            updateQueAns(allQnA);
        }

        // else {
        //     addQueAns({
        //         question: questionObject?._id,
        //         solutionIndex: selectedOption?.length > 0 ? selectedOption : [
        //             -1,
        //         ],
        //         timeTakenInSecs: eachcurrenttime,
        //     });
        // }
    }, [selectedOption]);

    const handleNext = () => {
        if ((selectedQuestion + 1) < questionInExamData?.length) {
            // handleQnA();
            console.log('seleletdnext');
            // setSelectedOption([]);
            setSelectedQuestion(selectedQuestion + 1);
            setEachTimeOn(false);
            setEachtime(0);
        }
    };
    const handlePrev = () => {
        if (selectedQuestion > 0) {
            console.log('seleletdprev');
            // handleQnA();
            // setSelectedOption([]);
            setSelectedQuestion(selectedQuestion - 1);
            setEachTimeOn(false);
            setEachtime(0);
        }
    };

    return    (
        <div>
            <div className="row">
                {/* {console.log('questionInExamData', questionInExamData, setSelectedQuestion)} */}
                <div className="col-12">
                    {/* <div className="question-box">
                        <h4>Question - {selectedQuestion + 1}</h4>
                        <h2> <span>{renderText(questionObject?.description)}</span></h2>
                    </div>
                    <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTyleType">
                        {questionObject?.options?.map((item, ind) => (
                            <OlympiadAnswerOption
                                questionObject={questionObject}
                                item={item}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                ind={ind}
                                // select={select}
                                // options={options}
                            />
                        ))}
                    </div> */}
                    {findKeyByValue(questionObject?.solutionType) === 'drag-and-drop'
        &&   (
            <DraggAndDropQuestion
                questionInChest={questionObject}
                setSelect={setSelectedOption}
                selectedOption={selectedOption}
                selectedQuestion={selectedQuestion}
            />
        )}
                    <OlympiadQuesAnsWrapper
                        description={questionObject?.description}
                        options={questionObject?.options}
                        questionInExamData={questionInExamData}
                        selectedQuestion={selectedQuestion}
                        setSelectedQuestion={setSelectedQuestion}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        setEachTimeOn={setEachTimeOn}
                        eachcurrenttime={eachcurrenttime}
                        setEachtime={setEachtime}
                        showOptions={findKeyByValue(questionObject?.solutionType) !== 'passage'}
                    />
                    {/* {console.log('questionObject', questionObject)} */}
                    {findKeyByValue(questionObject?.solutionType) === 'passage'
        && questionObject?.passageQuestions?.map((item, i) => (
            <OlympiadQuesAnsWrapper
                data={item}
                qIndex={i + 1}
                description={item?.description}
                options={item?.options}
                questionInExamData={questionInExamData}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setEachTimeOn={setEachTimeOn}
                eachcurrenttime={eachcurrenttime}
                setEachtime={setEachtime}
            />
        ))}

                    <div className="subscribe-for-more-exam">
                        {selectedQuestion > 0 ? <button type="button" className="prev" onClick={() => handlePrev()}><span>{chevLeft}</span>Previous Question</button> : null}
                        {/* <button type="button" className="prev" onClick={()
                             => handlePrev()}><span>{chevLeft}</span>Previous Question</button> */}
                        {questionInExamData?.length === (selectedQuestion + 1) ? null
                            : <button type="button" className="next" onClick={() => handleNext()}>Next Question<span>{chevRight}</span></button>}
                        {/* <button type="button" className="next"
                         onClick={() => handleNext()}>Next Question<span>
                         {chevRight}</span></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
OlympiadQueanspart.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    setSelectedQuestion: func.isRequired,
    selectedOption: string.isRequired,
    setSelectedOption: func.isRequired,
    updateQueAns: func.isRequired,
    // addQueAns: func.isRequired,
    allQuesAns: array.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: func.isRequired,
};
const mapStateToProps = (state) => ({
    allQuesAns: state.MyExam.allQuesAns,
});

const mapDispatchToProps = (dispatch) => ({
    updateQueAns: (data) => dispatch(updateAllQueAnsAction(data)),
    addQueAns: (data) => dispatch(addAllQueAnsAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OlympiadQueanspart);
