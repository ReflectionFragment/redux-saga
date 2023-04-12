import React from "react";
import './Todo.scss';
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch} from "react-redux";
import {addTaskCreator, addTusk} from "../../store/reducers/TasksReducer";
import Tasks from "../List/Tasks";
import {
    incrementCreator,
    getCash,
    asyncIncrementCreator,
    asyncDecrementCreator
} from "../../store/reducers/CountReducer";
import {testCreator} from "../../store/reducers/TestReduser";
import Description from "../Description/Description";

const Todo = () => {
    const asyncPlus = () => {
        dispatch(asyncIncrementCreator())
    };
    const get = () => {
        dispatch(getCash())
    };
    const add = () => {
        dispatch(incrementCreator())
    };
    const asyncMinus = () => {
        dispatch(asyncDecrementCreator())
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
        dispatch(addTaskCreator(tasks))
    };
    return (
        <div className='todo'>
            <div className="todo__sideBar">
                <button onClick={() => addTasks(prompt('Введите название?'))}> Добавить!</button>
                <Tasks/>
            </div>
            <div>
                <span className="todo__tasks">Tect</span>
                <div className="buttons">
                    <button onClick={() => dispatch(testCreator())}> тест</button>

                    <button onClick={() => get()}> Добавтить</button>
                    <button onClick={() => add()}>Убавить</button>

                    <button onClick={() => asyncPlus()}>aPlus</button>
                    <button onClick={() => asyncMinus()}>aMinus</button>

                    <button onClick={() => dispatch(addTusk())}>Рандомные имена из базы</button>
                </div>
                <Description/>
            </div>
        </div>
    )
};
export default Todo;