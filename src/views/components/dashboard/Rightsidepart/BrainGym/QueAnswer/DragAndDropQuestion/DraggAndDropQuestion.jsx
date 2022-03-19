import React from 'react';
import { array, func } from 'prop-types';
import DragAndDropAnswer from './DragAndDropAnswer';
// import DragAndDropSolution from './DragAndDropSolution';
import { findKeyByValue, checkDragDropSnunscramble } from '../questionHelper';

const DraggAndDropQuestion = ({ questionInChest, setSelect }) => {
    const questionType = findKeyByValue(questionInChest?.solutionType);
    if (!checkDragDropSnunscramble(questionType)) return null;
    return (
        <div>
            <DragAndDropAnswer
                questionInChest={questionInChest}
                questionType={questionType}
                setSelect={setSelect}
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
};

export default DraggAndDropQuestion;
