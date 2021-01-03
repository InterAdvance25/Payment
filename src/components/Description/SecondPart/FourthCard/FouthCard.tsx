import React from 'react';
import styles from '../../Cards.module.css';
import discount from '../../../../static/images/discount.png';

const FourthCard:React.FC = () => {
    return (
        <div className={styles.card}>
        <div>
        <img src={discount} alt="" className={styles.bankLogo} />
        </div>
        <div className={styles.description}>
            <h1 className={styles.headline}>Привелегии карты</h1>
            <ul className={styles.list}>
                <li>Скидка 10% на билеты в «СИНЕМА ПАРК» и «Формула Кино»</li>
                <li>Скидка 10% на сайте Hotels.com</li>
                <li>Скидка 20% в магазинах сети The Body Shop®</li>
                <li>Скидка 10% на KINOHOD.ru и в приложении</li>
            </ul>
        </div>
    </div>
    );
}
export default FourthCard;