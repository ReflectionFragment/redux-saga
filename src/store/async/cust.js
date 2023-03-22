import {addCustomerBaseAction} from "../CustomersReducer";

export const FetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addCustomerBaseAction(json)))
    }
}