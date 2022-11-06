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
                <List items = {DB.lists.map(item=>
                    {
                        item.color = DB.colors.find (
                            // color => color.id === colorId).name
                        color => color.id === item.id).name;
                        return item;
                    }
                )}
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
