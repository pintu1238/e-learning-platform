"use client"
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import second_media_image from "../../../../public/images/login_banner_media.webp";
import "../../../../public/sass/pages/otp.scss";

const Login = () => {
    library.add(fab)
    return (
        <section className="otp">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            <div className="left">
                                <div className="left_img">
                                    <Image src={LoginImg} alt="Login Banner" title='Login Banne' fetchPriority='low' width={600} height={700} />
                                </div>
                                <div className="media_upr">
                                    <Image src={second_media_image} title="." alt='.' fetchPriority='low' height={300} width={500} />
                                </div>
                            </div>

                            <div className="right">
                                <div className="contant">
                                    <h1 className="auth_form_heading">Check your inbox</h1>
                                    <p className='emmail_details'>Enter the 6-digit code we sent to <span>gsaininitin2710@gmail.com</span> to finish your sign up.</p>
                                    <Form className='form-div'>
                                        <Form.Group className="code-number" controlId="formBasicPassword">
                                            <Form.Control type="number" placeholder="code" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className='continue' href='/homepage'>
                                            Login
                                        </Button>
                                    </Form>
                                    <div className="other">
                                        <div className="option">
                                            <Link href="/reset-password" className='resend'>Resend code</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login;