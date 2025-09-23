// Error404.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import "../../../public/sass/pages/error_404.scss";

const Error404 = () => {
  return (
    <section className="error-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <div className="error-content">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>
                Sorry, the page you're looking for doesn't exist or has been
                moved.
              </p>
              <Link href="/" className="back-home">
                ⬅ Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Error404;
