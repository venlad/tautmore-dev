const selectFooterGradeReducer = (state = 'Pre-Kindergarten', action) => {
    switch (action.type) {
        case 'SELECT_FOOTER_LINK':
            return action.payload;
        default:
            return state;
    }
};

export default selectFooterGradeReducer;
