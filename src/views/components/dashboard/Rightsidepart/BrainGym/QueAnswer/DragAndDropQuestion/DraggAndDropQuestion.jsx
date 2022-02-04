import React from 'react';
import { array } from 'prop-types';
import DragAndDropAnswer from './DragAndDropAnswer';
// import DragAndDropSolution from './DragAndDropSolution';
import { findKeyByValue, checkDragDropSnunscramble } from '../questionHelper';

const DraggAndDropQuestion = ({ questionInChest }) => {
    const questionType = findKeyByValue(questionInChest?.solutionType);
    if (!checkDragDropSnunscramble(questionType)) return null;

    return (
        <div>
            <DragAndDropAnswer
                questionInChest={questionInChest}
                questionType={questionType}
            />
            {/* <DragAndDropSolution
                questionInChest={questionInChest}
            /> */}
        </div>
    );
};

DraggAndDropQuestion.propTypes = {
    questionInChest: array.isRequired,
};

export default DraggAndDropQuestion;
