import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from './Transfer.module.css';
import phone from '../../static/images/phone.png';
import profile from '../../static/images/profile.png';
import card from '../../static/images/card.png';
import PhoneContainer from './Phone/PhoneContainer';
import TransferProfile from './TransferProfile/TransferProfile';
import BankCardContainer from './Card/BankCardContainer';
import Transaction from './Card/Transactioncard/Transaction';
import UserTo from './UserTo/UserTo';
type ts = {
    value:number,
    count:number,
    setValue:any,
    setCount:any
}
export const TransactionContext = React.createContext<ts>({value:0,count:0,setValue:null,setCount:null});
const Transfer:React.FC = () => {
    const [value,setValue] = useState(0);
    const [count,setCount] = useState(0);
    return (
        <div className={styles.transfer}>
            <div className={styles.transactionTypes}>
                   <div>
                      <NavLink className={styles.link} to="/app/transfer/telephone">
                          <img src={phone}  alt="" className={styles.phone} /><br/>
                       Телефон
                       </NavLink>
                   </div>
                   <div>
                   <NavLink className={styles.link} to="/app/transfer/profile">
                          <img src={profile}  alt="" className={styles.profile} /><br/>
                        Профиль
                       </NavLink>
                   </div>
                   <div>
                   <NavLink className={styles.link} to="/app/transfer/card">
                          <img src={card}  alt="" className={styles.card} /><br/>
                       Карта
                    </NavLink>
                   </div>
            </div>
        <TransactionContext.Provider value={{value,setValue,count,setCount}}>
           <Route path="/app/transfer/telephone" render={() => <PhoneContainer />} />
           <Route path="/app/transfer/profile" render={() => <TransferProfile/>} /> 
           <Route path="/app/transfer/card" render={() => <BankCardContainer/>  }/> 
           <Route path="/app/transfer/userTo/:userId" render={() => <UserTo/>} />
           <Route path="/app/transfer/transaction" render={() => <Transaction/> }/>
        </TransactionContext.Provider>
        </div>
    )
}
export default Transfer;