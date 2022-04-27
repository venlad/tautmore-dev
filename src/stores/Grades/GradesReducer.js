/* eslint-disable import/prefer-default-export */
export const selectFooterGradeReducer = (state = 'pre-kindergarten', action) => {
    switch (action.type) {
        case 'SELECT_FOOTER_LINK':
            return action.payload;
        default:
            return state;
    }
};
