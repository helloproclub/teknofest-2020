import React, { Component } from 'react'
import MissionSuccessComponent from '../components/MissionSuccessComponent';
import logo from './../assets/images/Logo.png';
import MissionFailedComponent from '../components/MissionFailedComponent';
import Cookies from 'universal-cookie'
import { connect } from 'react-redux';
// import users from '../reducers/users';
import { changeStateMission } from '../actions/userAction';


const cookies = new Cookies()

let missionReport = true;

const mapStateToProps = state => {
    return {
        getMissionReport: state.users.missionReport,      
    }
}

class MissionReportContainer extends Component {
    componentDidMount(){
        if(!cookies.get('token')) this.props.history.push('/login')                
    }
    render() {
        let viewMission
        if(this.props.getMissionReport === "true" || this.props.getMissionReport === true) {
            viewMission = <MissionSuccessComponent /> 
        } else {
            viewMission = <MissionFailedComponent />
        }
        return (
            <div className="mission-report-container" style={{width: '100%'}}>                
                <img src={logo} alt="logo proclub"  />
                <div className="title mb-3">
                    <p>Teknofest 2020</p>
                    <h1>Mission Report</h1>
                </div>  
                {
                    viewMission
                }              
            </div>     
        )
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        getMission: dispatch(changeStateMission()),        
    }        
}



export default connect(mapStateToProps, mapDispatchToProps)(MissionReportContainer);
