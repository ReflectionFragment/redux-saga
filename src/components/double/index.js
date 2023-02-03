import React from "react";
import axios from "axios";
import DB from "../../assets/DB.json";
import "./double.scss";
const Counter = () => {

    const [A, setA] = React.useState(DB.number.map((item,index) => <p key={index}>item</p>));
    const [i,sI] = React.useState();
    const All = () => {
        axios.post('http://localhost:3001/DB/number', {num: A})
            .then(({data}) => {
                console.log(data)
                const newArray = Math.round(Math.random()* 10);
                const newObj = {...data, num: newArray}
                setA(newObj)
            });

        return (
            <div className='count'>
                {axios.get('http://localhost:3001/DB/number').then(({data})=>{
                   console.log(data)
                    data.map((g, index) => <p key={index}>{g}</p>)
                       }
                    )}
                <imput value={i}></imput>
                <button className='btn' onClick={All}>Iux</button>
            </div>
        );
    }

}
export default Counter;
