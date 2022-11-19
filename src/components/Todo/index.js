import React from "react";
import axios from "axios";
// import {useEffect} from "react";

import {List,Tasks,Popup} from '../index' ;

import './Todo.scss';
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

const Todo = () => {
 axios.get('http://localhost:3001/lists?_expand=color').then(({data})=>{
    console.log(data)
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
                      onRemove={
                          (item) => {
                              alert("Пашел нахуй!");
                              console.log(item)
                          }
                      }

                />
                <Popup onAdd={onAddList} colors={DB.colors}/>
            </div>

            <Tasks />
        </div>
    )
};
export default Todo;
