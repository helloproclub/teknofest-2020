import React, { Component } from 'react'
import logo from './../assets/images/Logo.png';
import FormLoginComponent from '../components/FormLoginComponent';
import { connect } from 'react-redux';
import { getLoadingScreen, postUserLogin } from '../actions/userAction';
import SnackbarComponent from '../components/SnackbarComponent';
import LoadingComponent from '../components/LoadingComponent';

const mapStateToProps = state => {
    return {
        loadingScreen: state.users.loading,
        getMsg: state.users.message,
        getColor: state.users.colorMessage
    }
}

class LoginUserContainer extends Component {
    // handleSubmit(data){
    //     // console.log(data)
    //     this.props.dispatch(postUserLogin(data, this.props.history))
    // }
    handleSubmit = async (data) => {        
        await this.props.login(data, this.props.history)
    }
    render() {
        let viewSnackbar
        if(this.props.getMsg !== false){
            console.log(this.props.getMsg)
            viewSnackbar = <SnackbarComponent conditionMsg={this.props.getColor} message={this.props.getMsg} />
        } else {
            viewSnackbar = ''
        }
        return (
            <div>
                {
                    this.props.loadingScreen ?
                        <LoadingComponent />
                        :
                        <div className="login-user-container" style={{ width: '100%' }}>
                            <div className="d-flex my-4">
                                <img className="mx-auto" src={logo} alt="logo proclub" />
                            </div>
                            <FormLoginComponent onSubmit={(data) => this.handleSubmit(data)} />

                            { viewSnackbar }
                        </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userData, history) => dispatch(postUserLogin(userData, history)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserContainer);
