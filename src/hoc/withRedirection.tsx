import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppState } from '../redux/rootReducer';


function withRedirection<T>(Component:React.FC<T>){
    return (props:T) => {
            //if(!useSelector<AppState>(state => state.user.isAuthorized)) return <Redirect to="/account" />
            return <Component {...props} />
    }
    
}
export default withRedirection;