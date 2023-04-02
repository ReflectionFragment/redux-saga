import { put, takeEvery} from 'redux-saga/effects'
import {
    ASYNC_DECREMENT,
    ASYNC_INCREMENT,
    asyncDecrementCreator, asyncIncrementCreator,
    // asyncIncrementCreator,
    // incrementCreator,
} from "../store/reducers/CountReducer";

const delay = (ms) =>  new Promise(res=> setTimeout(res, ms))


function* incrementWorker () {
    yield delay(1)
    yield put(asyncIncrementCreator())
}
function* decrementWorker () {
    yield delay(1000)
    yield put(asyncDecrementCreator())
}

export function* countWatcher(){
   yield takeEvery(ASYNC_INCREMENT, incrementWorker)
   yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}