const intialState = {
    grades: null,
    subjects: null,
    chapters: null,
    navbar: null,
    footer: null,
    home: null,
    parent: null,
    teacher: null,
};

const fetchReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_GRADES':
            localStorage.setItem('grades', JSON.stringify(action.payload));
            return { ...state, grades: action.payload };
        case 'FETCH_SUBJECTS':
            localStorage.setItem('subjects', JSON.stringify(action.payload));
            return { ...state, subjects: action.payload };
        case 'FETCH_CHAPTERS':
            localStorage.setItem('chapters', JSON.stringify(action.payload));
            return { ...state, chapters: action.payload };
        case 'FETCH_NAVBAR':
            localStorage.setItem('navbar', JSON.stringify(action.payload));
            return { ...state, navbar: action.payload };
        case 'FETCH_FOOTER':
            localStorage.setItem('footer', JSON.stringify(action.payload));
            return { ...state, footer: action.payload };
        case 'FETCH_HOME':
            localStorage.setItem('home', JSON.stringify(action.payload));
            return { ...state, home: action.payload };
        case 'FETCH_PARENT':
            localStorage.setItem('parent', JSON.stringify(action.payload));
            return { ...state, parent: action.payload };
        case 'FETCH_TEACHER':
            localStorage.setItem('teacher', JSON.stringify(action.payload));
            return { ...state, teacher: action.payload };
        default:
            return state;
    }
};

export default fetchReducer;
