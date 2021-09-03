import * as type from './BrainGymTypes'

export function getAllgym() {
    return {
      type: type.BRAIN_GYM_ALLGYM,
    }
}

export function masterBraingymid() {
  return {
    type: type.BRAIN_GYM_GETMASTERID,
  }
}

export function getQuestionbytag() {
  return {
    type: type.QUESTIONS_GET_QUESTION_BY_TAG,
  }
}
 
export function attemptQuestion(data) {
  return {
    type: type.QUESTIONS_ATTEMPT_QUESTION,
    payload: data,
  }
}

