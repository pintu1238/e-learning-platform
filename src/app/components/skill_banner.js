import React from 'react';
import '../../../public/sass/pages/skill_banner.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Skill_banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col>
            <div className="inner_parent">
              <div className="content">
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link href="#">Deevelopment</Link> &gt;
                    </li>
                    <li>
                      <Link href="#">Programming Language</Link> &gt;
                    </li>
                    <li>
                      <Link href="#">Python</Link>
                    </li>
                  </ul>
                </div>

                {/* Course Title */}
                <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>

                {/* Subtitle */}
                <p>
                  Master Python by building 100 projects in 100 days. Learn data
                  science, automation, build websites, games and apps!
                </p>

                {/* Creator Info */}
                <p className="creator">
                  Created by <Link href="#">Dr. AngelaYuo</Link>,{' '}
                  <Link href="#">Benza Maman</Link>,{' '}
                  <Link href="#">Leap Year Learning</Link>
                </p>

                {/* Footer Info */}
                <div className="footer_info">
                  <p>Last updated 8/2025</p>
                </div>
              </div>

              <div className="premium-card">
                <div className="left-box">
                  <span>Premium</span>
                </div>
                <div className="middle-content">
                  <p>
                    Access this top-rated course, plus 26,000+ more top-rated
                    courses, with a Udemy plan.
                    <a href="#">See Plans & Pricing</a>
                  </p>
                </div>
                <div className="right-info">
                  <div className="rating">
                    <p className="score">4.5</p>
                    <div className="stars">★★★★☆</div>
                    <a href="#">52,280 ratings</a>
                  </div>
                  <div className="learners">
                    <p className="count">300,033</p>
                    <p className="label">learners</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill_banner;
