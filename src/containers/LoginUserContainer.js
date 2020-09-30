import React, { Component } from 'react'
import logo from './../assets/images/Logo.png';
import FormLoginComponent from '../components/FormLoginComponent';
import { connect } from 'react-redux';
import { postUserLogin } from '../actions/userAction';




class LoginUserContainer extends Component {
    // handleSubmit(data){
    //     // console.log(data)
    //     this.props.dispatch(postUserLogin(data, this.props.history))
    // }
    handleSubmit = async (data) => {
        await this.props.login(data, this.props.history)     
    }
    render() {
        return (
            <div className="login-user-container" style={{width: '100%'}}>
                <div className="d-flex my-4">
                    <img className="mx-auto" src={logo} alt="logo proclub" />
                </div>
                <FormLoginComponent onSubmit={(data) => this.handleSubmit(data)} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userData, history) => dispatch(postUserLogin(userData, history)),        
    }
}

export default connect(null, mapDispatchToProps)(LoginUserContainer);
