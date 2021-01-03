import Axios from 'axios';
import React, { ChangeEvent, Dispatch, useEffect, useState } from 'react'
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { us } from '../Card/Transactioncard/Transaction';
import styles from './UserTo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authorizeAction } from '../../../redux/userAuthReducer';
import { AppState } from '../../../redux/rootReducer';
import { Transfer } from '../../../api/api';

function UserTo(props:RouteChildrenProps<any>) {
    const [state,setState] = useState<us>({name:"",lastName:""});
    const [value,setValue] = useState<string>("");
    const [transfered,setTransfer] = useState<boolean>(false);
    const dispatch = useDispatch<Dispatch<authorizeAction>>();
    const user:any = useSelector<AppState>(state => state.user);
   
    useEffect(() => {
        let unmounted:boolean = false;
         Axios.get(`https://localhost:44381/api/Bank/user/${props.match?.params.userId}`).then(response => {
            if(!unmounted)
             setState({name:response.data.name,lastName:response.data.lastName});
         })
         return () => {
            unmounted = true;
        }
    },[state]);

    return (
        <div style={{color:'white'}}>
            <h1>Перевод пользователю: {state.name} {state.lastName}</h1>
            <div>
                <input value={value} className={styles.inp}  placeholder={"Введите Количество"} 
                onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            </div>
            {
                transfered ? <p>Переведено</p> :   <button onClick={() => {
                    Transfer(dispatch,user,value,setTransfer,props.match?.params.userId)}} 
                    className={styles.btn}
             
                    >Подтвердить</button>
            }
          
        </div>
    )
}

export default withRouter(UserTo);
