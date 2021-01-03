import React, { Dispatch, useReducer } from 'react';
import styles from './ProfilePart.module.css';
import icon from '../../../../static/images/icon.png';
import team from '../../../../static/images/team.png';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authorizeAction, signOutAction } from '../../../../redux/userAuthReducer';
const ProfilePart:React.FC = () => {
    const dispatch = useDispatch<Dispatch<authorizeAction>>();
    function clear(){
        sessionStorage.clear();
        dispatch(signOutAction());
    }
   
    return (
        <div className={styles.content}>
           <div>
           <NavLink to='/app/profile' className={styles.linkToProfile}>
                 <img src={icon}  className={styles.icon} alt="" /> Мой профиль
               </NavLink>
           </div>
           <div>
           <NavLink to='/app/main' className={styles.linkToTeam}>
                <img src={team} className={styles.team} alt="" />Команда
            </NavLink>
           </div>
           <div>
           <NavLink to='/account/auth' className={styles.signout} onClick={clear} >
                <img src={"http://cdn.onlinewebfonts.com/svg/img_377712.png"} className={styles.icon} alt="" />
            </NavLink>
           </div>
           
        </div>

    );
}
export default ProfilePart;