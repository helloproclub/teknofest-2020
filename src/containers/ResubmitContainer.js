import React, { Component } from 'react'
import { connect } from "react-redux";
import { getLoadingScreen, getSnackbars, getUserData, putUserUpdate, userLogout } from '../actions/userAction';
import FormResubmitComponent from '../components/FormResubmitComponent';
import logo from './../assets/images/Logo.png';
import LoadingComponent from '../components/LoadingComponent';
import Cookies from 'universal-cookie';
import { ImExit } from 'react-icons/im';

const cookies = new Cookies()

const mapStateToProps = state => {
    return {
        loadingScreen: state.users.loading,
        getMissionReport: state.users.missionReport,
    }
}

class ResubmitContainer extends Component {
    handleLogout = async () => {
        await this.props.loadingOut()
        this.props.logout(this.props.history)

    }
    handleSubmit = (data) => {
        this.props.update(data, this.props.history)
    }
    componentDidMount() {
        if (!cookies.get('token')) {
            this.props.removeSnackbar()
            this.props.history.push('/login')
        }

    }
    render() {
        return (
            <div>
                {
                    this.props.loadingScreen ?
                        <LoadingComponent />
                        :
                        <div>
                            <div className="d-flex header-mission">
                                <img src={logo} alt="logo proclub" />
                                <div>
                                    <button href="#" className="btn mr-auto btn-logout" onClick={this.handleLogout}>
                                    <ImExit />  Log Out</button>
                                </div>
                            </div>
                            <div className="create-user-container" style={{ width: '100%' }}>
                                <center><h1 className="mt-3" style={{ color: '#20E9F6' }}>Teknofest 2020 Submission Fix</h1></center>
                                <FormResubmitComponent onSubmit={(data) => this.handleSubmit(data)} />
                            </div>
                        </div>


                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: dispatch(getUserData()),
        update: (userData, history) => dispatch(putUserUpdate(userData, history)),
        removeSnackbar: () => dispatch(getSnackbars(false, false)),
        logout: (history) => dispatch(userLogout(history)),
        loadingOut: () => dispatch(getLoadingScreen())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResubmitContainer);
