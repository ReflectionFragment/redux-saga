import React from "react";
import List from "../List";
import Badge from "../Badge";
import './Popup.scss';

import close from "../../assets/icons/close.svg";
import plus from "../../assets/icons/plus.svg";

const Popup = ({colors}) => {
    const [visible, setVisible] = React.useState(false);
    const op = () => setVisible(false);

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

                <input className='field' value='pop' type="text"/>

                    <button className='list__add-button'>
                        <p>added</p>
                    </button>
                    <div className='addList__colors' >
                        { colors.map((color, index)=> (<Badge key={index} color={color.name}/>)) }
                    </div>
                <img onClick={op} src={close} alt='x'/>
            </div>}
        </div>
    )
}

export default Popup;
