import React from 'react';
import {
    shape, string, number, func,
} from 'prop-types';
import AnswerOption from './AnswerOption';

const TestAnswer = ({
    ansData,
    selectedAnswer,
    handleClickAnswer,
    questionType,
}) => (
    <div className="row">
        <div className="col-12 mt-4 mb-4">
            <span className="answer-title pt-4">Select your answer</span>
            <div className="question-options-wrapper">
                {ansData?.map((item) => (
                    <AnswerOption
                        key={item?.id}
                        item={item}
                        questionType={questionType}
                        selectAnswer={selectedAnswer}
                        handleAnswerclick={handleClickAnswer}
                    />
                ))}
            </div>
        </div>
    </div>
);

TestAnswer.propTypes = {
    ansData: shape({
        id: string.isRequired,
        value: number.isRequired,
    }).isRequired,
    selectedAnswer: string.isRequired,
    handleClickAnswer: func.isRequired,
    questionType: string.isRequired,
};

export default TestAnswer;
