import React from 'react';
import styles from './Header.module.css';
import Navbar from './Navbar/Navbar';

const Header:React.FC = () => {
    return (
        <div className={styles.content}>
            <Navbar/>
        </div>
    );
}
export default Header;