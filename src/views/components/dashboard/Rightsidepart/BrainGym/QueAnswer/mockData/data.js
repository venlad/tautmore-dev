import { v4 as uuid } from 'uuid';

export const questionTypesData = {
    multiscalerating: '1',
    'statement-and-support': '2',
    'drag-and-drop': '3',
    'two-columns-option': '4',
    'degrees-of-change-from-a-study': '5',
    'open-ended-questions': '6',
    passage: '7',
    'error-findings': '8',
    multi: '9',
    'match-the-following': '10',
    'selecting-the-word-sentence': '11',
    'scrambled-and-unscrambled': '12',
};

export const difficultyLevelData = ['1', '2', '3', '4', '5'];

export const difficultyTypeData = ['low', 'medium', 'high'];

export const examTypeData = ['brain-gym', 'exams', 'assignment'];

export const questioTypesRawData = [
    {
        id: uuid(),
        name: 'Multiscalerating',
        value: 'multiscalerating',
    },
    {
        id: uuid(),
        name: ' Statement and support',
        value: 'statement-and-support',
    },
    {
        id: uuid(),
        name: 'Drag and drop',
        value: 'drag-and-drop',
    },
    {
        id: uuid(),
        name: 'Two columns option',
        value: 'two-columns-option',
    },
    {
        id: uuid(),
        name: 'Open-ended questions',
        value: 'open-ended-questions',
    },
    {
        id: uuid(),
        name: 'Passage',
        value: 'passage',
    },
    {
        id: uuid(),
        name: 'Error findings',
        value: 'error-findings',
    },
    {
        id: uuid(),
        name: 'Multiple',
        value: 'multi',
    },
    {
        id: uuid(),
        name: 'Match the following',
        value: 'match-the-following',
    },
    {
        id: uuid(),
        name: 'Selecting the word/sentence',
        value: 'selecting-the-word-sentence',
    },
    {
        id: uuid(),
        name: ' Scrambled & Unscrambled',
        value: 'scrambled-and-unscrambled',
    },
];

export const defaultOption = () => {
    const option = [];
    for (let i = 0; i < 4; i += 1) {
        const optionData = {
            id: uuid(),
            index: i,
            name: 'option 1',
            text: '',
            image: '',
            value: '',
            error: '',
            checked: false,
            solutionIdxError: '',
            statementImage: '',
            statementText: '',
        };
        option.push(optionData);
    }
    return option;
};
export default {};
