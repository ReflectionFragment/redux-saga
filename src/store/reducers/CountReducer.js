const defaultState = {
    cash: 0,
}

export const ADD_COUNT = 'ADD_COUNT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';
export const GET_CASH = 'GET_CASH';

export const CountReducer = (state=defaultState, action)=> {
    switch (action.type) {
        case 'ADD_COUNT':
            return {...state, cash: state.cash - 1}
        // case 'ASYNC_INCREMENT':
        //     return {...state, cash: state.cash + 10}
        // case 'ASYNC_DECREMENT':
        //     return {...state, cash: state.cash - 10}
        case 'GET_CASH':
            return {...state, cash: state.cash + 1}
        default:
            return state;
    }
};

export const getCash = () => ({type:GET_CASH});
export const incrementCreator = () => ({type:ADD_COUNT});
export const asyncIncrementCreator = () => ({type:ASYNC_INCREMENT});
export const asyncDecrementCreator = () => ({type:ASYNC_DECREMENT});