import React from "react";
import all from '../../assets/icons/all.svg'
import plus from '../../assets/icons/plus.svg'
import List from "../List";
import './Todo.scss';

const Todo = () => {
    return (
        <div className='todo'>
            <div className="todo__sideBar">
                <List
                items = {[
                    {
                        icon: all,
                        name: "Вcе задачи!",
                        active: true
                    }
                ]}
                />
                <List
                    items = {[
                        {
                            color: 'green' ,
                            name: "11234!",
                            active: true
                        },
                        {
                            color: 'pink',
                            name: "11234!"
                        },
                        {
                            color: 'blue' ,
                            name: "112345!"
                        }
                    ]}
                />
                <List
                    items = {[
                        {
                            className: 'list__add-button',
                            icon: plus,
                            name: "Добавить!",
                            active: true
                        }
                    ]} />

            </div>

            <div className="todo__tasks">
            <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;