import React, { Component } from 'react'
// import { Container } from 'reactstrap'
import { connect } from "react-redux";
import { postUserCreate } from '../actions/userAction';
import FormResubmitComponent from '../components/FormResubmitComponent';
import logo from './../assets/images/Logo.png';

class ResubmitContainer extends Component {
    handleSubmit(data){
        this.props.dispatch(postUserCreate(data))
    }
    render() {
        return (
            <div className="create-user-container" style={{width: '100%'}}>                
                <img src={logo} alt="logo proclub"  />
                <center><h1 className="mt-3" style={{color: '#20E9F6'}}>Teknofest 2020 Submission Fix</h1></center>
                <FormResubmitComponent onSubmit={(data) => this.handleSubmit(data)} />
            </div>
        )
    }
}

export default connect()(ResubmitContainer);
