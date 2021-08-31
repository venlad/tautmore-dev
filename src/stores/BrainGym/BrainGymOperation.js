import { fork,call, put, takeLatest } from 'redux-saga/effects'
import * as actionType from './BrainGymTypes'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
 
    .catch((error) => {throw error})
}

function* WorkerfetchUsers() {
    console.log('enter in saga')
   try {
      const users = yield call(getApi);
      console.log(users, 'response from api')
      yield put({type: actionType.GET_USERS_SUCCESS, users: users});
   } catch (e) {
      yield put({type: actionType.GET_USERS_FAILED, message: e.message});
   }
}

function* watcherUserSaga() {
   yield takeLatest(actionType.GET_USERS_REQUESTED, WorkerfetchUsers);
}

function* fetchAll(){
    yield fork(watcherUserSaga);
}
export default fetchAll();