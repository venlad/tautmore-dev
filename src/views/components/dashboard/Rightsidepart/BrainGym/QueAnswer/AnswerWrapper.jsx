import React from 'react';
import { array, func, string } from 'prop-types';
import { checkDragDropSnunscramble, findKeyByValue } from './questionHelper';
import AnswerOption from './AnswerOption';
import TestQuestion from './TestQuestion';

const AnswerWrapper = ({
    data, showOptions, setSelect, select, options, description, qIndex,
}) => {
    console.log(options, 'options from answer wrapper');
    const questionType = findKeyByValue(data?.solutionType);
    if (checkDragDropSnunscramble(questionType)) return null;
    return (
        <>
            <TestQuestion description={description} qIndex={qIndex} />
            { showOptions
        && (
            <div className="question-options-wrapper selectTyleType">
                {options?.map((item, ind) => (
                    <AnswerOption
                        questionInChest={data}
                        item={item}
                        setSelect={setSelect}
                        ind={ind}
                        select={select}
                        options={options}
                    />
                ))}
            </div>
        )}
        </>
    );
};

AnswerWrapper.propTypes = {
    data: array.isRequired,
    showOptions: func.isRequired,
    setSelect: func.isRequired,
    select: string.isRequired,
    options: array.isRequired,
    description: string.isRequired,
    qIndex: string.isRequired,
};

export default AnswerWrapper;
