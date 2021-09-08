import { fork, put, takeLatest, select, call } from "redux-saga/effects";
import * as actionTypes from "./BrainGymTypes";
import { brainGymServices, questionsServices } from "../../services";
import { getQuestionbytag } from "./BrainGymAction";

function* WorkerGetMasterBrainGymById() {
  const state = yield select();
  let braingym_masterbrainid = state.BrainGym.Allgym.gyms[0]._id;
  yield put({type: actionTypes.SET_LOADING, payload: true})
  const response = yield brainGymServices.getMasterBrainGymById({
    chest_id: braingym_masterbrainid,
  });
  yield put({
    type: actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID,
    braingym_masterbrainid: response,
  });
  yield put({type: actionTypes.SET_LOADING, payload: false})
}

function* workerGetQuestionsByTag(data) {
  const masterbrainstate = yield select();
  console.log(data, "ss");
  let difficulty = data.actions.difficulty;
  let student_id = masterbrainstate.BrainGym.Masterbraingymid?.gym?.student;
  let chapter = masterbrainstate.BrainGym.Masterbraingymid?.gym?.chapter[1];

  const reqData = {
    difficulty: difficulty,
    student_id: student_id,
    chapter: chapter,
  };
  yield put({type: actionTypes.SET_LOADING, payload: true})
  const response = yield questionsServices.getQuestionsByDifficultTag(reqData);

  console.log(response);
  yield put({
    type: actionTypes.UPDATE_QUESTION_BY_TAG,
    que_getquetag: response,
  });
  yield put({type: actionTypes.SET_LOADING, payload: false})
}

function* workerAttemptQuestion(gymData) {
  const state = yield select();
  const brainGym = state.BrainGym;
  const data = gymData.payload;

  const reqData = {
    solution_index: data?.questiondetail.solutionIndex[0],
    time_to_solve: 24,
    question_id: data?.questiondetail._id,
    student_id: brainGym?.Allgym.gyms[0].student,
    chest_id: brainGym?.Masterbraingymid.gym.chest[0]._id,
  };

  console.log(reqData, "attempt");
  yield put({type: actionTypes.SET_LOADING, payload: true})
  const attemptresponse = yield questionsServices.attemptQuestion(reqData);

  if (attemptresponse) {
    console.log(attemptresponse?.nextTag, "res a");
    // yield call(getQuestionbytag, { difficulty: attemptresponse?.nextTag });4
    yield put({
      type: actionTypes.GET_QUESTIONS_BY_TAG,
      actions: { difficulty: attemptresponse?.nextTag },
    });
  }
  yield put({
    type: actionTypes.UPDATE_ATTEMPT_QUESTION,
    attempt_que: attemptresponse,
  });
  //yield put({type: actionTypes.SET_LOADING, payload: false})
}

function* workerGetAllBrainGym() {
  try {
    yield put({type: actionTypes.SET_LOADING, payload: true})
    const allgym = yield brainGymServices.getAllBrainGym();
    yield put({ type: actionTypes.BRAIN_GYM_ALLGYM_UPDATED, allgym: allgym });
    yield put({type: actionTypes.SET_LOADING, payload: false})
  } catch (e) {
    yield put({ type: actionTypes.GET_USERS_FAILED, message: e.message });
    yield put({type: actionTypes.SET_LOADING, payload: false})
  }
}

function* watcherBrainGym() {
  yield takeLatest(actionTypes.GET_ALL_BRAIN_GYM, workerGetAllBrainGym);
  yield takeLatest(
    actionTypes.GET_MASTER_BRAIN_GYM_BY_ID,
    WorkerGetMasterBrainGymById
  );
  yield takeLatest(actionTypes.GET_QUESTIONS_BY_TAG, workerGetQuestionsByTag);
  yield takeLatest(actionTypes.ATTEMPT_QUESTION, workerAttemptQuestion);
}

function* fetchAll() {
  yield fork(watcherBrainGym);
}
export default fetchAll();
