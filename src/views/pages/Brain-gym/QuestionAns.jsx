import React from 'react';
import AnswerOption from './AnswerOption';
//import {chestone, chesttwo, chestthree, chestfour, chestfive} from './mockData/queansData';
import { func, number } from 'prop-types';
import { chevRight } from '../../../assets/icons/IconList';
import { connect } from 'react-redux';
import { attemptQuestion } from '../../../stores/BrainGym/BrainGymAction';
import { getQuestionbytag } from '../../../stores/BrainGym/BrainGymAction';

const QuestionAns = ({setOpen, step, select, setSelect, Questionbytag, counter, setCounter, attempQue, time, timeminutesecond, ques, getQuestionbytag}) => {
    
      
    const completeFromStep = () => {

        const detail = {
            time: timeminutesecond,
            questiondetail: ques,
        };
        attempQue(detail);
        // getQuestionbytag();
       
        setCounter(counter + 1);

        let val= '';

        for (let i = 0; i < 30; i+=5) {
             val = i;
             console.log(val, 'val');
             if (counter === val){
                setCounter(counter);
                setOpen(true);
             }
             else {
                setSelect('');
            }
        }
    };

    
    return (
        <div>
        {
            step === 0 && 
            // (Questionbytag?.filter((item, index) => index === counter).map((data, ind) => (
                <div key={ques?.description}>
                <div className="question-box">
                    <h4>Question - {counter}</h4>
                    <p>{ques?.description}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {ques?.options?.map((data, ind) => {
                            return (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            );
                        })}
                    </div>
                </div>
            // )))
        }

        {
            step === 1 && 
            (Questionbytag?.filter((item, index) => index === counter ).map((data, ind) => (
                <div key={data._id}>
                <div className="question-box">
                    <h4>Question - {counter}</h4>
                    <p>{data.description}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {data?.options?.map((data, ind) => {
                            return (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            );
                        })}
                    </div>
                </div>
            )))
        }

        {
            step === 2 && 
            (Questionbytag?.filter((item, index) => index === counter).map((data, ind) => (
                <div key={data._id}>
                <div className="question-box">
                    <h4>Question - {counter}</h4>
                    <p>{data.description}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {data?.options?.map((data, ind) => {
                            return (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            );
                        })}
                    </div>
                </div>
            )))
        }

        {
            step === 3 && 
            (Questionbytag?.filter((item, index) => index === counter).map((data, ind) => (
                <div key={data._id}>
                <div className="question-box">
                    <h4>Question - {counter}</h4>
                    <p>{data.description}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {data?.options?.map((data, ind) => {
                            return (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            );
                        })}
                    </div>
                </div>
            )))
        }

        {
            step === 4 && 
            (Questionbytag?.filter((item, index) => index === counter).map((data, ind) => (
                <div key={data._id}>
                <div className="question-box">
                    <h4>Question - {counter}</h4>
                    <p>{data.description}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {data?.options?.map((data, ind) => {
                            return (
                                <AnswerOption
                                    data={data}
                                    ind={ind}
                                    selectedOption={select}
                                    onChange={setSelect}
                                    key={data}
                                />
                            );
                        })}
                    </div>
                </div>
            )))
        }

            <div className="col-12"><button type="button" onClick={completeFromStep} className={`submit-answer-button ${select !== '' ? 'active' : ''}`} disabled={select === ''}><div className="button-wrapper d-flex align-items-center justify-content-between"><span>Submit </span><div className="icon-wrapper d-flex align-items-center justify-content-center">{chevRight}</div></div></button></div>
        </div>
    )
};

QuestionAns.propTypes = {
    setOpen: func.isRequired,
    step: number.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
    attempQue: (data) => dispatch(attemptQuestion(data)),
    getQuestionbytag:function(){
        dispatch(getQuestionbytag());
    }
});

export default connect(null, mapDispatchToProps)(QuestionAns);
