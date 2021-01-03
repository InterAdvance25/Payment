import React from 'react';
import styles from '../../Cards.module.css';
import money from '../../../../static/images/money.png';

const ThirdCard:React.FC = () => {
    return (
        <div className={styles.card}>
        <div>
              <img src={money} alt="" className={styles.bankLogo} />
        </div>
        <div className={styles.description}>
            <h1 className={styles.headline}>Снижаем ставку по кредиту на 2%</h1>
            <p className={styles.rate}>Ставка по вашему кредиту автоматически снизится на 2% после первого года, если:</p>
            <ul className={styles.list}>
                <li> Вы оформили заявку на кредит с 13 ноября 2020 года по 28 января 2021 года</li>
            
             <li>Сумма кредита – не менее 300 000 Р</li>
             <li>Срок – от 15 месяцев</li>
            <li>В первый год вы платите без просрочек и досрочного погашения</li>
            </ul>
        </div>
    </div>
    );
}
export default ThirdCard;