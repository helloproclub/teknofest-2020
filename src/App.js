import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
// import HomeContainer from './containers/HomeContainer';
import LoginUserContainer from './containers/LoginUserContainer';
import './App.css';
import './assets/style.css';
import MissionReportContainer from './containers/MissionReportContainer';
import ResubmitContainer from './containers/ResubmitContainer';
import CreateUserContainer from './containers/CreateUserContainer';

export default class App extends Component {

  render() {    
    return (
      <div className="background-cover">           
        <BrowserRouter>
          <Route path="/" exact component={CreateUserContainer} />                            
          <Route path="/login" exact component={LoginUserContainer} />            
          <Route path="/mission-report" exact component={MissionReportContainer} />            
          <Route path="/resubmit" exact component={ResubmitContainer} />               
        </BrowserRouter>
      </div>
    )
  }
}
