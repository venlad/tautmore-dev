import { all } from 'redux-saga/effects'
import userSaga from '../BrainGym/BrainGymOperation'

export default function* rootSaga() {
  yield all([
    userSaga,
  ])
}