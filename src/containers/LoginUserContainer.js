import React, { Component } from 'react'
import logo from './../assets/images/Logo.png';
import FormLoginComponent from '../components/FormLoginComponent';

export default class LoginUserContainer extends Component {
    render() {
        return (
            <div className="login-user-container" style={{width: '100%'}}>
                <div className="d-flex my-4">
                    <img className="mx-auto" src={logo} alt="logo proclub" />
                </div>
                <FormLoginComponent />
            </div>
        )
    }
}
