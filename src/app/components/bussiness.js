import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/bussiness.webp";

const BussinessPage = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">Business</h3>
                                    <h1 className="heading">How to Become a Project Manager in 2022: A Step-by-Step Guide</h1>
                                    <p className="heading_description">Page Last Updated: November 2021</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="info">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner_info">
                                <div className="left">
                                    <p className="info_p"> A project manager will work with their team to produce the project roadmap and to manage the expectations of the company and the product owner.</p>
                                    <p className="info_p"> Do you know what “active listening” is? Project managers have to do it all the time. Active listening is the act of keeping engaged while talking with someone, so you truly absorb what they have to say. The role of a project manager is often to ensure that you communicate effectively with all involved parties. You must always be actively listening; you cannot be “waiting for your turn to talk</p>
                                </div>
                                <div className="right">
                                    <div className="right_info_image">
                                        <Image src={infoImage} alt="right_info_image" title="right_info_image" fetchPriority='low' height={150} width={150} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BussinessPage