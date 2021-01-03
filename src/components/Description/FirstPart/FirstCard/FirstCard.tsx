import React from 'react';
import styles from '../../Cards.module.css';
import bankLogo from '../../../../static/images/bank.png';

const FirstCard:React.FC = () => {
    return (
        <div className={styles.card}>
            <div>
                  <img src={bankLogo} alt="" className={styles.bankLogo} />
            </div>
            <div className={styles.description}>
                <p>SAFE TRANSACTION — крупнейший система платежей в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов</p>
            </div>
        </div>
    );
}
export default FirstCard;