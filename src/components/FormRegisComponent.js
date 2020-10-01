import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserValidation from '../validations/UserValidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faIdBadge, faLink, faLock, faUser } from '@fortawesome/free-solid-svg-icons';



const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    ikon,
    readOnly,
    selectType,
    meta: { touched, error, warning },
}) => (
        <Row>
            <Col md="12">
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md="12" className="input-style"  >
                {/* <input style={{backgroundColor: 'transparent'}} {...input} className="form-control form-control-sm" type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} ></input>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error} </p> ) ||
                (warning && <p style={{ color: "brown" }}>{warning} </p> ))
            }                                                      */}
                {/* <FontAwesomeIcon icon={ikon} size="lg" /> */}
                {
                    selectType ?
                    <Input type="select" {...input} defaultValue={0} id="exampleSelect">
                        <option value="0">Software Engineering</option>
                        <option value="1">Product Designer</option>                        
                        <option value="2">Business Analyst</option>
                    </Input> 
                    :
                    <InputGroup>
                        <input className="form-control" {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></input>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={ikon} size="lg" color="white" />                             
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    }                    
                {/* <input className="input-border" {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></input> */}
                {touched &&
                    ((error && <p style={{ color: "red", marginBottom: "0px" }}>{error} </p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning} </p>))
                }
            </Col>
        </Row>
    )

class FormRegisComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    <div className="component-regis mx-auto mt-5">
                        <div className="regis-card-1">
                            <p className="card-desc">For the purpose of participating in Teknofest 2020, your details are required.</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="email" ikon={faEnvelope} component={renderField} label="EMAIL" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="password" name="password" ikon={faLock} component={renderField} label="PASSWORD" />
                                </FormGroup>                                
                                <FormGroup>
                                    <Field type="text" name="name" ikon={faUser} component={renderField} label="NAMA LENGKAP" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="nim" ikon={faIdBadge} component={renderField} label="NIM" />
                                </FormGroup>  
                                <FormGroup>
                                    <Field type="select" selectType={true} name="division" component={renderField} label="SELECT DIVISION" />
                                </FormGroup>                              
                            </FormGroup>
                        </div>
                        <div className="regis-card-2">
                            <p className="card-desc">On this section you will need Google Drive link file. You can click <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/drive/answer/7166529?co=GENIE.Platform%3DDesktop&hl=en">This</a> for example, and dont forget to make acces with “Anyone with the link”.</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="ktm_url" ikon={faLink} component={renderField} label="PHOTO KTM" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="cv_url" ikon={faLink} component={renderField} label="CV/RESUME" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="letter_url" ikon={faLink} component={renderField} label="COVER LETTER" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="linkedin_url" ikon={faLink} component={renderField} label="LINKEDIN LINK" />
                                </FormGroup>                                
                            </FormGroup>
                            <FormGroup>
                                <FormGroup>
                                    <button className="btn-block btn-regis mt-4" type="submit" disabled={this.props.submitting}>
                                        Register Account
                                    </button>
                                </FormGroup>
                                {/* <FormGroup className="or-line">
                                        <span></span>
                                        <span>or</span>
                                        <span></span>
                                    </FormGroup>
                                    <FormGroup>
                                        <a href="#" className="btn btn-success btn-block">Check Status</a>
                                    </FormGroup> */}
                                <p className="link-text mt-4">Already have an account?&nbsp; <Link to="/login">Login
                                    </Link>
                                    &nbsp;here
                                </p>
                            </FormGroup>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

FormRegisComponent = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,    
    enableReinitialize: true,
})(FormRegisComponent);


export default connect()(FormRegisComponent);
