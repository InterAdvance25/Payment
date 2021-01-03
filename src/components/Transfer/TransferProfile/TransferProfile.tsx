import React, { ChangeEvent, useEffect, useState  } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../../redux/rootReducer';
import { loadUserThunk,userListState} from '../../../redux/usersReducer';
import styles from './TransferProfile.module.css';

const TransferProfile:React.FC<userListState> = ({users,loaded}) => {
    const [state,setState] = useState<string>("");
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(state);
        dispatch(loadUserThunk(state));
    },[state]);

    return (
        <div className={styles.container}>
            <input className={styles.searchField} 
                   value={state} 
                   onChange={(e:ChangeEvent<HTMLInputElement>) => setState(e.target.value) } 
                   type="text" 
                   placeholder="Поиск..." />
            <button className={styles.searchButton}>
                Поиск
            </button>
            <div className={styles.users}>
               {users.map(value => {
                   return (
                    <div key={value.id} className={styles.usersContainer} >
                        <h1 className={styles.userName} >{value.name} {value.lastName} <br/> Index:{value.code}</h1>
                        <div className={styles.transfer}>
                        <NavLink to={`/app/transfer/userTo/${value.id}`} className={styles.transferBtn}>
                            Перевести
                        </NavLink>
                        </div>
                    </div>
                   )
               })}
            </div>
        </div>
    );
}
let mapStateToProps = (state:AppState):userListState => {
    return {
        users:state.users.users,
        loaded:state.users.loaded
    }
}
export default  connect(mapStateToProps)(TransferProfile);