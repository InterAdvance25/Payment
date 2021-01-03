import React, { useEffect,useState } from 'react';
import styles from './Profile.module.css';
import count from '../../static/images/count.jpg';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import Axios from 'axios';

const Profile:React.FC = () => {
    const state:any = useSelector<AppState>(state => state.user);
    const [history,setHistory] = useState<Array<any>>([]);
    useEffect(() => {
      let unmounted:boolean = false;
      Axios.get("https://localhost:44381/api/Bank/profile",{
        withCredentials:true,
        headers:{"Authorization": `Bearer ${sessionStorage.getItem("token")}`}
      }).then(response => {
        if(!unmounted)
        setHistory(response.data)
      });
      return () => {
        unmounted = true;
      }
    },[history]);
    return (
        <div className={styles.profile}>
          <div className={styles.flex_container + ' ' + styles.payment}>
            <div>
                <h1>История платежей:</h1>
                <div className={styles.history}>
                    {
                      history.map(u => (
                        <div key={u.id}>
                          <p>{u.description}</p>
                       </div>
                      ))
                    }
                </div>
            </div>
          </div>
          <div className={styles.flex_container}>
             <div className={styles.flex_element}>
                <div className={styles.flex_element_count}>
                    <img src={count} width="20%" alt=""/>
                    <h2>Счет:{state.count}</h2>
                </div>
              </div>
              <div>
                   <h1>{state.name}</h1>
                   <h1>{state.lastname}</h1>
                </div>
          </div>
        </div>
    )
}
export default Profile;