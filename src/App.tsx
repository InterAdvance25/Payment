import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import BaseContent from './components/BaseContent/BaseContent';
import FormAuth from './components/FormAuth/FormAuth';
import FormContainer from './components/FormContainer/FormContainer';
import WorkerForm from './components/Management/additionWorker/WorkerForm';
import Management from './components/Management/Management';
import Preloader from './components/Preloader/Preloader';
import { AppState } from './redux/rootReducer';
import { initUser } from './redux/userAuthReducer';




const App:React.FC = ()=> {
  
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(initUser());
  })
  if(!useSelector<AppState>(state => state.app.loaded)) return <Preloader/>
   return (
     <div className="App">
      <Route path="/app"render={() => <BaseContent />}  />
      <Route exact path="/account" render={() => <FormAuth/>}  />
      <Route exact path="/reg" render={() => <FormContainer/>} />
      <Route exact path="/management" render={() => <Management/>}  />
      <Route exact path="/additionWorker" render={() => <WorkerForm/>}  />
   
     </div>

   );
}


export default App;
