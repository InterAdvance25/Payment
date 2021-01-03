import React from 'react';
import styles from '../../Cards.module.css';
import coin from '../../../../static/images/coin.png';

const SecondCard:React.FC = () => {
    return (
        <div className={styles.card}>
             <div>
                  <img src={coin} alt="" className={styles.bankLogo} />
            </div>
            <div className={styles.description}>
                <p>Вы можете перевести деньги на карту клиента,на номер телефона,или же просто 
                    перевести на его профиль,<br/>воспользуйтесь сервисом "Перевести другому клиенту"</p>
            </div>
        </div>
    );
}
export default SecondCard;