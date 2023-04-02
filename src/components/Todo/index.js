import React from "react";
import './Todo.scss';
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import {FetchTasks} from "../../store/async/FeatchTasks";
import {addTaskAction} from "../../store/reducers/TasksReducer";
import Tasks from "../List/Tasks";
import {incrementCreator, getCash, asyncIncrementCreator, asyncDecrementCreator} from "../../store/reducers/CountReducer";

const Todo = () => {
    const cash = useSelector(state => state.cash.cash);
const test = useSelector(state=> state.testtReducer.count)
    const asyncPlus = (cash) => {
        dispatch(asyncIncrementCreator(cash))
    };
    const get = (cash) => {
        dispatch(getCash(cash))
    };

    const add = (cash) => {
        dispatch(incrementCreator(cash))
    };

    const asyncMinus = (cash) => {
        dispatch(asyncDecrementCreator(cash))
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
                <button onClick={() => asyncPlus()}>Плюс</button>
                <button onClick={() => asyncMinus()}>Минус</button>

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