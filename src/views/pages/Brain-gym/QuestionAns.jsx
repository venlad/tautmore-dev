import React from 'react';
import {
    func, string,
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
}) => {
    const completeFromStep = () => {
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
};
export default connect(null, mapDispatchToProps)(QuestionAns);
