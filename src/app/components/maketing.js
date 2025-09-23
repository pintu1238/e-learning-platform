import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/marketingImage.jpg";

const Marketingpage = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">Marketing</h3>
                                    <h1 className="heading">Types Of Quantitative Research for Students and Researchers</h1>
                                    <p className="heading_description">Page Last Updated: February 2020</p>
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
                                    <p className="info_p">Quantitative research is a type of empirical investigation. That means the research focuses on verifiable observation as opposed to theory or logic. Most often this type of research is expressed in numbers. A researcher will represent and manipulate certain observations that they are studying. They will attempt to explain what it is they are seeing and what affect it has on the subject. They will also determine and what the changes may reflect. The overall goal is to convey numerically what is being seen in the research and to arrive at specific and observable conclusions. </p>
                                    <p className="info_p"> you cannot be “waiting for your turn to talk</p>
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

export default Marketingpage