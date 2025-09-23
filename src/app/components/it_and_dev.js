import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/info_img.jpg";

const ItpageBlog = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">IT & Software</h3>
                                    <h1 className="heading">High-Demand Cybersecurity Jobs to Pursue in 2025</h1>
                                    <p className="heading_description">Page Last Updated: June 2025</p>
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
                                    <p className="info_p">Advancements in technology and adoption of cloud-native infrastructure has expanded the threat landscape, necessitating specialized cybersecurity expertise to defend against these attacks. Data breaches have hit every industry, and even major corporations often find themselves vulnerable to attack </p>
                                    <p className="info_p">In fact, in 2024 there was a 211% year over year increase in victim notices, largely due to 5 “mega-breaches” [1] across a variety of industries. Cybercrime is ever present, which is why demand for cybersecurity professionals continues to grow. The U.S. Bureau of Labor Statistics (BLS) projects 33% growth for information security analysts from 2023 to 2033.</p>
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

export default ItpageBlog