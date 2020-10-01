import React, { Component } from 'react'
import CreateUserContainer from './CreateUserContainer'
import '../assets/style.css';

export default class HomeContainer extends Component {
    render() {
        return (
            <div style={{width: "100%"}}>                
                <CreateUserContainer />
            </div>
        )
    }
}
