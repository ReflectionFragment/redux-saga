import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {CountReducer} from './CountReducer';
import {TasksReducer} from './TasksReducer';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {countWatcher} from "../saga/countSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        cash: CountReducer,
        customers: TasksReducer,
    }
);

export var store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWatcher)
