

'use client';

import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/analytics.scss';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import analytics_imageone from '../../../public/images/analytics_imageone.webp';
import analytics_imagetwo from '../../../public/images/analytics_imagetwo.webp';
import analytics_imagethree from '../../../public/images/analytics_imagethree.webp';
import analytics_imagefour from '../../../public/images/analytics_imagefour.png';
import analytics_imagefive from '../../../public/images/analytics_imagefive.png';

const Analytics = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="analytics">
        <Container>
          <Row>
            <Col>
              <div className="heading">
                <h3>Learning focused on your goals</h3>
              </div>

              <div className="analytics_area">
                {/* Cards Section */}
                <div className="cards_area">
                  <div className="card">
                    <div className="image_area">
                      <Image
                        src={analytics_imageone}
                        alt="Hands-on training"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="content">
                      <h3>Hands-on training</h3>
                      <p>
                        Upskill effectively with AI-powered coding exercises,
                        practice tests, and quizzes.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="image_area">
                      <Image
                        src={analytics_imagetwo}
                        alt="Certification prep"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="content">
                      <h3>Certification prep</h3>
                      <p>
                        Prep for industry-recognized certifications by solving
                        real-world challenges and earn badges along the way.
                      </p>
                      <div className="more">
                        <Link href="#">Find Out More</Link>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="image_area">
                      <Image
                        src={analytics_imagethree}
                        alt="Insights and analytics"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="content">
                      <h3>Insights and analytics</h3>
                      <div className="e">
                        <h3>Enterprise Plan</h3>
                      </div>
                      <p>
                        Fast-track goals with advanced insights plus a dedicated
                        customer success team to help drive effective learning.
                      </p>
                      <div className="more">
                        <Link href="#">Find Out More</Link>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="image_area">
                      <Image
                        src={analytics_imagefour}
                        alt="Customizable content"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="content">
                      <h3>Customizable content</h3>
                      <div className="e">
                        <h3>Enterprise Plan</h3>
                      </div>
                      <p>
                        Create tailored learning paths for team and organization
                        goals and even host your own content and resources.
                      </p>
                      <div className="more">
                        <Link href="#">Find Out More</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="image_area">
                  <Image
                    src={analytics_imagefive}
                    alt="Analytics Preview"
                    width={610}
                    height={667}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Analytics;
