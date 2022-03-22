const intialState = {
    topic: null,
    subTopic: null,
    chapter: null,
};

const selectConceptReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SELECT_CONCEPT':
            localStorage.setItem('subTopic', JSON.stringify(action.payload));
            return { ...state, subTopic: action.payload };
        case 'SELECT_TOPIC':
            localStorage.setItem('topic', JSON.stringify(action.payload));
            return { ...state, topic: action.payload };
        case 'SELECT_CHAPTER':
            localStorage.setItem('chapter', JSON.stringify(action.payload));
            return { ...state, chapter: action.payload };
        default:
            return state;
    }
};

export default selectConceptReducer;
