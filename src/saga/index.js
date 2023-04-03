import {all} from 'redux-saga/effects'
import {countWatcher} from "./countSaga";
import {nameTaskWatcher} from "./nameSaga";

export function* rootWatcher(){
    yield all([countWatcher(),
        nameTaskWatcher()])
}
