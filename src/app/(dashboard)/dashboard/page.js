"use client"
import React from 'react'
import "../../../../public/sass/pages/profilepage.scss";
import { Form, Button } from 'react-bootstrap';

const ProfilePage = () => {
    return (
        <div className='profile_Edit'>
            <h3 className="heading_profile_edit">Public Profile</h3>
            <Form>
                <div className="inner_from">
                    <Form.Group className="input-area-div" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" defaultValue="Nitin" />
                    </Form.Group>
                    <Form.Group className="input-area-div" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" defaultValue="Kumar" />
                    </Form.Group>
                    <Form.Group className="input-area-div" controlId="formBasicPassword">
                        <Form.Label>D.O.B. </Form.Label>
                        <Form.Control type="date" defaultValue="2003-05-27" />
                    </Form.Group>
                    <Form.Group className="input-area-div bio-input-div" controlId="formBasicPassword">
                        <Form.Label>Biography </Form.Label>
                        <Form.Control as="textarea" placeholder="Description" defaultValue={`I am student of B Tech CSE.\nI love coding.\nI am learning React.`} rows={5} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default ProfilePage