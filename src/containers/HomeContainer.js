import React, { Component } from 'react'
import CreateUserContainer from './CreateUserContainer'
// import HeroComponent from '../components/HeroComponent'
import '../assets/style.css';
// import { Row, Col } from 'reactstrap'

export default class HomeContainer extends Component {
    render() {
        return (
            <div style={{width: "100%"}}>                
                <CreateUserContainer />                    
            </div>
        )
    }
}