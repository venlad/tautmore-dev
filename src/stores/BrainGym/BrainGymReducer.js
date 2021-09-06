import * as actionTypes from "./BrainGymTypes";

const initialState = {
  Allgym: [],
  Masterbraingymid: [],
  Questionbytag: [],
  attempQuestion: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BRAIN_GYM_ALLGYM:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.BRAIN_GYM_ALLGYM_UPDATED:
      return {
        ...state,
        loading: false,
        Allgym: action.allgym,
      };
    case actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID:
      console.log("action master");
      return {
        ...state,
        loading: false,
        Masterbraingymid: action.braingym_masterbrainid,
      };

    case actionTypes.UPDATE_QUESTION_BY_TAG:
      return {
        ...state,
        loading: false,
        Questionbytag: action.que_getquetag,
      };

    case actionTypes.UPDATE_ATTEMPT_QUESTION:
      return {
        ...state,
        loading: false,
        attempQuestion: action.attempt_que,
      };

    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
}
