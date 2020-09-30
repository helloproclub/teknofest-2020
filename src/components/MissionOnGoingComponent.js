import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import progressPic from './../assets/images/progress-img.png'

const MissionOnGoingComponent = () => {
    return (
        <div className="ongoing-bar">
            <img src={progressPic} alt="bar progress" />
            <p>come back later, don't forget to follow Instagram @helloproclub so you don't miss any information</p>
        </div>

    )
}

export default MissionOnGoingComponent
