import React, { Component } from 'react'
// import { Container } from 'reactstrap'
import { connect } from "react-redux";
import { postUserCreate } from '../actions/userAction';
import FormRegisComponent from '../components/FormRegisComponent';
import logo from './../assets/images/Logo.png';

class CreateUserContainer extends Component {
    handleSubmit = async (data) => {                
        data = await {
            ...data,
            division: parseInt(data.division)
        }
        console.log(data)
        this.props.register(data, this.props.history)             
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

const mapDispatchToProps = dispatch => {
    return {
        register: (userData, history) => dispatch(postUserCreate(userData, history)),        
    }
}

export default connect(null, mapDispatchToProps)(CreateUserContainer);
