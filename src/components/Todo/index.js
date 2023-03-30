import React from "react";
// import all from '../../assets/icons/all.svg'
// import List from "../List";
import './Todo.scss';
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import {FetchTasks} from "../../store/async/FeatchTasks";
import {addTaskAction} from "../../store/TasksReducer";
// import {Popup} from "../Popup";
import Tasks from "../List/Tasks";
import {addCash, getCash} from "../../store/CashReducer";

const Todo = () => {
    const cash = useSelector(state => state.cash.cash);

    const get = (cash) => {
        dispatch(getCash(cash))
    };
    const add = (cash) => {
        dispatch(addCash(cash))
    };
    const dispatch = useDispatch();

    const addTasks = (name) => {
        const tasks = {
            color: 'green',
            active: false,
            name,
            id: GenerateId(),
        }
        if (!name) {
            return;
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
                <button onClick={() => get()}> Добавтить</button>
                <button onClick={() => add()}>Убавить</button>
                <button onClick={() => dispatch(FetchTasks())}>Рандомные имена из базы</button>
            </div>
            <div className="todo__tasks">
                <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;