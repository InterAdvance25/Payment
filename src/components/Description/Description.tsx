import React from 'react';
import styles from './Description.module.css';
import FirstPart from './FirstPart/FirstPart';
import SecondPart from './SecondPart/SecondPart';
const Description:React.FC = () => {
    return (
        <div className={styles.content}>
           <div>
             <FirstPart/>
           </div>
           <div>
            <SecondPart/>
           </div>
        </div>
    )
}
export default Description;