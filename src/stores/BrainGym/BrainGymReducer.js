import * as type from './BrainGymTypes'

const initialState = {
    Allgym: [],
    Masterbraingymid: [],
    Questionbytag: [],
    attempQuestion: [],
    loading: false,
    error: null,
}
  
  export default function BrainGym(state = initialState, action) {
    switch (action.type) {
      case type.BRAIN_GYM_ALLGYM:
        return {
          ...state,
          loading: true,
        }
      case type.BRAIN_GYM_ALLGYM_UPDATED:
        return {
          ...state,
          loading: false,
          Allgym: action.allgym
        }

      case type.BRAIN_GYM_GETMASTERID:
        return {
          ...state,
          loading: true,
        }
      case type.BRAIN_GYM_GETMASTERID_UPDATED:
        return {
          ...state,
          loading: false,
          Masterbraingymid: action.braingym_masterbrainid
        }

      case type.QUESTIONS_GET_QUESTION_BY_TAG:
          return {
            ...state,
            loading: true,
          }
      case type.QUESTIONS_GET_QUESTION_BY_TAG_UPDATED:
          return {
            ...state,
            loading: false,
            Questionbytag: action.que_getquetag
          }

      case type.QUESTIONS_ATTEMPT_QUESTION:
            return {
              ...state,
              loading: true,
            }
      case type.QUESTIONS_ATTEMPT_QUESTION_UPDATED:
            return {
              ...state,
              loading: false,
              attempQuestion: action.attempt_que
            }

      case type.GET_USERS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
  }