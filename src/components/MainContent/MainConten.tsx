import React from 'react';
import Caption from './Caption/Caption';
import Card from './Card/Card';
import styles from './MainContent.module.css';
const MainContent:React.FC = () => {
    return (
            <div className={styles.content}>
                <div>
                   <Card/>
                </div>
                <div>
                    <Caption/>
                </div>
            </div>
    );
}

export default MainContent;