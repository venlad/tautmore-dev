import React from 'react';
import {
    func, string, bool, number,
} from 'prop-types';
import { connect } from 'react-redux';
import AnswerOption from './AnswerOption';
import { chevRight } from '../../../assets/icons/IconList';
import QuestionSkeleton from '../../components/skeleton/QuestionSkeleton';
import { attemptQuestionAction, getQuestionbytagAction } from '../../../stores/BrainGym/BrainGymAction';

const QuestionAns = ({
    setOpen,
    select,
    setSelect,
    counter,
    setCounter,
    attempQue,
    timeminutesecond,
    ques,
    setTimeOn,
    step,
    chestonecoin,
    setchestoneCoin,
    chesttwocoin,
    setchesttwoCoin,
    chestthreecoin,
    setchestthreeCoin,
    chestfourcoin,
    setchestfourCoin,
    chestfivecoin,
    setchestfiveCoin,
}) => {
    const completeFromStep = () => {
        if (step === 0) {
            if (ques.solutionIndex[0] === select) {
                setchestoneCoin(chestonecoin + 1);
            }
        }
        if (step === 1) {
            if (ques.solutionIndex[0] === select) {
                setchesttwoCoin(chesttwocoin + 1);
            }
        }
        if (step === 2) {
            if (ques.solutionIndex[0] === select) {
                setchestthreeCoin(chestthreecoin + 1);
            }
        }
        if (step === 3) {
            if (ques.solutionIndex[0] === select) {
                setchestfourCoin(chestfourcoin + 1);
            }
        }
        if (step === 4) {
            if (ques.solutionIndex[0] === select) {
                setchestfiveCoin(chestfivecoin + 1);
            }
        }
        const detail = {
            time: timeminutesecond,
            questiondetail: ques,
        };
        attempQue(detail);
        setCounter(counter + 1);
        let val = '';
        for (let i = 0; i < 30; i += 5) {
            val = i;
            if (counter === val) {
                setCounter(counter);
                setOpen(true);
            } else {
                setSelect('');
            }
        }
        if (step < 4) {
            setTimeOn(true);
        } else {
            setTimeOn(false);
        }
    };

    return (
        <div>
            <div key={ques?.description}>
                {
                    !ques ? (
                        <QuestionSkeleton />
                    ) : (
                        <div className="question-box">
                            <h4>Question - {counter}</h4>
                            <p>{ques?.description}</p>
                        </div>
                    )
                }
                {
                    ques?.options && <span className="answer-title">Select your answer</span>
                }
                {
                    !ques?.options ? (
                        <div className="loading-skeleton question-options-wrapper selectTileType"><button type="button" className="">Test</button><button type="button" className="">Test</button><button type="button" className="">Test</button><button type="button" className="">Test</button></div>
                    ) : (
                        <div className="question-options-wrapper selectTileType">
                            {ques?.options?.map((data, ind) => (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            ))}
                        </div>
                    )
                }
            </div>

            <div className="col-12"><button type="button" onClick={completeFromStep} className={`submit-answer-button ${select !== '' ? 'active' : ''}`} disabled={select === ''}><div className="button-wrapper d-flex align-items-center justify-content-between"><span>Submit </span><div className="icon-wrapper d-flex align-items-center justify-content-center">{chevRight}</div></div></button></div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    attempQue: (data) => dispatch(attemptQuestionAction(data)),
    getQuestionbytag() {
        dispatch(getQuestionbytagAction());
    },
});

QuestionAns.propTypes = {
    setOpen: func.isRequired,
    select: string.isRequired,
    setSelect: func.isRequired,
    counter: string.isRequired,
    setCounter: func.isRequired,
    attempQue: func.isRequired,
    timeminutesecond: string.isRequired,
    ques: string.isRequired,
    setTimeOn: bool.isRequired,
    step: number.isRequired,
    chestonecoin: number.isRequired,
    setchestoneCoin: number.isRequired,
    chesttwocoin: number.isRequired,
    setchesttwoCoin: number.isRequired,
    chestthreecoin: number.isRequired,
    setchestthreeCoin: number.isRequired,
    chestfourcoin: number.isRequired,
    setchestfourCoin: number.isRequired,
    chestfivecoin: number.isRequired,
    setchestfiveCoin: number.isRequired,
};
export default connect(null, mapDispatchToProps)(QuestionAns);
