"use client"
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import second_media_image from "../../../../public/images/login_banner_media.webp";
import "../../../../public/sass/pages/reset.scss";

const ResetPassword = () => {
    return (
        <section className="reset-password">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            <div className="left">
                                <div className="left_img">
                                    <Image src={LoginImg} alt="Reset Password Banner" title='Reset Password' fetchPriority='low' width={600} height={700} />
                                </div>
                                <div className="media_upr">
                                    <Image src={second_media_image} title="." alt='.' fetchPriority='low' height={300} width={500} />
                                </div>
                            </div>

                            <div className="right">
                                <div className="contant">
                                    <h1 className="auth_form_heading">Reset your password</h1>
                                    <p className='details'>Enter a new password below to secure your account.</p>
                                    <Form className='form-div'>
                                        <Form.Group className="password" controlId="formNewPassword">
                                            <Form.Control type="password" placeholder="New Password" />
                                        </Form.Group>
                                        <Form.Group className="password" controlId="formConfirmPassword">
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                        <Button href="/resetSuccess" type="submit" className='continue'>
                                            Reset Password
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

export default ResetPassword;
