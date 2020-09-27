import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import LoginUserContainer from './containers/LoginUserContainer';
import './App.css';
import MissionReportContainer from './containers/MissionReportContainer';
import ResubmitContainer from './containers/ResubmitContainer';

export default class App extends Component {

  render() {    
    return (
      <div className="background-cover">           
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />                            
          <Route path="/login" component={LoginUserContainer} />            
          <Route path="/mission-report" component={MissionReportContainer} />            
          <Route path="/resubmit" component={ResubmitContainer} />               
        </BrowserRouter>
      </div>
    )
  }
}
