import React from "react";
import List from "../List";
import Badge from "../Badge";
import './Popup.scss';

import close from "../../assets/icons/close.svg";
import plus from "../../assets/icons/plus.svg";

const Popup = ({colors, onAdd}) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedColor, setColor] = React.useState(colors[0].id);
    const [inputValue, setInputValue] = React.useState('');

    const addList = () => {
        if (!inputValue) {
            alert('конечно, ты долбаёб!')
            return;
        }
        const m = (Math.round(Math.random()*100))
        const color= colors.find(c=>selectedColor===c.id).name

        onAdd(
            {id: m, name: inputValue, color: color}
        )};

    return (
        <div className='addList'>
            <List
                onClick={() => setVisible(true)}
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

                <input
                    className='field'
                    value={inputValue}
                    type='text'
                    onChange={event => {
                        setInputValue(event.target.value)
                    }}
                    placeholder="названи списка"

                />

                <button onClick={addList} className='list__add-button'>
                    <span className='test'>Add+</span>
                </button>
                <div className='addList__colors'>
                    {colors.map((color, index) => (
                        <Badge onClick={() => setColor(color.id)}
                               key={index}
                               color={color.name}
                               className={selectedColor === color.id && 'active'}/>
                    ))}
                </div>
                <img className='close' onClick={() => setVisible(false)} src={close} alt='x'/>
            </div>}
        </div>
    )
}

export default Popup;
