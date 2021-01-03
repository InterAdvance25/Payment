import React from 'react'
import {  Redirect, Route } from 'react-router-dom';
import { compose } from 'redux';
import withRedirection from '../../hoc/withRedirection';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Transfer from '../Transfer/Transfer';


const BaseContent:React.FC = () => {
    return (
        <>
         <Header/>
          <Route exact path="/app/main"  render={() => <Main/> } />
          <Route exact path="/app/profile" render={() => <Profile/> }/>
          <Route path="/app/transfer" render={() => <Transfer/> }/>
          <Route render={() => <Redirect to="/app/main" />} />
        </>
    )
}
export default compose(withRedirection)(BaseContent);


