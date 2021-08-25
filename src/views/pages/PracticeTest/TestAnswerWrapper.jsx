import React from 'react';
import {
    string, func, array,
} from 'prop-types';
import AnswerOption from './AnswerOption';

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
            case 'inputType':
                answer = (
                    <AnswerOption
                        ansData={ansData}
                        ansType={ansType}
                        selectAnswer={selectedAnswer}
                        handleSelectOption={handleSelectOption}
                    />
                );
                break;
            case 'optionsType':
                answer = (
                    ansData?.map((item) => (
                        <AnswerOption
                            key={item?.id}
                            item={item}
                            ansType={ansType}
                            selectAnswer={selectedAnswer}
                            handleSelectOption={handleSelectOption}
                        />
                    )));
                break;
            default:
                answer = (
                    <AnswerOption
                        item={ansData}
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
