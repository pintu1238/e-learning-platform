import React from 'react'
import "../../../public/sass/pages/nav_blog.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';


const NavBlog = () => {
    return (

        <section className="nav_banner">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} ms={12} xs={12}>
                        <div className="innernav">
                            <nav>
                                <ul>
                                    <li><Link href="#">Development</Link></li>
                                    <li><Link href="#">IT & Software</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Data Science</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Soft Skills</Link>
                                    </li>
                                    <li>
                                        <Link href="#">HR and L&D</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Business</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Office Productivity</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Design</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Career Accelerator</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NavBlog