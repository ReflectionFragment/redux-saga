import React from "react";
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import classname from "classname";
import Badge from "../Badge";
import {removeTaskCreator} from "../../store/reducers/TasksReducer";
import './List.scss';


const Tasks = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);
    const removeTasks = (task) => {
        dispatch(removeTaskCreator(task.id))
    }

    return (

        <ul className='list'>
            {customers.length > 0 ? customers.map(task => (
                    <li
                        className={classname(customers.active ? 'active' : '')}
                        key={GenerateId()}>
                        <div>
                            <i>
                                {task.icon ? (<img src={task.icon} alt='All'/>) : (
                                    <Badge color={task.color ? task.color : 'blue'}/>)}
                            </i>
                            <span>
                                 {task.name}
                            </span>
                        </div>
                        <button className='removeButton' onClick={() => removeTasks(task)}>-</button>
                    </li>)) :
                <div>
                    Задач нет
                </div>}
        </ul>)
}

export default Tasks