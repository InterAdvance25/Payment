import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainPart.module.css';
const MainPart:React.FC = () => {
    return (
        <div className={styles.content}>
            <div>
                <NavLink to='/app/main' className={styles.linkToMain}>Главная</NavLink>
            </div>
            <div>
                <NavLink to='/app/transfer' className={styles.linkToTransfer}>Перевести другому клиенту</NavLink>
            </div>
        </div>
    );
}
export default MainPart;