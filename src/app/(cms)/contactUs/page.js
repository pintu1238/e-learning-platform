"use client"
import React from 'react';
// import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "../../../../public/sass/pages/contactUs.scss";
import { Button, Col, Container, Row, Form, FormGroup, FormLabel, FormControl, FormText, FormCheck, InputGroup } from 'react-bootstrap';
import Image from 'next/image';

const data = [
    { id: 1, title: "Nature 1", src: "/images/LoginBannerImage.webp" },
];

const ContactUs = () => {
    return (
        <>
            <section className='banner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="banner_inner">
                                <h3 className='contact_heading'>Contact us</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Contact">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="inner_contact">
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                        <div className="left">
                                            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi doloremque a perferendis fuga aperiam quam eveniet facere, iusto deserunt.</p>

                                            <Form>
                                                <InputGroup className="data-input">
                                                    <Form.Control
                                                        placeholder="Enter your name"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                                <Form.Group className="data-input" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <InputGroup className="data-input">
                                                    <Form.Control placeholder='Enter your phone number' type="number" />
                                                </InputGroup>

                                                <InputGroup className='input-text data-input'>
                                                    <Form.Control as="textarea" aria-label="With textarea" placeholder='Enter your Message' />
                                                </InputGroup>

                                                <Form.Group className="data-input" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Check me out" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit" className='btn-area'>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                        <div className="right">
                                            <div className="gallery">
                                                {data.map((item) => (
                                                    <div key={item.id} className="gallery-item">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.title}
                                                            width={300}
                                                            height={200}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactUs