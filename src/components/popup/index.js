import React from "react";
import List from "../List";
import './Popup.scss';

import close from "../../assets/icons/close.svg";
import plus from "../../assets/icons/plus.svg";

const Popup = () => {
    const [visible, setVisible] = React.useState(false);
    const op =() => setVisible(false);

    return (
        <div className='addList'>
            <List
                onClick = {()=> setVisible(1)}
                items = {
                    [
                        {
                            className: 'list__add-button',
                            icon: plus,
                            name: "Добавить!",
                            active: true
                        }
                    ]}
            />

            {visible && <div className='addList__pop' >
                <input value='pop' type="text"/>
                <img onClick={op} src={close} alt='x'/>
            </div>}
        </div>
    )}

export default Popup;