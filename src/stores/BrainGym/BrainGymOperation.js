import { fork, call, put, takeEvery } from "redux-saga/effects";
import * as actionType from "./BrainGymTypes";
import { brainGymService, questionsService } from "../../services";
import * as actionTypes from "./BrainGymTypes";

// const apiUrl = `https://jsonplaceholder.typicode.com/users`;
// function getApi() {
//   return fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',

//       }
//   }).then(response => response.json())

//     .catch((error) => {throw error})
// }

function* WorkerGetAllBrainGym(data) {
  console.log("enter in saga");
  try {
    const getAllBrainGymData = data?.payload;
    yield put({ type: actionType.SET_LOADING, payload: true });

    const object = { ...getAllBrainGymData?.obj };
    yield put({ type: actionTypes.SET_LOADING, payload: true });
    const response = yield brainGymService.create(object);

    if (response) {
      console.log(response, "ressssssssss");
      yield put({ type: actionTypes.SET_ALL_BRAIN_GYM, payload: response });
      yield put({ type: actionTypes.SET_LOADING, payload: false });
    }
  } catch (err) {
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* watcherGetAllBrainGym() {
  yield takeEvery(actionType.GET_ALL_BRAIN_GYM, WorkerGetAllBrainGym);
}

function* fetchAll() {
  yield fork(watcherGetAllBrainGym);
}
export default fetchAll();
