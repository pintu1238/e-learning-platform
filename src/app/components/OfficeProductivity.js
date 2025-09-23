import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/officeProductivity.webp";

const OfficeProductivity = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">Office Productivity</h3>
                                    <h1 className="heading">How to Use VLOOKUP: Demystifying the Google Sheets Function</h1>
                                    <p className="heading_description">Page Last Updated: September 2021</p>
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
                                    <p className="info_p">Unless you’ve missed the last couple of decades, you’ve noticed that the world around us is changing at a faster and faster pace. Over the last 600 or so years, humanity has witnessed an explosion in the creation and distribution of knowledge, thanks to such revolutionary inventions as the printing press, radio, film, and of course, the internet. </p>
                                    <p className="info_p"> You must always be actively listening; you cannot be “waiting for your turn to talk</p>
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

export default OfficeProductivity