import React from 'react';
import AnswerOption from './AnswerOption';
import {chestone, chesttwo, chestthree, chestfour, chestfive} from './mockData/queansData';
import { func, number } from 'prop-types';
import { chevRight } from '../../../assets/icons/IconList';

const QuestionAns = ({setOpen, step, select, setSelect}) => {
    

    const completeFromStep = () => {
        setOpen(true);
    };
    return (
        <div>
        {
            step === 0 && 
            (chestone.map((data) => (
                <div key={data.question}>
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <p>{data.question}</p>
                </div>
                <span className="answer-title">Select your answer</span>
                    <div className="question-options-wrapper selectTileType">
                        {data?.answer?.map((data, ind) => {
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
            step === 1 && 
            (chesttwo.map((data) => (
                <div key={data.question}>
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <p>{data.question}</p>
                </div>
                    <div className="question-options-wrapper selectTileType">
                        {data?.answer?.map((data, ind) => {
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
            (chestthree.map((data) => (
                <div key={data.question}>
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <p>{data.question}</p>
                </div>
                    <div className="question-options-wrapper selectTileType">
                        {data?.answer?.map((data, ind) => {
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
            (chestfour.map((data) => (
                <div key={data.question}>
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <p>{data.question}</p>
                </div>
                    <div className="question-options-wrapper selectTileType">
                        {data?.answer?.map((data, ind) => {
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
            (chestfive.map((data) => (
                <div key={data.question}>
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <p>{data.question}</p>
                </div>
                    <div className="question-options-wrapper selectTileType">
                        {data?.answer?.map((data, ind) => {
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

export default QuestionAns;
