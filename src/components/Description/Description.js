import React from 'react';
import {useSelector} from "react-redux";
import './SDesk.scss';


const Description = () => {
    const cash = useSelector(state => state.cash.cash);
    const test = useSelector(state => state.test.test)
    return (
        <div className='val'>
            {cash}
            {test}
        </div>
    );
}

export default Description;