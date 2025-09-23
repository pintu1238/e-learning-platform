"use client"
import React from 'react'
import "../../../public/sass/pages/profilepage.scss";
import { Form, Button } from 'react-bootstrap';

const ProfilePage = () => {
    return (
        <section className='profile_Edit'>
            <h3 className="heading_profile_edit">Edit profile</h3>
            <Form>
                <div className="inner_from">
                    <Form.Group className="input-area-div" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="input-area-div" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="input-area-div" controlId="formBasicPassword">
                        <Form.Label>D.O.B. </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="input-area-div bio-input-div" controlId="formBasicPassword">
                        <Form.Label>Bio </Form.Label>
                        <Form.Control type="textarea" placeholder="Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </section>
    )
}

export default ProfilePage