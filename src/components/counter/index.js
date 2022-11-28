import React, {useState} from 'react';
import './counter.scss';
import DB from '../../assets/DB.json';
import axios from "axios";

const ABC = () => {
    const [v, sV] = useState();
    const [a, b] = React.useState(axios.get('http://localhost:3001/number/')
        .then(({data})=>{
            {data.map((i,index)=> (i));}

        })

        // .map((num,index)=>{
        //     <p key={index}>num</p>
        // }
    );
    const cba = () => {
        // const m = Math.round(Math.random() * 10);
        const na = [...a, v];
        b(na);
    }
    return (
        <div className='count'>
          {a.map((index, i) => <div key={index}> {i} </div>)}
        <input
            onChange={event=> {
                sV(event.target.value)
            }}
            placeholder="названи списка"
            className='field'
            value={v}
        />
            <button className='btn' onClick={cba}>add</button>
        </div>
    )
}

export default ABC
