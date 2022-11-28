import React from "react";
import axios from "axios";


import {List,Tasks,Popup} from '../index' ;

import './Todo.scss';
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

const Todo = () => {
 axios.get('http://localhost:3001/lists?_expand=color').then(()=>{

    })

    const [lists, setList] = React.useState(DB.lists.map(item => {
            let color = DB.colors.find(
                color => color.id === item.colorId);
            if (color != null) {
                item.color = color.name
            } else {
                item.color = "black"
            }
            return item;
        }
    ))
    const onAddList = (newObj) => {
        const newList = [
            ...lists, newObj
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
                {lists ? (
                <List items={lists}
                      isRemovable
                      onRemove={id => {
                            const newList= lists.filter(item=> item.id !== id);
                          setList(newList);
                      }}
                /> ) : (<h2>'Иди нахуй'</h2>)}
                <Popup onAdd={onAddList} colors={DB.colors}/>
            </div>
            { lists && <Tasks list={lists[0]}/>}
        </div>
    )
};
export default Todo;
