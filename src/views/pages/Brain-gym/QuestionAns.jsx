import React, { useRef, useEffect }  from 'react';
import {
    func, string, bool, number, object,
} from 'prop-types';
import { connect } from 'react-redux';
import AnswerOption from './AnswerOption';
import { chevRight } from '../../../assets/icons/IconList';
import QuestionSkeleton from '../../components/skeleton/QuestionSkeleton';
import { attemptQuestionAction, getQuestionbytagAction } from '../../../stores/BrainGym/BrainGymAction';

const QuestionAns = ({
    select,
    setSelect,
    counter,
    attempQue,
    timeminutesecond,
    questionByTag,
    setEachTimeOn,
    eachcurrenttime,
    setEachtime,
    getQuestionbytag,
    chestData,
    quesCounter,
    braingym_id,
}) => {
    useEffect(() => {
        if (chestData?._id) {
            getQuestionbytag({ difficulty: chestData.difficulty });
        }
    }, [getQuestionbytag, chestData]);

    const question = questionByTag?.[0];
    const titleRef = useRef();
    const completeFromStep = () => {
        const detail = {
            time: eachcurrenttime,
            questiondetail: question,
            selectoption: select,
        };

        setSelect('');
        attempQue(detail);
        setEachTimeOn(false);
        setEachtime(0);

        const local = {
            question,
            timeminutesecond,
            counter,
            braingym_id,
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
                            <h4>Question - {quesCounter + 1}</h4>
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

const mapStateToProps = (state) => ({
    chestData: state.BrainGym.chestData,
    braingym_id: state.BrainGym.masterBrainGym._id,
    quesCounter: state.BrainGym.queCounter,
    questionByTag: state.BrainGym.questionByTag,
});

const mapDispatchToProps = (dispatch) => ({
    attempQue: (data) => dispatch(attemptQuestionAction(data)),
    getQuestionbytag: (data) => dispatch(getQuestionbytagAction(data)),
});

QuestionAns.propTypes = {
    braingym_id: string.isRequired,
    quesCounter: number.isRequired,
    chestData: object.isRequired,
    select: string.isRequired,
    setSelect: func.isRequired,
    counter: string.isRequired,
    attempQue: func.isRequired,
    timeminutesecond: string.isRequired,
    questionByTag: string.isRequired,
    getQuestionbytag: func.isRequired,
    setEachTimeOn: bool.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAns);
