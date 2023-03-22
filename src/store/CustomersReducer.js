const defaultState = {
    customers: [],
}
const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const CustomersReducer = (state=defaultState, action)=> {
    switch (action.type) {
        case ADD_CUSTOMERS:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
};

export const addCustomerAction = (payload)=>({type:ADD_CUSTOMERS, payload})
export const removeCustomerAction = (payload)=>({type:REMOVE_CUSTOMER, payload})
