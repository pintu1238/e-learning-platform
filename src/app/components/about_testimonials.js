'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/Aboutus_testimonials.scss"


const Aboutus_testimonials = () => {
    return (
        <>
        <section className="case_studies">
      <Container>
        <Row>
            <Col>
        <div className="case_intro">
          <p>
            We help organizations of all types and sizes prepare for the path ahead — wherever it leads.
            Our curated collection of business and technical courses help companies, governments,
            and nonprofits go further by placing learning at the center of their strategies.
          </p>
          <button className="learn_more">Learn more</button>
        </div>

        
        </Col>
        </Row>
      </Container>
    </section>

        </>

    )
}

export default Aboutus_testimonials