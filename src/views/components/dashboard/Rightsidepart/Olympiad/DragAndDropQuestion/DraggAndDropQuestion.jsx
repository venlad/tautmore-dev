import React from 'react';
import { array, func, number } from 'prop-types';
import DragAndDropAnswer from './DragAndDropAnswer';
// import DragAndDropSolution from './DragAndDropSolution';
import { findKeyByValue, checkDragDropSnunscramble } from '../../BrainGym/QueAnswer/questionHelper';

const DraggAndDropQuestion = ({
    questionInChest, setSelect, selectedOption, selectedQuestion,
}) => {
    const questionType = findKeyByValue(questionInChest?.solutionType);
    if (!checkDragDropSnunscramble(questionType)) return null;
    return (
        <div>
            <DragAndDropAnswer
                questionInChest={questionInChest}
                questionType={questionType}
                setSelect={setSelect}
                selectedOption={selectedOption}
                selectedQuestion={selectedQuestion}
            />
            {/* <DragAndDropSolution
                questionInChest={questionInChest}
            /> */}
        </div>
    );
};

DraggAndDropQuestion.propTypes = {
    questionInChest: array.isRequired,
    setSelect: func.isRequired,
    selectedOption: array.isRequired,
    selectedQuestion: number.isRequired,
};

export default DraggAndDropQuestion;
