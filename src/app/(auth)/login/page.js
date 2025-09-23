"use client"
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import React from 'react';
import Image from 'next/image';
import LoginImg from "../../../../public/images/LoginBannerImage.webp";
import "../../../../public/sass/pages/login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
// import { Col, Container, Row } from 'react-bootstrap';
import second_media_image from "../../../../public/images/login_banner_media.webp";
// import "../../../../public/sass/pages/login.scss";
import "../../../../public/sass/pages/login.scss";

const Login = () => {
  library.add(fab)
  return (
    <section className="login">
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
                  <h1 className="auth_form_heading">Log in to continue your learning journey</h1>
                  <Form className='form-div'>
                    <Form.Group className="email" controlId="formBasicPassword">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="password" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='continue' href='/homepage'>
                      Submit
                    </Button>
                  </Form>
                  <div className="separator_module">
                    <div className="line_hr"></div>
                    <h3 className='other_option'>Other log in options</h3>
                  </div>
                  <div className="icons">
                    <div className="icon_parent">
                      <FontAwesomeIcon icon={["fab", "google"]} className="fontAwsm google" />
                    </div>
                    <div className="icon_parent">
                      <FontAwesomeIcon icon={["fab", "facebook"]} className="fontAwsm facebook" />
                    </div>
                    <div className="icon_parent">
                      <FontAwesomeIcon icon={["fab", "apple"]} className="fontAwsm apple" />
                    </div>
                  </div>

                  <div className="other">
                    <div className="option">
                      <p>Don't have an account?   </p>
                      <Link href="/signup" className='sign_up'>Sign up</Link>
                    </div>
                    {/* <div className="option">
                      <Link href="#" className='sign_up'>Log in with your organization</Link>
                    </div> */}
                    <div className="option">
                      <Link href="/forget_passward" className='sign_up'>Forget Password</Link>
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