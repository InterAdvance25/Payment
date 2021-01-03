import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Transfer } from '../../../../api/api';
import { AppState } from '../../../../redux/rootReducer';
import { TransactionContext } from '../../Transfer'


export type us =  {
    name:string,
    lastName:string
}
const Transaction:React.FC = () =>  {
    const dispatch = useDispatch();
    const user:any = useSelector<AppState>(user => user.user);
    const [state,setState] = useState<us>({name:"",lastName:""});
    const { value, count }  = useContext(TransactionContext);
    const [transfered,setTransfer] = useState(false);
    useEffect(() =>  {
        let unmounted:boolean = false;
        Axios.get(`https://localhost:44381/api/Bank/extra/${value}`).then(response => {
            console.log(response);
            if(!unmounted)
            setState({name:response.data.name,lastName:response.data.lastName});
        });
        return () => {
            unmounted = true;
        }
    },[value])
    return (
        <div style={{color:'white'}}>
            <h1>Вы хотите перевести на счет данному пользователю: {state.name ?? ""} {state.lastName ?? ""}  </h1>
            <h2>{value > 99999999999 ? "Карта" : "Номер"}:{value},Счет:{count}</h2>
            {
                transfered ? "Переведено" : <button onClick={() => Transfer(dispatch,user,count.toString(),setTransfer,undefined,value)}>Подтвердить</button>
            }
        </div>
    )
}

export default Transaction
