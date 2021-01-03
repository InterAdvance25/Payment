import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { cardPropsType } from '../../../redux/cardReducer';
import { TransactionContext } from '../Transfer';
import Validate from '../Validation';
import styles from './BankCard.module.css';

const BankCard:React.FC<cardPropsType> = ({card,count,onChangeHandler}) => {
    let {setValue,setCount} = useContext(TransactionContext);
    let onChangeCard = (event:React.ChangeEvent<HTMLInputElement>) => {
        Validate(onChangeHandler,event);
    }
    return (
        <div className={styles.container}>
        <div className={styles.container_cardField}>
        <label>Карта</label>
           <br/>
           <input value={card === 0 ? "" : card} onChange={onChangeCard} name="card"
                  className={styles.cardField} type="phone" maxLength={14} placeholder="1234 5678 9101 1213" />
        </div>
        <div className={styles.container_count}>
        <label>Счет</label>
           <br/>
           <input value={count === 0 ? "" : count} placeholder=""
            onChange={onChangeCard} className={styles.count} type="text" name="count"  maxLength={6} />
        </div>
        <div>
            <button className={styles.btn} onClick={() => {
                setValue(card);
                setCount(count);
            }}>
                <NavLink to="/app/transfer/transaction" className={styles.transaction} >
                     Перевести
                </NavLink>
            </button>
        </div>
    </div>
    )
}
export default BankCard;
