import React, { Component } from 'react'
import MissionSuccessComponent from '../components/MissionSuccessComponent';
import logo from './../assets/images/Logo.png';
import MissionFailedComponent from '../components/MissionFailedComponent';

let mission = true;
export default class MissionReportContainer extends Component {
    render() {
        return (
            <div className="mission-report-container" style={{width: '100%'}}>                
                <img src={logo} alt="logo proclub"  />
                <div className="title mb-3">
                    <p>Teknofest 2020</p>
                    <h1>Mission Report</h1>
                </div>
                { mission ? 
                    <MissionSuccessComponent />               
                : <MissionFailedComponent />
                }
            </div>     
        )
    }
}
