"use client"
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "../../../../public/sass/pages/changeDashboardPassword.scss";

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
        alert("Password changed successfully!");
    };

    return (
        <div className="Change-password-dashboard">
            <div className="contant">
                <h1 className="auth_form_heading">Change Password</h1>
                {/* <p className="details">Update your account password below.</p> */}

                <Form onSubmit={handleSubmit}>
                    <div className="inner_form">
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
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword;