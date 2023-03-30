const defaultState = {
    cash: 0,
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';


export const CashReducer = (state=defaultState, action)=> {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash - 1}
        case 'GET_CASH':
            return {...state, cash: state.cash + 1}
        default:
            return state;
    }
};

export const getCash = () => ({type:GET_CASH});
export const addCash = () => ({type:ADD_CASH});