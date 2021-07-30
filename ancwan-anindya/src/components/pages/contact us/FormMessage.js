import React, { useState } from 'react'
import { Button } from '../../Button'
import { Formik } from 'formik'
import Recaptcha from 'react-recaptcha'
import * as yup from 'yup'
import './FormMessage.css'
import { Form, Row, Col, Spinner } from 'react-bootstrap'

// const { Formik } = formik
const schema = yup.object().shape({
    name: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email('Invalid email').required(),
    message: yup.string().required()
})

function FormMessage() {
    const [isVerified, setVerified] = useState(false)

    const verifyCallback = (response) => {
        if(response) {
            setVerified(true)
        }
    }

    const recaptchaLoaded = () => {
        return (
            <Spinner animation="border" />
        )
    }

    const handleCaptcha = () => {
        if(isVerified) {
            alert('sent')
        } else {
            alert('not yet verified')
        }
    }

    const onSubmitVerified = (values) => {
        if(JSON.stringify(values, null, 2) !== null) {
            handleCaptcha()
        } else {
            alert('please fill in the field')
        }
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={async (values, { resetForm }) => {
                await onSubmitVerified(values);
                resetForm();
              }}
            initialValues ={{
                name: '',
                companyName: '',
                email: '',
                message: ''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                isValid,
                errors,
                values
            }) => (
                <div className='container-form'>
                    <div className='border-title-form'/>
                    <h1 className='title-form'>Drop a Message</h1>
                    <div className='form-container'>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control 
                                            required
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field can not be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formCompanyName">
                                        <Form.Label>Your Company Name</Form.Label>
                                        <Form.Control 
                                            requried
                                            name="companyName"
                                            value={values.companyName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.companyName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field can not be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control 
                                            required
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field can not be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={4} style={{margin: 'auto'}}>
                                    <Recaptcha
                                        sitekey="6LciGM0bAAAAAPJ-Ye_p21CLGpp69lEJI-OMAn23"
                                        render="explicit"
                                        onloadCallback={recaptchaLoaded}
                                        verifyCallback={verifyCallback}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            style={{height: '185px', width: '100%'}} 
                                            required
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            isInvalid={!!errors.message}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field can not be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{justifyContent: 'flex-end', display: 'flex', paddingRight: '20px', marginTop: '20px'}}>
                                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' type="submit" >
                                        SEND MESSAGE
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            )}
            
        </Formik>
    )
}

export default FormMessage
