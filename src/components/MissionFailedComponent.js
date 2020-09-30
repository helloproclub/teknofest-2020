import React from 'react'
import { Link } from 'react-router-dom'

const MissionFailedComponent = () => {
    return (
        <div>
            <div className="stage-card mx-auto">
                <p className="stage-title stage-title-fail">Stage 1 : Overcome You Mistake</p>                
                <div className="stage-desc">
                    <p>Let's not be discouraged.</p>
                    <p>Apparently, there are some issue with your sumission:</p>                                        
                        <div className="problem-desc">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    <p>But, No hope is lost yet, <br /> Be brave and overcame your mistake...</p>                    
                    <p className="link-fix">&gt; <Link to="/resubmit">Fix your submission</Link></p>                    

                </div>
            </div>
        </div>
    )
}

export default MissionFailedComponent
