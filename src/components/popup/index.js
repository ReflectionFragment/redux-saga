import React, {useEffect} from "react";
import axios from "axios";

import List from "../List";
import Badge from "../Badge";

import './Popup.scss';

import close from "../../assets/icons/close.svg";
import plus from "../../assets/icons/plus.svg";


const Popup = ({colors, onAdd}) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedColor, setColor] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const [load, setLoad] = React.useState(false);
  useEffect(()=>{
    setColor(colors[0].id);
  },[colors])

    const onClose =()=>{
        setVisible (false)
        setColor (colors[0].id)
        setInputValue ('')
    }

    const addList = () => {
        if (!inputValue) {
            alert('plz, Name')
            return;
        }

        setLoad(true)
        axios.post('http://localhost:3001/lists',
            {name: inputValue, colorId:selectedColor})
            .then(({data})=>{
                const color = colors.find(c=>c.id === selectedColor).name;
                const listObj = {...data, color: color}
                onAdd(listObj);
                onClose();
            })
            .finally(() => {
            setLoad(false)})

    };

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
                    <span className='test'>
                        {load ? 'добавляем' : 'Добавить)'}
                    </span>
                </button>
                <div className='addList__colors'>
                    {colors.map((color, index) => (
                        <Badge onClick={() => setColor(color.id)}
                               key={index}
                               color={color.name}
                               className={selectedColor === color.id && 'active'}
                        />
                    ))}
                </div>
                <img className='close' onClick={onClose} src={close} alt='x'/>
            </div>}
        </div>
    )
}

export default Popup;
