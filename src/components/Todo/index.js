import React, {useEffect} from "react";
import axios from "axios";


import {List,Tasks,Popup} from '../index' ;

import './Todo.scss';
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

const Todo = () => {
    const [lists, setList] = React.useState(null);
    const [color, setColor] = React.useState(null);

    useEffect(()=> {
     axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({data})=>{
         setList(data)
     });
     axios.get('http://localhost:3001/colors').then(({data})=>{
         setColor(data)
     });
    },[]);

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
                /> ) : (<h2>или идёт загрузка или у тя нихуя не сраотает тварь ты ебаная  </h2>)}
                <Popup onAdd={onAddList} color={color}/>
            </div>
            { lists && <Tasks list={lists[0]}/>}
        </div>
    )
};
export default Todo;
