'use client';
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/faq.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-brands-svg-icons';

function FAQ() {
  library.add(fab, fas);
  return (
    <Container>
      <Row>
        <Col>
          <section className="faq_section">
            <h2 className="faq_title">Frequently asked questions</h2>

            <div className="faq_box">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Who are Career Accelerators for?
                  </Accordion.Header>
                  <Accordion.Body>
                    Career Accelerators are designed for individuals who want to
                    quickly gain industry-relevant skills and transition into
                    high-demand careers.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is any prior knowledge or experience required?
                  </Accordion.Header>
                  <Accordion.Body>
                    No prior knowledge is required for most programs.
                    Beginner-friendly courses are available, while advanced
                    tracks may expect basics.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How are courses selected for career accelerators?
                  </Accordion.Header>
                  <Accordion.Body>
                    Courses are curated by experts to match current industry
                    demands with hands-on learning.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What is a full-stack web developer?
                  </Accordion.Header>
                  <Accordion.Body>
                    Someone who works on both the front-end (UI) and back-end
                    (server, DB) of apps.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How long does it take to become a full-stack developer?
                  </Accordion.Header>
                  <Accordion.Body>
                    Typically 6–12 months of consistent learning and practice.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Is a Full-Stack Developer the same as a Web Developer?
                  </Accordion.Header>
                  <Accordion.Body>
                    Not exactly—web developers may specialize, full-stack covers
                    both ends.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Can I become a full stack developer with no experience?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes—start with fundamentals, projects, and consistent
                    practice.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
