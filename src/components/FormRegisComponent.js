import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faUser, faLink, faIdBadge } from '@fortawesome/free-solid-svg-icons'


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
                <input className="input-border" {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></input>

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
                            <p>For the purpose of participating in Teknofest 2020, your details are required.</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="email" component={renderField} label="EMAIL" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="password" component={renderField} label="PASSWORD" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="confirmPassword" component={renderField} label="CONFIRM PASSWORD" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="nama" component={renderField} label="NAMA LENGKAP" />
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
                                    <Field type="text" name="fotoKTM" component={renderField} label="FOTO KTM" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="cv" component={renderField} label="CV/RESUME" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="coverLetter" component={renderField} label="COVER LETTER" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="linkedinLink" component={renderField} label="LINKEDIN LINK" />
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
    enableReinitialize: true,
})(FormRegisComponent);


export default connect()(FormRegisComponent);
