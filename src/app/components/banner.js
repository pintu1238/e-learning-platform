'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/banner.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import third_sec2 from '../../../public/images/third_sec2.webp';
import third_sec4 from '../../../public/images/third_sec4.webp';
import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const Banner = () => {
  library.add(fab, fas);

  return (
    <>
      <section className="banner_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                // navigation={true}
                // scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide className="slide1">
                  <div className="inner_area">
                    <div className="content">
                      <div className="text_area">
                        <h3 className="heading">
                          Full Stack <span className="s"> Web Developer </span>
                          Career Accelerator
                        </h3>
                        <p className="desc">
                          Your career in full stack web development starts here.
                          Fast-track learning and interview prep. Grow skills at
                          your own pace. Expand your earnings potential.
                        </p>
                        <div className="buy_area">
                          <Link href="#">Get started</Link>
                        </div>
                      </div>
                    </div>

                    <div className="card_area">
                      <div className="video_area">
                        <Image
                          src={third_sec2}
                          alt="Banner Image"
                          width={600}
                          height={350}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="slide2">
                  <div className="inner_area">
                    <div className="content">
                      <div className="text_area">
                        <h3 className="heading">
                          <span className="s"> AI Engineer </span>
                          Career Accelerator
                        </h3>
                        <p className="desc">
                          Your career in AI engineering starts here. Grow your
                          skills at your own pace. Confidently prep for
                          interviews. Expand your earnings potential.
                        </p>
                        <div className="buy_area">
                          <Link href="#">Get started</Link>
                        </div>
                      </div>
                    </div>

                    <div className="card_area">
                      <div className="video_area">
                        <Image
                          src={third_sec4}
                          alt="Banner Image"
                          width={600}
                          height={350}
                        />
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
  );
};

export default Banner;
