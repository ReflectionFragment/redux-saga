import React from 'react';
import './List.scss';
import Badge from "../Badge";
import classname from "classname";
import close from '../../assets/icons/close.svg';
import axios from "axios";

function List({items, isRemovable, onClick, onRemove}) {
    const onRemovableList = item => {
        if (window.confirm("удалить?")) {
            axios.delete ('http://localhost:3001/lists/' + item.id)
            .then(()=>{
                onRemove(item.id);
            })

        }
    }

    return (
        <ul onClick={onClick} className='list'>
            {items && items.map((item, idx) => (
                <li className={classname(item.className, {active: item.active})}
                    key={idx}>
                    <i>
                        {item.icon ? (<img src={item.icon} alt='All'/>
                        ) : (
                            <Badge color={item.color}/>
                        )}
                    </i>
                    <span>
                        {item.name}
                    </span>
                    {isRemovable && <img
                        className='list__close'
                        src={close}
                        alt='x'
                        onClick={() => onRemovableList(item)}
                    />}
                </li>
            ))}
        </ul>
    );
}

export default List;
