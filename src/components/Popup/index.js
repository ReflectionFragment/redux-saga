import React from "react";
import Badge from "../Badge";
import {GenerateId} from "../../store/helpers/keyHelpera";

// import plus from "../../assets/icons/plus.svg";

export const Popup = (colors) => {
    const [visible, setVisible] = React.useState(true);
    const [selectColor, setColor] = React.useState(colors[0].id);
// const oi = () =>   console.log( React.useState)
    return (
        <div className='addList'>
            <button onClick={()=> setColor(prevState => prevState)}> add +</button>

            {visible && <div className='addList__pop'>

                <input className='field' value='pop' type="text"/>

                <button className='list__add-button'>
                    <span className='test'>Add+</span>
                </button>
                <div className='addList__colors'>
                    {colors.map((color) => (
                        <Badge onClick={() => setColor(color.id)}
                               key={GenerateId()}
                               color={color.name}
                               className={selectColor===color.id && 'active'}/>
                    ))}
                </div>
                <img className='close' onClick={()=>setVisible(false)} src={''} alt='x'/>
            </div>}
        </div>
    )
}

