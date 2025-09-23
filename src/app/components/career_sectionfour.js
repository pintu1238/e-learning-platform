'use client';
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/career_sectionfour.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-brands-svg-icons';
import sectionfour_image from '../../../public/images/third_sec5.webp';

import Card3_4 from '../../../public/images/third_sec4.webp';
import Card3_1 from '../../../public/images/third_sec1.webp';
const Career_sectionfour = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="sectionfour">
        <Container>
          <Row>
            <Col>
              <div className="inner_area">
                {/* Left Side */}
                <div className="left_area">
                  <div className="course_card">
                    <div className="image_area">
                      <Image
                        src={sectionfour_image}
                        alt="Course Thumbnail"
                        width={400}
                        height={250}
                        className="course_img"
                      />
                    </div>
                    <h3 className="course_title">
                      The Complete Full-Stack Web Development Bootcamp
                    </h3>
                    <p className="course_desc">
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, ...
                    </p>

                    <p className="instructor">
                      Dr. Angela Yu, Developer and Lead Instructor
                    </p>

                    <div className="course_info">
                      <ul>
                        <li className="badge">Course</li>
                        <li className="rating">
                          {' '}
                          <span className="icon">
                            <FontAwesomeIcon icon={['fas', 'star']} />
                          </span>
                          4.7
                        </li>
                        <li>450,386 ratings</li>
                        <li>61.5 total hours</li>
                        <li>374 lectures</li>
                      </ul>
                    </div>

                    <p className="update">All Levels • Updated 2/2025</p>

                    <div className="price">
                      <span className="discounted">₹399</span>
                      <span className="original">₹3,109</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="right_area">
                  <h4 className="content_heading">Content Covered</h4>
                  <Accordion defaultActiveKey="0" className="course_content">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        01 Introduction to Web Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Learn web architecture essentials.</li>
                          <li>Set up the development environment.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        02 Frontend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Master HTML, CSS, Flexbox, Grid, and Bootstrap 5.
                          </li>
                          <li>
                            Dive into JavaScript ES6, DOM manipulation, and
                            jQuery.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        03 Backend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Node.js & Express.js fundamentals</li>
                          <li>REST APIs and Databases (MongoDB, MySQL)</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        04 Git, GitHub, and Version Control
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Version Control Basics</li>
                          <li>Collaborating with GitHub</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        05 Authentication and Security
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>User Authentication</li>
                          <li>JWT, OAuth, and Security Best Practices</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        06 Building Applications using React.js
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>React Basics and Hooks</li>
                          <li>Project: Building a Full React App</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        07 Web3 Decentralised App Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Blockchain Fundamentals</li>
                          <li>Deploying DApps</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="inner_area">
                {/* Left Side */}
                <div className="left_area">
                  <div className="course_card">
                    <div className="image_area">
                      <Image
                        src={Card3_4}
                        alt="Course Thumbnail"
                        width={400}
                        height={250}
                        className="course_img"
                      />
                    </div>
                    <h3 className="course_title">
                      The Complete Full-Stack Web Development Bootcamp
                    </h3>
                    <p className="course_desc">
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, ...
                    </p>

                    <p className="instructor">
                      Dr. Angela Yu, Developer and Lead Instructor
                    </p>

                    <div className="course_info">
                      <ul>
                        <li className="badge">Course</li>
                        <li className="rating">
                          {' '}
                          <span className="icon">
                            <FontAwesomeIcon icon={['fas', 'star']} />
                          </span>
                          4.7
                        </li>
                        <li>450,386 ratings</li>
                        <li>61.5 total hours</li>
                        <li>374 lectures</li>
                      </ul>
                    </div>

                    <p className="update">All Levels • Updated 2/2025</p>

                    <div className="price">
                      <span className="discounted">₹399</span>
                      <span className="original">₹3,109</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="right_area">
                  <h4 className="content_heading">Content Covered</h4>
                  <Accordion defaultActiveKey="0" className="course_content">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        01 Introduction to Web Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Learn web architecture essentials.</li>
                          <li>Set up the development environment.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        02 Frontend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Master HTML, CSS, Flexbox, Grid, and Bootstrap 5.
                          </li>
                          <li>
                            Dive into JavaScript ES6, DOM manipulation, and
                            jQuery.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        03 Backend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Node.js & Express.js fundamentals</li>
                          <li>REST APIs and Databases (MongoDB, MySQL)</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        04 Git, GitHub, and Version Control
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Version Control Basics</li>
                          <li>Collaborating with GitHub</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        05 Authentication and Security
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>User Authentication</li>
                          <li>JWT, OAuth, and Security Best Practices</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        06 Building Applications using React.js
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>React Basics and Hooks</li>
                          <li>Project: Building a Full React App</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        07 Web3 Decentralised App Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Blockchain Fundamentals</li>
                          <li>Deploying DApps</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="inner_area">
                {/* Left Side */}
                <div className="left_area">
                  <div className="course_card">
                    <div className="image_area">
                      <Image
                        src={Card3_1}
                        alt="Course Thumbnail"
                        width={400}
                        height={250}
                        className="course_img"
                      />
                    </div>
                    <h3 className="course_title">
                      The Complete Full-Stack Web Development Bootcamp
                    </h3>
                    <p className="course_desc">
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, ...
                    </p>

                    <p className="instructor">
                      Dr. Angela Yu, Developer and Lead Instructor
                    </p>

                    <div className="course_info">
                      <ul>
                        <li className="badge">Course</li>
                        <li className="rating">
                          {' '}
                          <span className="icon">
                            <FontAwesomeIcon icon={['fas', 'star']} />
                          </span>
                          4.7
                        </li>
                        <li>450,386 ratings</li>
                        <li>61.5 total hours</li>
                        <li>374 lectures</li>
                      </ul>
                    </div>

                    <p className="update">All Levels • Updated 2/2025</p>

                    <div className="price">
                      <span className="discounted">₹399</span>
                      <span className="original">₹3,109</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="right_area">
                  <h4 className="content_heading">Content Covered</h4>
                  <Accordion defaultActiveKey="0" className="course_content">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        01 Introduction to Web Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Learn web architecture essentials.</li>
                          <li>Set up the development environment.</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        02 Frontend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Master HTML, CSS, Flexbox, Grid, and Bootstrap 5.
                          </li>
                          <li>
                            Dive into JavaScript ES6, DOM manipulation, and
                            jQuery.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        03 Backend Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Node.js & Express.js fundamentals</li>
                          <li>REST APIs and Databases (MongoDB, MySQL)</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        04 Git, GitHub, and Version Control
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Version Control Basics</li>
                          <li>Collaborating with GitHub</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        05 Authentication and Security
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>User Authentication</li>
                          <li>JWT, OAuth, and Security Best Practices</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        06 Building Applications using React.js
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>React Basics and Hooks</li>
                          <li>Project: Building a Full React App</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        07 Web3 Decentralised App Development
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Blockchain Fundamentals</li>
                          <li>Deploying DApps</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="career_card">
                <div className="left_area">
                  <div className="icon_box">
                    <Image
                      src={sectionfour_image}
                      alt="certificate"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="text_box">
                    <h3>Showcase your new skills</h3>
                    <p>
                      Career Accelerators courses include certificates of
                      completion you can add to your resume, portfolio, or
                      LinkedIn profile.
                    </p>
                    <div className="social_icons">
                      <Link href="/facebook">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </Link>
                      <Link href="/twitter">
                        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Area */}
                <div className="right_area">
                  <h3>Ready to launch your new career?</h3>
                  <div className="action_row">
                    <Link href="/get-started" className="btn">
                      Get started
                    </Link>
                    <span className="price">₹10,217</span>
                  </div>
                  <div className="learners">
                    <span className="">
                      <FontAwesomeIcon icon={['fas', 'user-check']} />
                    </span>{' '}
                    1.5M learners already enrolled
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Career_sectionfour;
