import './App.css';
import Header from "./components/Header/Header";
import Index from "./components/Todo";
import {useDispatch, useSelector} from "react-redux";
import {GenerateId} from "./store/helpers/keyHelpera";
import {addCustomerAction, removeCustomerAction} from "./store/CustomersReducer";


function App() {
    const dispatch = useDispatch();
    const customers = useSelector (state=> state.customers.customers);
     const cash = useSelector (state=> state.cash.cash);

    const get = (cash) => {dispatch({type:"ADD_CASH", payload:cash})};
    const add = (cash) => {dispatch({type:"GET_CASH", payload:cash})};
    const addCustomers = (name) => {
        const customer={
            name,
            id: GenerateId(),
        }
        dispatch(addCustomerAction(customer))
    };
    const removeCustomer = (customer) => {dispatch(removeCustomerAction(customer.id))}
    return (
        <div>

            <Header/>
            <Index/>
            {cash}

            <button onClick={()=>get(Number(prompt('give me more madness?')))}>переломный момент твоей шконки</button>
            <button onClick={()=>add(Number(prompt('suk')))}>белый туман, черного дракона</button>
            <button onClick={()=>addCustomers(prompt('give me more madness имён?'))}>+ и</button>

            <div>

                {customers.length > 0 ?
                    <div>{customers.map( (customer) =>
                        <div key={GenerateId()} onClick = {()=> removeCustomer(customer)}>
                            {customer.name}</div>)}</div>
                    : <p>nothing</p>}
            </div>
        </div>
    );
}

export default App;
