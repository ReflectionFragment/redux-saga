import React from 'react';
import './List.scss';
import Badge from "../Badge";
import classname from "classname";
import {GenerateId} from "../../store/helpers/keyHelpera";
import {addTaskAction, removeTaskAction} from "../../store/TasksReducer";
import {useDispatch} from "react-redux";

function List({items,active}) {
    const dispatch = useDispatch();
    const addTasks = (name) => {
        const tasks = {
            name,
            id: GenerateId(),
        }
        dispatch(addTaskAction(tasks))

    };
    const removeTasks = (task) => {
        dispatch(removeTaskAction(task.id))
    }

    return (
        <ul onClick={()=> removeTasks()}   className='list'>
            {items && items.map((item, idx) => (
                <li className={classname(active ? 'active' : '' )}
                    key = {GenerateId()} >
                    <i>
                        {item.icon ? (<img src= {item.icon} alt='All' />
                            ):(
                            <Badge color= {item.color} />
                            )}
                    </i>
                    <span>
                        {item.name}
                    </span>
                    <div>item.name==="Добавить!" ? onClick={() => addTasks(prompt('Введите название?'))}</div>
                </li>
            ))}
        </ul>
    );
}

export default List;