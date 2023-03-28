import React from "react";
import all from '../../assets/icons/all.svg'
import plus from '../../assets/icons/plus.svg'
import List from "../List";
import './Todo.scss';
import {GenerateId} from "../../store/helpers/keyHelpera";
import {useDispatch, useSelector} from "react-redux";
import {FetchTasks} from "../../store/async/tasks";

const Todo = () => {
    const cash = useSelector(state => state.cash.cash);

    const get = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    };
    const add = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    };
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);


    return (
        <div className='todo'>

            <div className="todo__sideBar">
                <div>
                    {customers.length > 0 ?
                        <div>{customers.map((customer) =>
                            <div key={GenerateId()}>
                                {customer.name}</div>)}</div>
                        : <p>nothing</p>}
                </div>


                <List
                items = {[
                    {
                        icon: all,
                        name: "Вcе задачи!",
                        active: true
                    }
                ]}
                />
                <List
                    items = {[
                        {
                            color: 'green' ,
                            name: "11234!",
                            active: true
                        },
                        {
                            color: 'pink',
                            name: "11234!"
                        },
                        {
                            color: 'blue' ,
                            name: "112345!"
                        }
                    ]}
                />
                <List
                    items = {[
                        {
                            className: 'list__add-button',
                            icon: plus,
                            name: "Добавить!",
                            active: true
                        }
                    ]} />

            </div>
            <div> {cash}
                <button onClick={() => get(Number(prompt('Введите число')))}> Добавтить</button>
                <button onClick={() => add(Number(prompt('Введите число')))}>Убавить</button>

                <button onClick={() => dispatch(FetchTasks())}>Рандомные именя из базы</button></div>
            <div className="todo__tasks">
            <span>123465789</span>
            </div>
        </div>
    )
};
export default Todo;