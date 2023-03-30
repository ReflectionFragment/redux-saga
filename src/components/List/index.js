import React from 'react';
import './List.scss';
// import Badge from "../Badge";
import classname from "classname";
import {GenerateId} from "../../store/helpers/keyHelpera";
import {removeTaskAction} from "../../store/TasksReducer";
import {useDispatch} from "react-redux";

function List({items,active}) {
    const dispatch = useDispatch();
    const removeTasks = (task) => {
        dispatch(removeTaskAction(task.id))
    }
    return (
        <ul onClick={()=> removeTasks()}   className='list'>
            {items && items.map((item) => (
                <li className={classname(active ? 'active' : '' )}
                    key = {GenerateId()} >
                    <i>
                        <img src= {item.icon} alt='All' />
                    </i>
                    <span>
                        {item.name}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default List;