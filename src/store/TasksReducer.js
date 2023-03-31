const defaultState = {
    customers: []
}
const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_CUSTOMERS_BASE = 'ADD_CUSTOMERS_BASE'

export const TasksReducer = (state=defaultState, action)=> {
    switch (action.type) {
        case ADD_CUSTOMERS:
            return {...state, customers: [action.payload, ...state.customers, ]}
        case ADD_CUSTOMERS_BASE:
            return {...state, customers: [...action.payload, ...state.customers, ]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
};

export const addTaskAction = (payload)=>({type:ADD_CUSTOMERS, payload})
export const addTaskBaseAction = (payload)=>({type:ADD_CUSTOMERS_BASE, payload})
export const removeTaskAction = (payload)=>({type:REMOVE_CUSTOMER, payload})
