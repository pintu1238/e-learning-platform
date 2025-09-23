import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";;
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/it_banner.png";

const DevBlog = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">Development</h3>
                                    <h1 className="heading">How Learners Are Future-Proofing Their Careers With AI and Cloud</h1>
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
                                    <p className="info_p">With many careers already lost to technological advancements, it’s no surprise that people are concerned about AI. In recent years, robotics and automation have replaced many repetitive manual labor jobs in manufacturing industries. Retail cashiers have also seen a steep decline in numbers as self-checkout and online shopping have grown in popularity.</p>
                                    <p className="info_p">Fortunately, many roles still require a distinctly human touch. While AI may be good at mimicking people for now, it’s not foolproof, and it requires human involvement and management.</p>
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

export default DevBlog