import React, { ChangeEvent, useContext } from 'react';
import styles from './Phone.module.css';
import { PhonePropsType } from '../../../redux/phoneReducer';
import Validate from '../Validation';
import { NavLink } from 'react-router-dom';
import { TransactionContext } from '../Transfer';


const Phone:React.FC<PhonePropsType> = ({phone,count,onChangeHandler,onSend}) => {
    const {setValue,setCount} = useContext(TransactionContext);
    let updateField = (event:ChangeEvent<HTMLInputElement>) => {
        Validate(onChangeHandler,event);
    }
    let onClickTransfer = (event:React.MouseEvent) => {
        onSend();
        setValue(phone);
        setCount(count);
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_phoneField}>
            <label>Телефон</label>
               <br/>
               <input value={phone} onChange={updateField} name="phone"  className={styles.phoneField} type="phone" maxLength={11} placeholder="Введите номер телефона..." />
            </div> 
            <div className={styles.container_count}>
            <label>Счет</label>
               <br/>
               <input value={count} onChange={updateField} name="count" className={styles.count} type="text" maxLength={6} />
            </div>
            <div>
                <button onClick={onClickTransfer}  className={styles.btn}>
                    <NavLink to="/app/transfer/transaction" className={styles.transaction}>
                        Перевести
                    </NavLink>
                </button>
            </div>
        </div>
    )
}
export default Phone;