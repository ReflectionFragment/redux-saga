import React from 'react';
import './List.scss';
import Badge from "../Badge";
import classname from "classname";

function List({ items, isRemovable, onClick }) {

    return (
        <ul onClick={onClick} className='list'>
            {items && items.map((item, idx) => (
                <li className={classname(item.className, {active: item.active })}
                    key = {idx} >
                    <i>
                        {item.icon ? (<img src= {item.icon} alt='All' />
                        ):(
                            <Badge color= {item.color} />
                        )}
                    </i>
                    <span>
                        {item.name}
                    </span>

                </li>
            ))}
        </ul>
    );
}

export default List;
