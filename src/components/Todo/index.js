import React from "react";
import List from "../List";
import './Todo.scss';
import Popup from "../popup";
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

const Todo = () => {
    const [lists, setList] = React.useState(DB.lists.map(item => {
            let color = DB.colors.find(
                color => color.id === item.colorId);
            if (color != null) {
                item.color = color.name
            }
            else {
                item.color= "black"
            }
            return item;
        }
    ))
    const onAddList = (obj) => {
        const newList = [
            ...lists, obj
        ];

        setList(newList)
    }
    return (
        <div className='todo'>
            <div className="todo__sideBar">
                <List
                    items={[
                        {
                            icon: all,
                            name: "Вcе задачи!",
                            active: true
                        }
                    ]}
                />
                <List items={lists}
                      isRemovable
                />
                <Popup onAdd={onAddList} colors={DB.colors}/>

            </div>

            <div className="todo__tasks">
                <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;
