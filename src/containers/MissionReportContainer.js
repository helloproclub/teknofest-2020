import React, { Component } from 'react'
import MissionSuccessComponent from '../components/MissionSuccessComponent';
import logo from './../assets/images/Logo.png';
import MissionFailedComponent from '../components/MissionFailedComponent';
import Cookies from 'universal-cookie'
import { connect } from 'react-redux';
// import users from '../reducers/users';
import { changeStateMission, getSnackbars, userLogout, getLoadingScreen } from '../actions/userAction';
import MissionOnGoingComponent from '../components/MissionOnGoingComponent';
import LoadingComponent from '../components/LoadingComponent';
import SnackbarComponent from '../components/SnackbarComponent';


const cookies = new Cookies()


const mapStateToProps = state => {
    return {
        getMissionReport: state.users.missionReport,                              
        getMsg: state.users.message,
        getColor: state.users.colorMessage
    }
}

class MissionReportContainer extends Component {
    handleLogout = async () => {
        console.log("out")
        await this.props.loadingScreen()
        this.props.logout(this.props.history)
        
    }
    componentDidMount(){
        if(!cookies.get('token')) {     
            this.props.removeSnackbar()                    
            this.props.history.push('/login')                
        }      
        if(cookies.get('snackbar')){
            let data = cookies.get('snackbar')
            console.log(data)
            this.props.getSnackbar(data.message, data.color)
        }       
        // console.log(this.props.getDataLogin)
    }
    
    render() {
        let viewMission, titleMission,viewSnackbar
        if(this.props.getMissionReport === 1 || this.props.getMissionReport === "1") {
            titleMission = 'Mission Report'
            viewMission = <MissionSuccessComponent /> 
        } else if (this.props.getMissionReport === 2 || this.props.getMissionReport === "2") {
            titleMission = 'Mission Report'
            viewMission = <MissionFailedComponent />
        } else if (this.props.getMissionReport === 0 || this.props.getMissionReport === "0") {
            titleMission = 'You are still in progress'
            viewMission = <MissionOnGoingComponent />
        } else {
            titleMission = 'wait...'
            viewMission = <LoadingComponent />
        }
        if(this.props.getMsg !== false){
            console.log(this.props.getMsg)
            viewSnackbar = <SnackbarComponent conditionMsg={this.props.getColor} message={this.props.getMsg} />
        } else {
            viewSnackbar = ''
        }
        // console.log(this.props.messageRevision)
        return (
            <div className="mission-report-container" style={{width: '100%'}}>                
                <div className="d-flex header-mission">
                    <img src={logo} alt="logo proclub"  />
                    <div>
                        <button href="#" className="btn mr-auto btn-logout" onClick={this.handleLogout}>                     
                        Logout</button>

                    </div>
                </div>
                <div className="title mb-3">
                    <p>Teknofest 2020</p>
                    <h1>
                        { titleMission }
                    </h1>                    
                </div>  
                {
                    viewMission
                }     
                {
                    viewSnackbar
                }                
                
            </div>     
        )
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        getMission: dispatch(changeStateMission()),        
        getSnackbar: (msg, color) => dispatch(getSnackbars(msg, color)),        
        removeSnackbar: () => dispatch(getSnackbars(false, false)),        
        logout: (history) => dispatch(userLogout(history)),
        loadingScreen: () => dispatch(getLoadingScreen())
    }        
}



export default connect(mapStateToProps, mapDispatchToProps)(MissionReportContainer);
