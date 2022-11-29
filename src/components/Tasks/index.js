import React from "react";
import edit from "../../assets/icons/edit.svg";
import ok from "../../assets/icons/ok.svg";

import './Tasks.scss';

const Tasks = ({list}) => {
    return (
        <div className="tasks">
            <div className='tasks__title'>
                {list.name}
                <img
                    onClick={() => alert('Блять')}
                    className='edit'
                    src={edit} alt='edit img'
                />
            </div>

            <div>
               {list.tasks.map(task => (

                  <div className='tasks__items-row'>
                      <div className='checkbox'>
                          <input id="check" type="checkbox"/>
                          <label htmlFor="check">
                              <img className='ok' src={ok} alt='ok'/>
                          </label>
                          <h3>
                              {task.name}
                          </h3>
                      </div>
                  </div>
               ))}
           </div>

        </div>
    )
}
export default Tasks;
