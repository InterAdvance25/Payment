import React from 'react';
import MainPart from './MainPart/MainPart';
import styles from './Navbar.module.css';
import ProfilePart from './ProfilePart/ProfilePart';
const Navbar:React.FC = () => {
    return (
        <div className={styles.flex_container}>
          <div className={styles.leftMenu}>
            <MainPart/>
          </div>
          <div className={styles.rightMenu}>
            <ProfilePart/>
          </div>
        </div>
    )
}
export default Navbar;