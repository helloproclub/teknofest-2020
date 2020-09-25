import React, { Component } from 'react'
// import { Container } from 'reactstrap'
import { connect } from "react-redux";
import { postUserCreate } from '../actions/userAction';
import FormRegisComponent from '../components/FormRegisComponent';
import logo from './../assets/images/Logo.png';

class CreateUserContainer extends Component {
    handleSubmit(data){
        this.props.dispatch(postUserCreate(data))
    }
    render() {
        return (
            <div className="create-user-container" style={{width: '100%'}}>                
                <img src={logo} alt="logo proclub"  />
                <center><h1 className="mt-3">Register Account for Teknofest 2020</h1></center>
                <FormRegisComponent onSubmit={(data) => this.handleSubmit(data)} />
            </div>
        )
    }
}

export default connect()(CreateUserContainer);
