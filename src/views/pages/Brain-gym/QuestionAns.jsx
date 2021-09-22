import React, { useRef }  from 'react';
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
    question,
    setEachTimeOn,
    eachcurrenttime,
    setEachtime,
}) => {
    const titleRef = useRef();
    const completeFromStep = () => {
        const detail = {
            time: eachcurrenttime,
            questiondetail: question,

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

        setEachTimeOn(false);
        setEachtime(0);

        const local = {
            question,
            timeminutesecond,
            counter,
        };
        localStorage.setItem('brain-gym-data', JSON.stringify(local));
    };

    return (
        <div>
            <div key={question?.description}>
                {
                    !question ? (
                        <QuestionSkeleton />
                    ) : (
                        <div className="question-box">
                            <h4>Question - {counter}</h4>
                            <p>{question?.description}</p>
                        </div>
                    )
                }
                {
                    question?.options && <span className="answer-title">Select your answer</span>
                }
                {
                    !question?.options ? (
                        <div className="loading-skeleton question-options-wrapper selectTileType"><button type="button" className="">Test</button><button type="button" className="">Test</button><button type="button" className="">Test</button><button type="button" className="">Test</button></div>
                    ) : (
                        <div className="question-options-wrapper selectTileType">
                            {question?.options?.map((data, ind) => (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                    titleRef={titleRef}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
            <div className="col-12">
                <button type="button" ref={titleRef} onClick={completeFromStep} className={`submit-answer-button ${select !== '' ? 'active' : ''}`} disabled={select === ''}>
                    <div className="button-wrapper d-flex align-items-center justify-content-between">
                        <span>Submit </span>
                        <div className="icon-wrapper d-flex align-items-center justify-content-center">{chevRight}</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    attempQue: (data) => dispatch(attemptQuestionAction(data)),
    getQuestionbytag: () => {
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
    question: string.isRequired,
    setEachTimeOn: bool.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: number.isRequired,
};

export default connect(null, mapDispatchToProps)(QuestionAns);
