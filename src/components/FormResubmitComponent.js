import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';



const mapStateToProps = state => {
    return {
        getData: state.users.getUserData,
        initialValues: {
            name: state.users.getUserData.name,
            nim: state.users.getUserData.nim,
            ktm_url: state.users.getUserData.ktm_url,
            cv_url: state.users.getUserData.cv_url,
            letter_url: state.users.getUserData.letter_url,
            linkedin_url: state.users.getUserData.linkedin_url,
            division: state.users.getUserData.division,
            email: state.users.getUserData.email,            
        }
    }
}

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
            <Col md="12" className="input-style" >
                {/* <input style={{backgroundColor: 'transparent'}} {...input} className="form-control form-control-sm" type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} ></input>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error} </p> ) ||
                (warning && <p style={{ color: "brown" }}>{warning} </p> ))
            }                                                      */}
                {/* <FontAwesomeIcon icon={ikon} size="lg" /> */}
                {
                    selectType ?
                        <Input type="select" {...input} id="exampleSelect">
                            <option value="1">Product Designer</option>
                            <option value="0">Software Engineering</option>
                            <option value="2">Business Analyst</option>
                        </Input>
                        :
                        <InputGroup>
                            <input className="form-control" {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></input>
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
                }
            </Col>
        </Row>
    )

class FormResubmitComponent extends Component {    
    render() {
        return (
            <div>
                <form  >
                    <div className="component-regis mx-auto mt-5">
                        <div className="regis-card-1">
                            <p>Let's not be discouraged. fix it and don't give up until you win. Be brave and overcame your mistake...</p>
                            <FormGroup>
                                <FormGroup>
                                    <Field type="text" name="name" component={renderField} label="FULL NAME" />
                                </FormGroup>
                                <FormGroup>
                                    <Field type="text" name="nim" component={renderField} label="NIM" disabled={true} />
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
                                    <button className="btn-block btn-regis mt-4" type="submit" disabled>
                                        Resubmit Submissions
                                    </button>
                                </FormGroup>                                
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


export default connect(mapStateToProps, null)(FormResubmitComponent);
