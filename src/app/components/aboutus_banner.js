'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/banner.scss';
import "../../../public/sass/pages/aboutus_banner.scss"
import Image from 'next/image';
import homepage from "../../../public/images/abouthomepage.png"


const Aboutus_banner = () => {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="baner_area">
                                <div className="left_area">
                                    <h1 className="text"> Welcome to where possibilities begin</h1>
                                </div>

                                <div className="right_area">
                                    <div className="img_area">
                                        <Image
                                            src={homepage}
                                            alt="logo"
                                            width={600}
                                            height={350}
                                        />
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
{/* 
                <Container>
                    <Row>
                        <Col>
                            <div className="second">
                                <p className="para">
                                    <Link href="#" className="log">
                                        Check out ore latest company news!
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container> */}


               
            </section>
        </>
    )
}

export default Aboutus_banner