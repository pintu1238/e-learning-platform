"use client"
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
// import { CheckCircle } from 'lucide-react'; // Success icon
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import second_media_image from "../../../../public/images/login_banner_media.webp";
import "../../../../public/sass/pages/resetsuccess.scss";

const ResetSuccess = () => {
    return (
        <section className="reset-success">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            {/* Left Image */}
                            <div className="left">
                                <div className="left_img">
                                    <Image src={LoginImg} alt="Success Banner" title='Success' width={600} height={700} />
                                </div>
                                <div className="media_upr">
                                    <Image src={second_media_image} alt="." title="." width={500} height={300} />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="right">
                                <div className="contant">
                                    {/* <CheckCircle className="success-icon" /> */}
                                    <h1 className="auth_form_heading">Password Reset Successful!</h1>
                                    <p className="details">Your password has been successfully reset. You can now log in with your new credentials.</p>
                                    <Button href="/login" className="continue">Go to Login</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ResetSuccess;
