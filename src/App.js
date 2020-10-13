import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import LoginUserContainer from './containers/LoginUserContainer';
import './App.css';
import './assets/style.css';
import MissionReportContainer from './containers/MissionReportContainer';
import NotFoundContainer from './containers/NotFoundContainer';


export default class App extends Component {

  render() {    
    return (
      <div className="background-cover">           
        <BrowserRouter>          
          <Route path="/" exact component={LoginUserContainer} />            
          <Route path="/mission-report" exact component={MissionReportContainer} />                      
          <Route component={NotFoundContainer} />                      
        </BrowserRouter>
      </div>
    )
  }
}
