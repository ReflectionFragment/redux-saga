import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {CountReducer} from './reducers/CountReducer';
import {TasksReducer} from './reducers/TasksReducer';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {countWatcher} from "../saga/countSaga";
import {TestReducer} from "./reducers/TestReduser";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        cash: CountReducer,
        customers: TasksReducer,
        test: TestReducer,
    }
);

export var store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWatcher)
