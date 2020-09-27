import React, { Component } from 'react'
import logo from './../assets/images/Logo.png';
import FormLoginComponent from '../components/FormLoginComponent';
import { connect } from 'react-redux';
import { postUserLogin } from '../actions/userAction';

class LoginUserContainer extends Component {
    handleSubmit(data){
        this.props.dispatch(postUserLogin(data))
        // console.log(data)
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
export default connect()(LoginUserContainer);
