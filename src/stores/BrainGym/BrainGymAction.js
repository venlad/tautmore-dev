import * as actionTypes from "./BrainGymTypes";

export const getAllBrainGym = (data) => {
  return {
    type: actionTypes.GET_ALL_BRAIN_GYM,
    payload: data,
  };
};

export function getAllgym() {
  return {
    type: actionTypes.BRAIN_GYM_ALLGYM,
  };
}

export function masterBraingymid() {
  return {
    type: actionTypes.BRAIN_GYM_GETMASTERID,
    actions: {},
  };
}

export function getQuestionbytag(data) {
  console.log(data, "action");
  return {
    type: actionTypes.GET_QUESTIONS_BY_TAG,
    actions: { data },
  };
}

export function attemptQuestion(data) {
  return {
    type: actionTypes.QUESTIONS_ATTEMPT_QUESTION,
    payload: data,
  };
}
