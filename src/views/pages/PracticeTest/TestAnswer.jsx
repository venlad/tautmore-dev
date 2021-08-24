import React from 'react';
import {
    string, func, array,
} from 'prop-types';
import AnswerOption from './AnswerOption';

const TestAnswer = ({
    ansData,
    selectedAnswer,
    handleSelectOption,
    ansType,
}) => (
    ansData?.map((item) => (
        <AnswerOption
            key={item?.id}
            item={item}
            ansType={ansType}
            selectAnswer={selectedAnswer}
            handleSelectOption={handleSelectOption}
        />
    )));

TestAnswer.propTypes = {
    ansData: array,
    selectedAnswer: string.isRequired,
    handleSelectOption: func.isRequired,
    ansType: string.isRequired,
};

TestAnswer.defaultProps = {
    selectedAnswer: '',
};

export default TestAnswer;
