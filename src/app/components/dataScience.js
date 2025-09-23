import React from 'react'
import "../../../public/sass/pages/by_nav_Banner_blogs.scss";;
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import infoImage from "../../../public/images/DataBanner.png";

const DataBlog = () => {
    return (
        <>
            <section className='Bannner'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                            <div className="inner">
                                <div className="contant">
                                    <h3 className="head">Data Science</h3>
                                    <h1 className="heading">Top Data Science Interview Questions and Answers</h1>
                                    <p className="heading_description">Page Last Updated: April 2025</p>
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
                                    <p className="info_p">Preparing for a job interview in any field can be intimidating. If you’re looking for a job in data science and want to ace the interview, you need to be able to speak confidently on the key areas of the topic.</p>
                                    <p className="info_p">This comprehensive guide to the most common data science interview questions will give you a concise primer on Python, EDA (Exploratory Data Analysis), statistics, and machine learning concepts, along with expert answers and tips.</p>
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

export default DataBlog