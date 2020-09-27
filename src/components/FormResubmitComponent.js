import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


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
            <Col md="12" className="input-style" >
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
                            {
                                ikon ? 
                                <FontAwesomeIcon icon={ikon} size="lg" color="white" />                             
                                : null
                            }   
                            </InputGroupText>
                        </InputGroupAddon>                                      
                </InputGroup>                
            </Col>
        </Row>
    )

class FormResubmitComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    <div className="component-regis mx-auto mt-5">
                        <div className="regis-card-1">
                            <p>Let's not be discouraged. fix it and don't give up until you win. Be brave and overcame your mistake...</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="name" component={renderField} label="FULL NAME" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="nim" component={renderField} label="NIM" />
                                </FormGroup>                             
                            </FormGroup>
                        </div>
                        <div className="regis-card-2">
                            <p>On this section you will need Google Drive link file. You can click This for example, and dont forget to make acces with “Anyone with the link”.</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="fotoKTM" ikon={faLink} component={renderField} label="PHOTO KTM" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="cv" ikon={faLink} component={renderField} label="CV/RESUME" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="coverLetter" ikon={faLink} component={renderField} label="COVER LETTER" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="linkedinLink" component={renderField} label="LINKEDIN LINK" />
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormGroup>
                                    <button className="btn-block btn-regis mt-4" type="submit" disabled={this.props.submitting}>
                                        Resubmit Submissions
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
                            </FormGroup>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

FormResubmitComponent = reduxForm({
    form: "formCreateUser",
    enableReinitialize: true,
})(FormResubmitComponent);


export default connect()(FormResubmitComponent);
