import React from "react";
import List from "../List";
import Badge from "../Badge";

import plus from "../../assets/icons/plus.svg";

export const Popup = ({colors}) => {
    const [visible, setVisible] = React.useState(false);
    const [selectColor, setColor] = React.useState(colors[0].id);
const oi = () =>   console.log( React.useState)





    return (
        <div className='addList'>
            <List
                onClick={() => oi()
            }
                items={
                    [
                        {
                            className: 'list__add-button',
                            icon: plus,
                            name: "Добавить!",
                            active: true
                        }
                    ]}
            />

            {visible && <div className='addList__pop'>

                <input className='field' value='pop' type="text"/>

                <button className='list__add-button'>
                    <span className='test'>Add+</span>
                </button>
                <div className='addList__colors'>
                    {colors.map((color, index) => (
                        <Badge onClick={() => setColor(color.id)}
                               key={index}
                               color={color.name}
                               className={selectColor===color.id && 'active'}              />
                    ))}
                </div>
                <img className='close' onClick={()=>setVisible(false)} src={''} alt='x'/>
            </div>}
        </div>
    )
}

