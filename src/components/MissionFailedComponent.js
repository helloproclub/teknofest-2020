import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        messageRevision: state.users.missionReportMessage,
    }
}

const MissionFailedComponent = (props) => {    
    return (
        <div>
            <div className="stage-card mx-auto">
                <p className="stage-title stage-title-fail">Stage 1 : Overcome Your Mistake</p>                
                <div className="stage-desc">
                    <p>Let's not be discouraged.</p>
                    <p>Apparently, there are some issue with your submission:</p>                                        
                        <div className="problem-desc">
                            
                            <p>
                                {props.messageRevision}
                            </p>
                        </div>
                    <p>But, No hope is lost yet, <br /> Be brave and overcame your mistake...</p>                                        
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(MissionFailedComponent)
