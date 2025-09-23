"use client"
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import second_media_image from "../../../../public/images/login_banner_media.webp";
// import "../../../../public/sass/pages/forgot.scss";
import "../../../../public/sass/pages/forget.scss";

const ForgotPassword = () => {
    return (
        <section className="forgot-password">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            <div className="left">
                                <div className="left_img">
                                    <Image src={LoginImg} alt="Forgot Password Banner" title='Forgot Password' fetchPriority='low' width={600} height={700} />
                                </div>
                                <div className="media_upr">
                                    <Image src={second_media_image} title="." alt='.' fetchPriority='low' height={300} width={500} />
                                </div>
                            </div>

                            <div className="right">
                                <div className="contant">
                                    <h1 className="auth_form_heading">Forgot your password?</h1>
                                    <p className='emmail_details'>
                                        Enter your registered <span>email address</span> and we’ll send you a reset link.
                                    </p>
                                    <Form className='form-div'>
                                        <Form.Group className="email" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter your email" />
                                        </Form.Group>
                                        <Button href="/resetPassword" type="submit" className='continue'>
                                            Send Reset Link
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ForgotPassword;
