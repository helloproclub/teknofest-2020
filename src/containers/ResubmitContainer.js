import React, { Component } from 'react'
// import { Container } from 'reactstrap'
import { connect } from "react-redux";
import { getLoadingScreen, getUserData, postUserCreate, putUserUpdate } from '../actions/userAction';
import FormResubmitComponent from '../components/FormResubmitComponent';
import logo from './../assets/images/Logo.png';
import LoadingComponent from '../components/LoadingComponent';

const mapStateToProps = state => {
    return {
        loadingScreen: state.users.loading,
    }
}

class ResubmitContainer extends Component {
    handleSubmit = (data) => {
        console.log(data)
        this.props.update(data, this.props.history)     
    }
    render() {
        console.log(this.props.loadingScreen)
        return (
            <div>
                {
                    this.props.loadingScreen ?
                        <LoadingComponent />
                        : 
                        <div className="create-user-container" style={{ width: '100%' }}>

                            <img src={logo} alt="logo proclub" />
                            <center><h1 className="mt-3" style={{ color: '#20E9F6' }}>Teknofest 2020 Submission Fix</h1></center>
                            <FormResubmitComponent onSubmit={(data) => this.handleSubmit(data)} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResubmitContainer);
