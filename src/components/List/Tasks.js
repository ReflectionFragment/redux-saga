import React from "react";
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import classname from "classname";
import Badge from "../Badge";
import {removeTaskAction} from "../../store/TasksReducer";

export const Tasks = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);

    const removeTasks = (task) => {
        dispatch(removeTaskAction(task.id))
        console.log(task.id)
    }

    return (
        <ul  className='list'>
            {customers.length > 0 ? customers.map(task  => (
                        <li onClick={()=> removeTasks(task)}
                            className={classname(customers.active ? 'active' : '')}
                            key={GenerateId()}>
                            <i>
                                {task.icon ? (<img src={task.icon} alt='All'/>) : (<Badge color={task.color}/>)}
                            </i>
                            <span>
                                 {task.name}
                            </span>
                        </li>)) :
                <div>
                        Задач нет
                </div>}
        </ul>)
}

