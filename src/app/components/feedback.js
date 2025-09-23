import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/feedback.scss';
import Link from 'next/link';

const Feedback = () => {
  return (
    <div className="feedback">
      <Container>
        <div className="inner_parent">
          <div className="content">
            <h3>See what others are achieving through learning</h3>
          </div>

          <Row>
            <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
              <div className="card_item">
                <p className="quote">“</p>
                <div className="desc">
                  <p>
                    Because of this course I was able to clear my two
                    interviews... Thanks for making such wonderful content.
                  </p>
                </div>
                <div className="user">
                  <div className="circle">DS</div>
                  <div>
                    <p className="name">Diksha S</p>
                  </div>
                </div>
                {/* <div className="view_link">
                  <Link href="#">Business Intelligence (BI)</Link>
                </div> */}
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
              <div className="card_item">
                <p className="quote">“</p>
                <div className="desc">
                  <p>
                    This has helped me so much in my career...I joined as a
                    frontend engineer and eventually transitioned to full stack
                    engineer with the help of this course.
                  </p>
                </div>
                <div className="user">
                  <div className="circle">CB</div>
                  <div>
                    <p className="name">Chethan B</p>
                  </div>
                </div>
                {/* <div className="view_link">
                  <Link href="#">View this Go (golang) course</Link>
                </div> */}
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
              <div className="card_item">
                <p className="quote">“</p>
                <div className="desc">
                  <p>
                    Today, I am a software developer, and I credit a significant
                    part of my success to the solid foundation laid by this
                    course.
                  </p>
                </div>
                <div className="user">
                  <div className="circle">BK</div>
                  <div>
                    <p className="name">Batchu K</p>
                  </div>
                </div>
                {/* <div className="view_link">
                  <Link href="#">View this Java course</Link>
                </div> */}
              </div>
            </Col>

            <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
              <div className="card_item">
                <p className="quote">“</p>
                <div className="desc">
                  <p>
                    I would highly recommend this Web Development Bootcamp to
                    anyone interested in pursuing a career in web development or
                    looking to enhance their skills in this field.
                  </p>
                </div>
                <div className="user">
                  <div className="circle">AK</div>
                  <div>
                    <p className="name">Ankit K</p>
                  </div>
                </div>
                {/* <div className="view_link">
                  <Link href="#">View this Web Development Course</Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
