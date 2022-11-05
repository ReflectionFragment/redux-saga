import React from "react";
import List from "../List";
import './Todo.scss';
import Popup from "../popup";
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

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
                            active: 1
                        },
                        {
                            color: 'pink',
                            name: "11234!"
                        },
                        {
                            color: 'blue' ,
                            name: "112345!"
                        }

                    ]
                }
                    isRemovable
                />
                <Popup colors = {DB.colors} />

            </div>

            <div className="todo__tasks">
            <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;
