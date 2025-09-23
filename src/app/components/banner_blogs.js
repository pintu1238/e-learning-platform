import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from "../../../public/images/blogs_banner.png";
import "../../../public/sass/pages/banner_blog.scss";
const BannerBlogs = () => {
    return (
        <section className="blogs">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                        <div className="inner_blogs">
                            <div className="left">
                                <div className="contant">
                                    <h1>Where possibilities begin</h1>
                                    <p className="contant_heading">
                                        We're a leading marketplace platform for learning and teaching online. Explore some of our most popular content and learn something new.
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="banner_img">
                                    <Image src={bannerImg} alt='banner_img' title='banner_img' fetchPriority='low' height={300} width={400} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerBlogs