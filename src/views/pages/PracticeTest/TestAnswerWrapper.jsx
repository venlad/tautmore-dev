import React from 'react';
import {
    string, func, array,
} from 'prop-types';
import TestAnswer from './TestAnswer';

const TestAnswerWrapper = ({
    ansData,
    selectedAnswer,
    handleSelectOption,
    ansType,
    quesType,
}) => {
    const renderAnswer = () => {
        let answer = null;
        switch (quesType) {
            case 'optionsType':
                answer = (
                    <TestAnswer
                        ansData={ansData}
                        ansType={ansType}
                        selectAnswer={selectedAnswer}
                        handleSelectOption={handleSelectOption}
                    />
                );
                break;
            case 'inputType':
                answer = (
                    <TestAnswer
                        ansData={ansData}
                        ansType={ansType}
                        selectAnswer={selectedAnswer}
                        handleSelectOption={handleSelectOption}
                    />
                );
                break;
            default:
                answer = (
                    <TestAnswer
                        ansData={ansData}
                        ansType={ansType}
                        selectAnswer={selectedAnswer}
                        handleSelectOption={handleSelectOption}
                    />
                );
        }
        return answer;
    };
    return (
        <div className="row">
            <div className="col-12 mt-4 mb-4">
                <span className="answer-title pt-4">Select your answer</span>
                <div className={`question-options-wrapper ${ansType}`}>
                    {renderAnswer()}
                </div>
            </div>
        </div>
    );
};

TestAnswerWrapper.propTypes = {
    ansData: array.isRequired,
    selectedAnswer: array.isRequired,
    handleSelectOption: func.isRequired,
    ansType: string.isRequired,
    quesType: string.isRequired,
};

export default TestAnswerWrapper;
