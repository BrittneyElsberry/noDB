import React from 'react';
import '../src/reset.css'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import JobListing from './components/JobListing'
import Main from './components/Main'
import Goals from './components/Goals/Goals'
import Profile from './components/Profile/Profile';


function App() {
  return (

    <React.Fragment>
    <Switch>
   
      <Route exact path='/' component={Auth}/>
      <Route path='/joblisting' component={JobListing}/>
      <Route path='/home' component={Main}/>
      <Route path='/goals' component={Goals}/>
      <Route path='/profile' component={Profile}/>
  
    </Switch>
  </React.Fragment>
  
  );
}

export default App
