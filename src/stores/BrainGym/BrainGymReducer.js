import * as actionTypes from './BrainGymTypes';

const initialState = {
    chests: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_START_CHEST:
            return {
                ...state,
                chests: action.payload,
            };
        default:
            return { ...state };
    }
}
