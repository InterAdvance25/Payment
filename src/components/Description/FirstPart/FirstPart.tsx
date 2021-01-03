import React from 'react'
import FirstCard from './FirstCard/FirstCard';
import styles from './FirstPart.module.css';
import SecondCard from './SecondCard/SecondCard';

const FirstPart:React.FC = () => {
    return (
        <div className={styles.flex_container}>
            <FirstCard/>
            <SecondCard/>
        </div>
    )
}
export default FirstPart;