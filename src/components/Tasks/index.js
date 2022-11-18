import React from "react";
import edit from "../../assets/icons/edit.svg";
import ok from "../../assets/icons/ok.svg";

import './Tasks.scss';

const Tasks = () => {
    return (
        <div className="tasks">
            <div className='tasks__title'>
                Задачи
                <img
                    onClick={() => alert('Блять')}
                    className='edit'
                    src={edit} alt='edit img'
                />
            </div>

            <div className='checkbox'>
            <input id="check" type="checkbox"/>
             <label For="check">
                 <img className='ok' src={ok} alt='ok'/>

             </label>
                <h3>a</h3>
            </div>
        </div>
    )
}
export default Tasks;
