import React from "react";
import all from '../../assets/icons/all.svg'
import List from "../List";
import './Todo.scss';
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import {FetchTasks} from "../../store/async/tasks";
import {addTaskAction} from "../../store/TasksReducer";
import {Tasks} from "../List/Tasks";

const Todo = () => {
    const cash = useSelector(state => state.cash.cash);

    const get = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    };
    const add = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    };
    const dispatch = useDispatch();

    const addTasks = (name) => {
        const tasks = {
            color: 'green',
            active: false,
            name,
            id: GenerateId(),
        }
        dispatch(addTaskAction(tasks))
    };
    return (
        <div className='todo'>
            <div className="todo__sideBar">
                <button onClick={() => addTasks(prompt('Введите название?'))}> Добавить!</button>
                <Tasks/>
            </div>
            <div> {cash}
                <button onClick={() => get(Number(prompt('Введите число')))}> Добавтить</button>
                <button onClick={() => add(Number(prompt('Введите число')))}>Убавить</button>
                <button onClick={() => dispatch(FetchTasks())}>Рандомные имена из базы</button>
            </div>
            <div className="todo__tasks">
                <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;