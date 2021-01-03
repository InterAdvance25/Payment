import React from 'react';
import FourthCard from './FourthCard/FouthCard';
import ThirdCard from './ThirdCard/ThirdCard';
import styles from './SecondPart.module.css';

const SecondPart:React.FC = () => {
    return (
        <div className={styles.container}>
            <ThirdCard/>
            <FourthCard/>
        </div>
    )
}
export default SecondPart;