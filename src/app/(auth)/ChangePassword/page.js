"use client"
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import second_media_image from "../../../../public/images/login_banner_media.webp";
import "../../../../public/sass/pages/changepassword.scss";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
        // 🔹 API call yaha karoge
        alert("Password changed successfully!");
    };

    return (
        <section className="change-password">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="loginArea">
                            {/* Left Image */}
                            <div className="left">
                                <div className="left_img">
                                    <Image src={LoginImg} alt="Change Password Banner" title='Change Password' width={600} height={700} />
                                </div>
                                <div className="media_upr">
                                    <Image src={second_media_image} alt="." title="." width={500} height={300} />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="right">
                                <div className="contant">
                                    <h1 className="auth_form_heading">Change Password</h1>
                                    <p className="details">Update your account password below.</p>

                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="currentPassword">Current Password</label>
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                value={formData.currentPassword}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="newPassword">New Password</label>
                                            <input
                                                type="password"
                                                name="newPassword"
                                                value={formData.newPassword}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm New Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" className="submit">Update Password</Button>
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

export default ChangePassword;