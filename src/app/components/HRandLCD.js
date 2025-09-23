import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/info_img.jpg";

const HRandLCD = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">HR and L&D</h3>
                                    <h1 className="heading">3 Myths About Innovation (and Why They’re Harmful)</h1>
                                    <p className="heading_description">Page Last Updated: April 2022</p>
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
                                    <p className="info_p">Doing things the way they’ve always been done is rarely the way to win new clients, gain market share, or keep employees engaged. There’s constant pressure to innovate within the business world, whether it’s our products, our services, or even the way we do business itself. </p>
                                    <p className="info_p">The popular definition of innovation is producing something new: a new idea, method, or device. And it’s usually closely associated with creativity. But every story of innovation begins with a problem and the search for a solution.</p>
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

export default HRandLCD