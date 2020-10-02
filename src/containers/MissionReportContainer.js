import React, { Component } from 'react'
import MissionSuccessComponent from '../components/MissionSuccessComponent';
import logo from './../assets/images/Logo.png';
import MissionFailedComponent from '../components/MissionFailedComponent';
import Cookies from 'universal-cookie'
import { connect } from 'react-redux';
import { ImExit } from "react-icons/im";

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
        await this.props.loadingScreen()
        this.props.logout(this.props.history)

    }
    componentDidMount() {        
        if (!cookies.get('token')) {
            this.props.removeSnackbar()
            this.props.history.push('/login')
        }
        if (cookies.get('snackbar') && this.props.getMsg === false) {
            let data = cookies.get('snackbar')
            this.props.getSnackbar(data.message, data.color)
            cookies.remove('snackbar')                        
        } else {
            this.props.removeSnackbar()    
        }
    }
    render() {        
        let viewMission, titleMission, viewSnackbar
        if (this.props.getMissionReport === 1 || this.props.getMissionReport === "1") {
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
        if (this.props.getMsg !== false) {
            viewSnackbar = <SnackbarComponent conditionMsg={this.props.getColor} message={this.props.getMsg} />
        } else {
            viewSnackbar = ''
        }
        return (
            <div>

                <div className="d-flex header-mission">
                    <img src={logo} alt="logo proclub" />
                    <div>
                        <button href="#" className="btn mr-auto btn-logout" onClick={this.handleLogout}>
                            <ImExit /> Log Out</button>

                    </div>
                </div>
                <div className="mission-report-container" style={{ width: '100%' }}>
                    <div className="title mb-3">
                        <p>Teknofest 2020</p>
                        <h1>
                            {titleMission}
                        </h1>
                    </div>
                    {
                        viewMission
                    }
                    {
                        viewSnackbar
                    }

                </div>
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
