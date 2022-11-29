import React, {useEffect} from "react";
import axios from "axios";

import List from "../List";
import Badge from "../Badge";

import './Popup.scss';

import close from "../../assets/icons/close.svg";
import plus from "../../assets/icons/plus.svg";


const Popup = ({color, onAdd}) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedColor, setColor] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [Load, setLoad] = React.useState(false)
    useEffect(() => {
        if (Array.isArray(color)) {
            setColor(color[0].id);
        }
    }, [color]);

    const onClose =()=>{
        setVisible(false)
        setColor(color[0].id)
        setInputValue('')
    }

    const addList = () => {
        if (!inputValue) {
            alert('Введите название!')
            return;
        }
        setLoad(true);
        axios.post('http://localhost:3001/lists',
            {name: inputValue, colorId: selectedColor})
            .then(({data}) => {
                const color = color.find(c=> c.id === selectedColor).name;
                const newObj = {...data, color: {name: color}};
                onAdd(newObj)
                onClose();
            })
            .finally(()=>{
            setLoad(false);
        });
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
                           { Load? "Добавление..." : "добавить"}

                        </span>
                </button>
                <div className='addList__colors'>
                    {color.map((color, index) => (
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
