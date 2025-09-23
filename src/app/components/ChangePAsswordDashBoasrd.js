"use client"
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "../../../public/sass/pages/forget.scss";

const ForgotPasswordHello = () => {
    return (
        <section className="forgot-password">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            <div className="contant">
                                <h1 className="auth_form_heading">Forgot your password?</h1>
                                <p className='emmail_details'>
                                    Enter your registered <span>email address</span> and we’ll send you a reset link.
                                </p>
                                <Form className='form-div'>
                                    <Form.Group className="email" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Button href="/reset-success" type="submit" className='continue'>
                                        Send Reset Link
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ForgotPasswordHello;
