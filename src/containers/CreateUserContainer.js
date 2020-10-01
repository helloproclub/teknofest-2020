import React, { Component } from 'react'
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import { getSnackbars, postUserCreate } from '../actions/userAction';
import FormRegisComponent from '../components/FormRegisComponent';
import LoadingComponent from '../components/LoadingComponent';
import SnackbarComponent from '../components/SnackbarComponent';
import logo from './../assets/images/Logo.png';

const cookies = new Cookies()
const mapStateToProps = state => {
    return {
        loadingScreen: state.users.loading,
        getMsg: state.users.message,
        getColor: state.users.colorMessage
    }
}

class CreateUserContainer extends Component {
    handleSubmit = async (data) => {
        if (!data.division) {
            data = await {
                ...data,
                division: '0'
            }
        }
        data = await {
            ...data,
            division: parseInt(data.division)
        }
        console.log(data)
        this.props.register(data, this.props.history)
    }
    componentDidMount() {
        this.props.removeSnackbar()    
        if (cookies.get('token')) {
            let infoMsg = {
                message: 'Already Login',
                color: 'info'
            }
            cookies.set('snackbar', infoMsg)
            this.props.history.push('/mission-report')
        }        
    }
    render() {
        let viewSnackbar
        if (this.props.getMsg !== false) {
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
                        <div>
                            <div className="d-flex header-mission">
                                <img src={logo} alt="logo proclub" />                                
                            </div>
                            <div className="create-user-container" style={{ width: '100%' }}>                                
                                <center><h1 className="mt-3">Register Account for Teknofest 2020</h1></center>
                                <FormRegisComponent onSubmit={(data) => this.handleSubmit(data)} />
                                {viewSnackbar}
                            </div>

                        </div>

                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (userData, history) => dispatch(postUserCreate(userData, history)),
        removeSnackbar: () => dispatch(getSnackbars(false, false)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);
