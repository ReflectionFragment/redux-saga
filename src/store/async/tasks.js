import {addTaskBaseAction} from "../TasksReducer";

export const FetchTasks = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addTaskBaseAction(json)))
    }
}