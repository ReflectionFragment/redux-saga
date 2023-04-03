import {put, call, takeEvery} from 'redux-saga/effects';
import { addTaskBaseCreator} from "../store/reducers/TasksReducer";


const featchNameFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchNameWorker () {
const data = yield call(featchNameFromApi)
const json = yield call(()=>new Promise(res=>res(data.json())))
yield put(addTaskBaseCreator(json))
}


export function* nameTaskWatcher() {
   yield takeEvery ("ADD_TUSK", fetchNameWorker )
}