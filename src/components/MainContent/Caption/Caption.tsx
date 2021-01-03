import React from 'react';
import styles from './Caption.module.css';
const Caption:React.FC = () => {
    return (
        <div className={styles.caption}>
            <h1>
                БАНКОВСКАЯ <br/> СИСТЕМА ПЛАТЕЖЕЙ <br/> SAFE TRANSACTION
            </h1>
        </div>
    );
}
export default Caption;