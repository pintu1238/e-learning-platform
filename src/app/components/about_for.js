'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about.for.scss"
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Aboutus_for = () => {
    return (
        <>
            <section className="for_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                // navigation={true}
                                scrollbar={{ draggable: true }}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide className="slide1">

                                    <div className="video_text">
                                        <div className="left_area">
                                            <div className="video_area">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title=""
                                                    frameBorder="0"
                                                    allow=""

                                                ></iframe>
                                            </div>
                                        </div>

                                        <div className="right_area">
                                            <div className="text_area">
                                                <h1 >Learning and leading through change</h1>
                                            </div>

                                            <div className="para">
                                                <p>Chris and Vital live a world apart, but their shared passion for learning brought them together to create Project Magu — an internet-enabled school in Vital’s remote village in Rwanda.</p>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                            </Swiper>


                            

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Aboutus_for