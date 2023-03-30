import {put, takeEvery} from 'redux-saga/effects'

const delay = (ms) => { new Promise(res=> setTimeout(ms, res))

}
function* incrementWorker () {
    yield delay(1000)
    yield put(incrementCreator())
}
function* decrementWorker () {

}

function* countWatcher(){
    takeEvery()
}