import React from 'react';
import './counter.scss';

const ABC = () => {
    const [a, b] = React.useState([1, 2, 3])
    const cba = () => {
        const m = Math.round(Math.random() * 10);
        const na = [...a, m];
        b(na);
    }
    return (
        <div className='count'>
            { a.map((i, index) => <div key={index}>{i}</div>)}

            <button className='btn' onClick={cba}>add</button>
        </div>
    )
}

export default ABC
