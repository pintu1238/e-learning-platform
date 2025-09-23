import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import '../../../public/sass/pages/footer.scss';
import udemy_footer from '../../../public/images/udemy_logo.jpg';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
              <div className="inner_area">
                <h3>Page</h3>
                <ul>
                  <li>
                    <Link href="./aboutus">About us</Link>
                  </li>
                  <li>
                    <Link href="./careers">Career</Link>
                  </li>
                  <li>
                    <Link href="./skills_page">Skills</Link>
                  </li>
                  <li>
                    <Link href="./blogs">Blog</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
              <div className="inner_area">
                <h3>Useful Link</h3>
                <ul type="none">
                  <li>
                    <Link href="./terms_conditions">Term & Condition</Link>
                  </li>
                  <li>
                    <Link href="./Privacy_policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="./FAQ_S">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="./contactUs">Contact us</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
              <div className="inner_area">
                <h3>Social Links</h3>
                <ul>
                  <li>
                    <Link href="#">Facebook</Link>
                  </li>
                  <li>
                    <Link href="#">Instagram</Link>
                  </li>
                  <li>
                    <Link href="#">Twiter</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <hr />
          </Row>
          <div className="below_footer">
            <div className="footer_img">
              <div className="footer_logo">
                <Image
                  src={udemy_footer}
                  alt="udemy"
                  title="udemy_logo"
                  fetchPriority="high"
                  height={40}
                  width={100}
                />
              </div>
              <Link href="#">2025 Udemy inc.</Link>
            </div>

            {/* <div className="cs">
              <h3>Cookie Settings</h3>
            </div>
            <div className="language">
              <h3>language</h3>
            </div> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
