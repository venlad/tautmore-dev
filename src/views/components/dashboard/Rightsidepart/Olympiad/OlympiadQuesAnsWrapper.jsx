import React from 'react';
// import speaker from '../../../assets/images/speaker.png';
import {
    array,
    func, object, string,
} from 'prop-types';
// import APImage from '../../../../../assets/images/travelling.png';
// import { quesData } from './mockData/RightsidepartData';
import { connect } from 'react-redux';
// import {  chevRight, chevLeft } from '../../../../../assets/icons/IconList';
import OlympiadAnswerOption from './OlympiadAnswerOption';
import { renderText } from '../BrainGym/QueAnswer/textHelper';
import { addAllQueAnsAction, updateAllQueAnsAction } from '../../../../../stores/MyExam/MyExamAction';
import { checkDragDropSnunscramble, findKeyByValue } from '../BrainGym/QueAnswer/questionHelper';

const OlympiadQueAnsWrapper = ({
    questionInExamData, selectedQuestion,
    selectedOption, setSelectedOption,
    // allQuesAns,
    qIndex, description, options,
    // setEachTimeOn, updateQueAns,setSelectedQuestion,
    // eachcurrenttime,addQueAns,
    // setEachtime,
}) => {
    const questionObject = questionInExamData[selectedQuestion];
    // useEffect(() => {
    //     if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]
    //         && allQuesAns[selectedQuestion]?.solutionIndex !== -1) {
    //         setSelectedOption(allQuesAns[selectedQuestion]?.solutionIndex);
    //     } else {
    //         setSelectedOption([]);
    //     }
    // }, [selectedQuestion]);
    // useEffect(() => {
    //     if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]?.passageQuestions
    //         && allQuesAns[selectedQuestion]?.passageQuestions?.solutionIndex !== -1) {
    //         setSelectedOption(allQuesAns[selectedQuestion]?.passageQuestions?.solutionIndex);
    //     } else {
    //         setSelectedOption([]);
    //     }
    // }, [qIndex]);

    // console.log('TTTTTTTTTTTTT',  eachcurrenttime);
    // const handleQnA = () => {
    //     //  const que = allQuesAns.findIndex((obj) => obj.question === questionObject?._id);
    //     if (allQuesAns?.length > 0 && allQuesAns[selectedQuestion]) {
    //         const allQnA = allQuesAns;
    //         allQnA[selectedQuestion].solutionIndex = selectedOption?.length > 0 ?
    // selectedOption : [
    //             -1,
    //         ];
    //         allQnA[selectedQuestion].timeTakenInSecs = eachcurrenttime;
    //         updateQueAns(allQnA);
    //     } else {
    //         addQueAns({
    //             question: questionObject?._id,
    //             solutionIndex: selectedOption?.length > 0 ? selectedOption : [
    //                 -1,
    //             ],
    //             timeTakenInSecs: eachcurrenttime,
    //         });
    //     }
    // };

    const questionType = findKeyByValue(questionObject?.solutionType);
    if (checkDragDropSnunscramble(questionType)) return null;

    return    (
        <div>
            <div className="row">
                {/* {console.log('questionInExamData', questionInExamData, setSelectedQuestion)} */}
                <div className="col-12">

                    {findKeyByValue(questionObject?.solutionType) === 'passage'
                        ? (
                            <div>
                                <div className="question-box">
                                    <h4>Question - {selectedQuestion + 1}
                                        {findKeyByValue(questionObject?.solutionType)
                                            === 'passage' && qIndex > 0  ? `. ${qIndex}` : null}

                                    </h4>
                                    <h2> <span>{renderText(description)}</span></h2>
                                </div>
                                {/* <div className="question-box">
                                    <h4>Question -  {selectedQuestion + 1} {`. ${qIndex}`}
                                    </h4>
                                    <h2>
                                        <span>
                                            {renderText(questionObject
                                                ?.passageQuestions?.description)}
                                        </span>
                                    </h2>
                                </div> */}
                            </div>
                        )
                        :                     (
                            <div className="question-box">
                                <h4>Question - {selectedQuestion + 1}
                                </h4>
                                <h2> <span>{renderText(description)}</span></h2>
                            </div>
                        )}

                    <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTyleType">
                        {options?.map((item, ind) => ((item?.text !== '' || item?.image !== '')
                            &&  (
                                <OlympiadAnswerOption
                                    questionObject={questionObject}
                                    item={item}
                                    selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption}
                                    ind={ind}
                                />
                            )
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};
OlympiadQueAnsWrapper.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    selectedOption: string.isRequired,
    setSelectedOption: func.isRequired,
    // allQuesAns: array.isRequired,
    qIndex: string.isRequired,
    description: string.isRequired,
    options: array.isRequired,
    // updateQueAns: func.isRequired,
    // setSelectedQuestion: func.isRequired,
    // addQueAns: func.isRequired,
    // setEachTimeOn: func.isRequired,
    // eachcurrenttime: string.isRequired,
    // setEachtime: func.isRequired,
};
const mapStateToProps = (state) => ({
    allQuesAns: state.MyExam.allQuesAns,
});

const mapDispatchToProps = (dispatch) => ({
    updateQueAns: (data) => dispatch(updateAllQueAnsAction(data)),
    addQueAns: (data) => dispatch(addAllQueAnsAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OlympiadQueAnsWrapper);
