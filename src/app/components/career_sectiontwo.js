import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/career_sectiontwo.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-brands-svg-icons';

const Career_sectiontwo = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="sectiontwo">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading_area">
                <h3>What you ll learn</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="back_area">
                  <h3>1</h3>
                </div>
                <h3>JavaScript, React, & Node.js</h3>
                <p>Build fully-fledged websites and web apps.</p>

                <Link href="#" className="courseLink">
                  Course content <span className="arrow">›</span>
                </Link>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="back_area">
                  <h3>2</h3>
                </div>
                <h3>JavaScript, React, & Node.js</h3>
                <p>Build fully-fledged websites and web apps.</p>

                <Link href="#" className="courseLink">
                  Course content <span className="arrow">›</span>
                </Link>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="back_area">
                  <h3>3</h3>
                </div>
                <h3>JavaScript, React, & Node.js</h3>
                <p>Build fully-fledged websites and web apps.</p>

                <Link href="#" className="courseLink">
                  Course content <span className="arrow">›</span>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading_areatwo">
                <h3>Learn the skills that matter most</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={['fas', 'laptop-code']}
                    className="icon"
                  />

                  <div className="info">
                    <h3>Web development</h3>
                    <p>14M learners</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={['fas', 'laptop-code']}
                    className="icon"
                  />

                  <div className="info">
                    <h3>Web development</h3>
                    <p>14M learners</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={['fas', 'laptop-code']}
                    className="icon"
                  />

                  <div className="info">
                    <h3>Web development</h3>
                    <p>14M learners</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={['fas', 'laptop-code']}
                    className="icon"
                  />

                  <div className="info">
                    <h3>Web development</h3>
                    <p>14M learners</p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={['fas', 'laptop-code']}
                    className="icon"
                  />

                  <div className="info">
                    <h3>Web development</h3>
                    <p>14M learners</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Career_sectiontwo;
