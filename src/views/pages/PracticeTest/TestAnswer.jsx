import React from 'react';
import {
    shape, string, number, func,
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
    ansData: shape({
        id: string.isRequired,
        value: number.isRequired,
    }).isRequired,
    selectedAnswer: string.isRequired,
    handleSelectOption: func.isRequired,
    ansType: string.isRequired,
};

export default TestAnswer;
