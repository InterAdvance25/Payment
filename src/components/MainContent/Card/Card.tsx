import React from 'react';
import styles from './Card.module.css';

const Card:React.FC = () => {
    return (
        <div className={styles.card}>   
            <div className={styles.flex_element_one}>
                <h1>Оформите карту за пару минут</h1>
                <h4 className={styles.hd_list}>Карта дает возможность на получение следующих скидок:</h4>
                <ul className={styles.list}>
                    <li>до 30% скидки в магазинах-партнеров</li>
                    <li>до 20% скидки на автозаправочных станциях</li>
                    <li>до 6% скидки в ресторанах.</li>
               </ul>
            </div>
            <div className={styles.flex_element_two}>
               <button className={styles.order}>Оформить карту</button>
            </div>
        </div>
    );
}
export default Card;