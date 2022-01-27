import React from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';
import Close from '../../../../../../assets/images/shell-pop-Close.svg';
import wrong from '../../../../../../assets/images/wrong.png';
import right from '../../../../../../assets/images/right.png';
import { getQuestionInChestAction } from '../../../../../../stores/BrainGym/BrainGymAction';

const AnswerPopup = ({
    attemptQuestion, setViewBrain, chestId, getQuestionInChest,
}) => {
    const startNow = () => {
        getQuestionInChest({
            chestId,
        });
        setViewBrain('question');
    };

    return (
        <div className="shell-popup-main answer">
            <div className="svg-background-container">
                <div className="flex-items-details">
                    <button type="button" className="close-btn">
                        <img className="floating-cross" src={Close} alt="No Imag" />
                    </button>
                    { attemptQuestion?.message === 'Wrong Answer'
                && (
                    <div className="wrong-right">
                        <img src={wrong} alt="wrong" />
                        <div>
                            <h5>Oops!</h5>
                            <p>Wrong answer</p>
                        </div>
                    </div>
                )}

                    { attemptQuestion?.message === 'Correct Answer'
                && (
                    <div className="wrong-right">
                        <img src={right} alt="right" />
                        <div>
                            <h5>Awesome!</h5>
                            <p>You were right!</p>
                        </div>
                    </div>
                )}

                    <div className="buttons-container">
                        <button type="button" onClick={startNow}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AnswerPopup.propTypes = {
    attemptQuestion: array.isRequired,
    setViewBrain: func.isRequired,
    chestId: string.isRequired,
    getQuestionInChest: func.isRequired,
};

const mapStateToProps = (state) => ({
    attemptQuestion: state.BrainGym.attemptQuestion,
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionInChest: (data) => dispatch(getQuestionInChestAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPopup);
