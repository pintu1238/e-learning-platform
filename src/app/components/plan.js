'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/plan.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Plan = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="plans">
        <Container>
          <Row>
            <Col>
              <div className="header">
                <h3>Accelerate growth — for you or your organization</h3>
                <p>
                  Reach goals faster with one of our plans or programs. Try one
                  free today or contact sales to learn more.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* Personal Plan */}
            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Personal Plan</h3>
                  <p>For you</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Individual</p>
                  </div>
                </div>

                <div className="bottom">
                  <p className="price">Starting at ₹500 per month</p>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 26,000+ top courses</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 26,000+ top courses</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 26,000+ top courses</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 26,000+ top courses</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* Team Plan */}
            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Team Plan</h3>
                  <p>For teams</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Multiple users</p>
                  </div>
                </div>

                <div className="bottom">
                  <p className="price">Starting at ₹500 per month</p>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 13,000+ top courses</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Certification prep</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Goal-focused recommendations</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">AI-powered coding exercises</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Analytics and adoption reports</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* Enterprise Plan */}
            <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
              <div className="card">
                <div className="top">
                  <h3>Enterprise Plan</h3>
                  <p>For organizations</p>
                  <div className="icon_area">
                    <FontAwesomeIcon icon={['fas', 'user-graduate']} />
                    <p>Enterprise</p>
                  </div>
                </div>

                <div className="bottom">
                  <p className="price">Starting at ₹500 per month</p>
                  <p>Billed monthly or annually. Cancel anytime.</p>

                  <div className="subs_area">
                    <Link href="#">Start subscription</Link>
                  </div>

                  <ul>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Access to 30,000+ top courses</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Certification prep</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Goal-focused recommendations</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">AI-powered coding exercises</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Advanced analytics and insights</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Dedicated customer success team</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">
                        International course collection featuring 15 languages
                      </p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">Customizable content</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">
                        Hands-on tech training with add-on
                      </p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={['fas', 'check']} />
                      <p className="feature">
                        Strategic implementation services with add-on
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Plan;
