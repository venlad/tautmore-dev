import { fork,call, put, takeLatest, select } from 'redux-saga/effects'
import * as actionType from './BrainGymTypes'
import { getQuestionbytag } from './BrainGymAction';

const allgymapiurl = `http://localhost:3000/local/api/brainGym/getAllBrainGym`;
function getAllgymapi() {
  return fetch(allgymapiurl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
 
    .catch((error) => {throw error})
}

const masterbrainidurl = `http://localhost:3000/local/api/brainGym/getMasterBrainGymById`;

function* getMasterbrainid() {
      const state = yield select();
      let braingym_masterbrainid = state.BrainGym.Allgym.gyms[0]._id;
            const response = yield  fetch(masterbrainidurl,{
                        method: 'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({"chest_id":braingym_masterbrainid}),
                    })
                        const data = yield response.json()
                        yield put({type: actionType.BRAIN_GYM_GETMASTERID_UPDATED, braingym_masterbrainid: data});
}

const getquesttagurl = `http://localhost:3000/local/api/questions/getQuestionsByDifficultTag/`;

function* getQuestionbytagApi() {
    const masterbrainstate = yield select();
    console.log(masterbrainstate, 'ss')
    let difficulty =  masterbrainstate.BrainGym.attempQuestion.nextTag ? (masterbrainstate.BrainGym.attempQuestion.nextTag ) : (masterbrainstate.BrainGym.Masterbraingymid.gym.difficulty);  
    let student_id = masterbrainstate.BrainGym.Masterbraingymid.gym.student;
    let chapter = masterbrainstate.BrainGym.Masterbraingymid.gym.chapter[0];

    console.log(difficulty, 'difficulty');
    
    const queresponse = yield  fetch(getquesttagurl,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({"difficulty":difficulty, "student_id":student_id, "chapter":chapter }),
    })
        const quedata = yield queresponse.json()
        yield put({type: actionType.QUESTIONS_GET_QUESTION_BY_TAG_UPDATED, que_getquetag: quedata});
}

const attemptqueurl = `http://localhost:3000/local/api/questions/attemptQuestion`;

function* getAttemptquestion(data) {
   
    const state = yield select();
    const chestid = state.BrainGym.Masterbraingymid.gym.chest[0]._id;
    const studentid = state.BrainGym.Allgym.gyms[0].student;
    const solutionind = data.payload.questiondetail.solutionIndex[0];
    const timetosolve = data.payload.time;
    const questionid = data.payload.questiondetail._id;

    const attemptresponse = yield  fetch(attemptqueurl,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({"solution_index":solutionind, "time_to_solve":timetosolve, "question_id":questionid, "student_id":studentid, "chest_id":chestid }),
    })
        const attemptdata = yield attemptresponse.json()
        yield put({ type: actionType.QUESTIONS_GET_QUESTION_BY_TAG})
        yield put({type: actionType.QUESTIONS_ATTEMPT_QUESTION_UPDATED, attempt_que: attemptdata});
}


function* workerfetchUsers() {
   
   try {
      const allgym = yield call(getAllgymapi);
      yield put({type: actionType.BRAIN_GYM_ALLGYM_UPDATED, allgym: allgym});
   } catch (e) {
      yield put({type: actionType.GET_USERS_FAILED, message: e.message});
   }
}

function* watcherUserSaga() {
   yield takeLatest(actionType.BRAIN_GYM_ALLGYM, workerfetchUsers);
   yield takeLatest(actionType.BRAIN_GYM_GETMASTERID, getMasterbrainid);
   yield takeLatest(actionType.QUESTIONS_GET_QUESTION_BY_TAG, getQuestionbytagApi);
   yield takeLatest(actionType.QUESTIONS_ATTEMPT_QUESTION, getAttemptquestion);
}

function* fetchAll(){
    yield fork(watcherUserSaga);
}
export default fetchAll();