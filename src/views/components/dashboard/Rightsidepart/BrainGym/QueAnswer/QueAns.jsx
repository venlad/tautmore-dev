import React from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';
import { chevRight } from '../../../../../../assets/icons/IconList';
import { checkIcon } from '../../../../../../assets/icons/IconList';
import ReactHtmlParser from 'react-html-parser';
import { attemptQuestionAction } from '../../../../../../stores/BrainGymOld/BrainGymAction';

const QueAns = ({ data, setEachTimeOn, eachcurrenttime, select, setSelect, questionInChest, chests, attemptQuestion, chestId, setViewBrain }) => {
    const selectAns = (ind) => {
        setSelect(ind);
    };

    console.log(chestId, 'chest id from attempt');

    const submitQuestion = () => {
        setEachTimeOn(false);
        const data = {
            chestId: chestId,
            questionId: questionInChest[0]._id,
            attemptedSolutionIndex: select,
            attemptedFillInTheBlankSolution: null,
            timeTaken: eachcurrenttime,
        };
        attemptQuestion(data);
        setViewBrain('true_false');
    };

    console.log(eachcurrenttime, 'eachcurrenttime');

    return (
        <div>
            <div className="question-box">
                <h4>Question - </h4>
                <p>{ReactHtmlParser(data?.description)}</p>
            </div>
            <div className="question-options-wrapper selectTileType">
                {data?.options.map((opt, ind) => (
                    <div className={`option-wrapper-tile-type d-flex align-items-center justify-content-between p-4 ${
                        ind === select ? 'true' : ''
                    }`}>
                        <button type="button" onClick={() => selectAns(ind)}>
                            <span>{ReactHtmlParser(opt?.text)}</span>
                            <div className="icon--check-wrapper d-flex align-items-center justify-content-center">
                                {checkIcon}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
            <div className="col-12">
                <button type="button" className={`submit-answer-button ${select !== '' ? 'active' : ''}`} disabled={select === ''} onClick={submitQuestion}>
                    <div className="button-wrapper d-flex align-items-center justify-content-between">
                        <span>Submit </span>
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">{chevRight}</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

QueAns.propTypes = {
    data: array.isRequired,
    select: array.isRequired,
    setSelect: func.isRequired,
    attemptQuestion: func.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
    chests: state.BrainGym.chests,
});

const mapDispatchToProps = (dispatch) => ({
    attemptQuestion: (data) => dispatch(attemptQuestionAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueAns);
