import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import './App.css';

export default class App extends Component {

  render() {    
    return (
      <div className="background-cover">           
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />                            
        </BrowserRouter>
      </div>
    )
  }
}
