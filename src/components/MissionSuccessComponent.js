import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        linkDiscord: state.users.missionReportDiscord,
    }
}

const MissionSuccessComponent = (props) => {
    return (
        <div>
            <div className="stage-card mx-auto">
                <p className="stage-title">Stage 1 : Go Beyond The Ordinary</p>
                <div className="stage-desc">
                    <p>Well Done!!</p>
                    <p>You have <span>successfully passed the first step.</span>  Let's not celebrate until we're out of here. Because the real war had just started.</p>
                    <center>
                        <p style={{margin: '2rem 0'}}>----</p>
                        <p>Welcome to Teknofest 2020 <br /> You've been invited to join our battlefield</p>
                    </center>
                </div>
                <a target="_blank" rel="noopener noreferrer" href={props.linkDiscord} className="btn btn-block btn-discord"> 
                    <FaDiscord size={40} />
                    Join Proclub Discord</a>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(MissionSuccessComponent)
