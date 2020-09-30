import React, { Component } from 'react'
import MissionSuccessComponent from '../components/MissionSuccessComponent';
import logo from './../assets/images/Logo.png';
import MissionFailedComponent from '../components/MissionFailedComponent';
import Cookies from 'universal-cookie'
import { connect } from 'react-redux';
// import users from '../reducers/users';
import { changeStateMission, getSnackbars } from '../actions/userAction';
import MissionOnGoingComponent from '../components/MissionOnGoingComponent';
import SnackbarComponent from '../components/SnackbarComponent';


const cookies = new Cookies()


const mapStateToProps = state => {
    return {
        getMissionReport: state.users.missionReport,                      
        messageRevision: state.users.missionReportMessage,                      
    }
}

class MissionReportContainer extends Component {
    componentDidMount(){
        if(!cookies.get('token')) {
            this.props.removeSnackbar()     
            this.props.history.push('/login')                
        }
        // console.log(this.props.getDataLogin)
    }
    render() {
        let viewMission
        if(this.props.getMissionReport === 1 || this.props.getMissionReport === "1") {
            viewMission = <MissionSuccessComponent /> 
        } else if (this.props.getMissionReport === 2 || this.props.getMissionReport === "2") {
            viewMission = <MissionFailedComponent />
        } else {
            viewMission = <MissionOnGoingComponent />
        }
        // console.log(this.props.messageRevision)
        return (
            <div className="mission-report-container" style={{width: '100%'}}>                
                <div className="d-flex header-mission">
                    <img src={logo} alt="logo proclub"  />
                    <div>
                        <a href="#" className="btn mr-auto btn-discord">                     
                        Logout</a>

                    </div>
                </div>
                <div className="title mb-3">
                    <p>Teknofest 2020</p>
                    <h1>You are still in progress</h1>
                    {
                        
                    }
                </div>  
                {
                    viewMission
                }     

                 {/* <SnackbarComponent conditionMsg={this.props.getColor} message={this.props.getMsg} />          */}
                
            </div>     
        )
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        getMission: dispatch(changeStateMission()),        
        removeSnackbar: () => dispatch(getSnackbars(false, false)),        
    }        
}



export default connect(mapStateToProps, mapDispatchToProps)(MissionReportContainer);
