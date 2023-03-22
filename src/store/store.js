import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {CashReducer} from './CashReducer';
import {CustomersReducer} from './CustomersReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers(
    {
        cash: CashReducer,
        customers: CustomersReducer,

    }
);

export var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
