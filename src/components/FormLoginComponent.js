import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'


const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    ikon,
    readOnly,
    meta: { touched, error, warning },
}) => (
        <Row>
            <Col md="12">
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md="12" >
                {/* <input style={{backgroundColor: 'transparent'}} {...input} className="form-control form-control-sm" type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} ></input>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error} </p> ) ||
                (warning && <p style={{ color: "brown" }}>{warning} </p> ))
            }                                                      */}
                {/* <FontAwesomeIcon icon={ikon} size="lg" /> */}                
                <InputGroup>
                    <input className="input-text-login form-control" {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></input>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <FontAwesomeIcon icon={ikon} size="lg" color="white" />                             
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>

            </Col>
        </Row>
    )

class FormLoginComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    <div className="component-login mx-auto mt-5">
                        <div className="form-login">
                            <p className="form-title">Login to Teknofest 2020</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="email" ikon={faEnvelope} component={renderField} label="EMAIL" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="password" ikon={faLock} component={renderField} label="PASSWORD" />
                                </FormGroup>                               
                            </FormGroup>
                            <FormGroup>
                                <FormGroup>
                                    <button className="btn-block btn-regis mt-5" type="submit" disabled={this.props.submitting}>
                                        Register Account
                                    </button>
                                    <p className="link-text mt-4">Don't have any account? <a href="#">Register</a> now!</p>
                                </FormGroup>                                
                            </FormGroup>
                        </div>                        
                    </div>
                </form>

            </div>
        )
    }
}

FormLoginComponent = reduxForm({
    form: "formLoginUser",
    enableReinitialize: true,
})(FormLoginComponent);


export default connect()(FormLoginComponent);
