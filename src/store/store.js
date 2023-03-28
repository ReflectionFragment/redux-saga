import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {CashReducer} from './CashReducer';
import {TasksReducer} from './TasksReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers(
    {
        cash: CashReducer,
        customers: TasksReducer,

    }
);

export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
