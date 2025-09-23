'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about_third.scss";



const Aboutus_third = () => {
    return (
        <>

            <section className="third">
                <Container>
                    <Row>
                        <Col>
                            <div className="skills">
                                <h1 className={"key"}>Skills are the key to unlocking potential</h1>

                              <div className="para">
                                <p >Whether you want to learn a new skill, train your teams, or share what you know with the world, you’re in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>

    )
}

export default Aboutus_third