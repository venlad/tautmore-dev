import * as type from './BrainGymTypes'

export function getAllgym() {
    return {
      type: type.BRAIN_GYM_ALLGYM,
    }
}

export function masterBraingymid() {
  return {
    type: type.BRAIN_GYM_GETMASTERID,
    actions: {}
  }
}

export function getQuestionbytag(data) {
  console.log(data, 'action')
  return {
    type: type.GET_QUESTIONS_BY_TAG,
    actions: {data}
  }
}
 
export function attemptQuestion(data) {
  return {
    type: type.QUESTIONS_ATTEMPT_QUESTION,
    payload: data,
  }
}

