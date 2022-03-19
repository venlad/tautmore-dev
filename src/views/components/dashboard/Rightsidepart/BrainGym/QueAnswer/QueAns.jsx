import React from 'react';
import { connect } from 'react-redux';
import {
    array, func, string, object,
} from 'prop-types';
import { chevRight } from '../../../../../../assets/icons/IconList';
import { attemptQuestionAction } from '../../../../../../stores/BrainGymOld/BrainGymAction';
import DraggAndDropQuestion from './DragAndDropQuestion/DraggAndDropQuestion';
import { findKeyByValue } from './questionHelper';
import AnswerWrapper from './AnswerWrapper';

const QueAns = ({
    data,
    setEachTimeOn,
    eachcurrenttime,
    select,
    setSelect,
    questionInChest,
    attemptQuestion,
    chestId,
    setViewBrain,
    setEachtime,
}) => {
    const submitQuestion = () => {
        setEachTimeOn(false);
        const val = {
            chestId: chestId._id,
            questionId: questionInChest?.data[0]?._id,
            attemptedSolutionIndex: select,
            attemptedFillInTheBlankSolution: null,
            timeTaken: eachcurrenttime,
        };
        attemptQuestion(val);
        setViewBrain('true_false');
        setEachtime(0);
        setSelect([]);
    };

    // console.log(questionInChest, 'questionInChest from QueAns');

    return (
        <div>
            {/* <div className="question-box">
                <h4>Question title:</h4>
                <h2>{renderText(data?.description)}</h2>
            </div> */}

            <DraggAndDropQuestion
                questionInChest={data}
                setSelect={setSelect}
            />

            <AnswerWrapper
                data={data}
                options={data?.options}
                showOptions={findKeyByValue(data?.solutionType) !== 'passage'}
                setSelect={setSelect}
                select={select}
                description={data?.description}
            />
            {findKeyByValue(data?.solutionType) === 'passage'
        && data?.passageQuestions?.map((item, i) => (
            <AnswerWrapper
                data={item}
                qIndex={i + 1}
                description={item?.description}
                options={item?.options}
                setSelect={setSelect}
                select={select}
                showOptions
            />
        ))}
            <div className="col-12">
                <button
                    type="button"
                    className={`submit-answer-button ${select !== '' ? 'active' : ''}`}
                    disabled={select === ''}
                    onClick={submitQuestion}
                >
                    <div className="button-wrapper d-flex align-items-center justify-content-between">
                        <span>Submit </span>
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">
                            {chevRight}
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

QueAns.propTypes = {
    data: array.isRequired,
    select: string.isRequired,
    setSelect: func.isRequired,
    attemptQuestion: func.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
    questionInChest: object.isRequired,
    setEachtime: func.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
});

const mapDispatchToProps = (dispatch) => ({
    attemptQuestion: (data) => dispatch(attemptQuestionAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueAns);
