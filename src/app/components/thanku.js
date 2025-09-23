import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import "../../../public/sass/pages/thanku.scss"; 

const ThankYou = () => {
  return (
    <section className="thank-you-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <div className="thank-you-content">
              <h1>🎉 Thank You!</h1>
              <h2>Your purchase was successful</h2>
              <p>
                You now have full access to your course. We’ve also sent you a
                confirmation email.
              </p>

              {/* Link with proper href, here "#" is used as per your request */}
              <Link href="#" className="go-dashboard">
                Go to Dashboard
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
