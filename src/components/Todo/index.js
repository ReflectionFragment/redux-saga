import React from "react";



import {List,Tasks,Popup} from '../index' ;

import './Todo.scss';
import all from '../../assets/icons/all.svg'
import DB from '../../assets/DB.json'

const Todo = () => {


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
                {DB.lists? (<List items={lists}
                      isRemovable
                      onRemove={
                          (id) => {
                             const newObj = lists.filter(item=> item.id !== id);
                             setList(newObj);
                          }
                      }

                />) : (<h3>'naxui'</h3>)}
                <Popup onAdd={onAddList} colors={DB.colors}/>
            </div>

            <Tasks />
        </div>
    )
};
export default Todo;
