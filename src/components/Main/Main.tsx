import React from 'react';
import store from '../../redux/redux';
import Description from '../Description/Description';
import MainContent from '../MainContent/MainConten';

const Main:React.FC = () => {
    return (
        <>
         <MainContent/>
         <Description/>
        </>
    )
}
export default Main;