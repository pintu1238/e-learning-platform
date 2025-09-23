'use client';
import VM from '../../../public/images/vm.png';
// import ThirdSecImage from "../../../public/images/third_sec1.webp";
import Ericsson_logo from '../../../public/images/Ericsson_logo.svg.png';
import Cisco from '../../../public/images/Cisco_logo.png';
import HPE from '../../../public/images/HPE.svg';
import Samsung from '../../../public/images/Samsung_Logo.svg.png';
import Volks from '../../../public/images/volks.png';
import City from '../../../public/images/Citii.png';
import PG from '../../../public/images/pgl.jpg';
import Google from '../../../public/images/Google.webp';
import Swiggy from '../../../public/images/Swiggy-Logo.png';

import React from 'react';
import Image from 'next/image';
import '../../../public/sass/pages/fifth_sec.scss';
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';

const Fifth_sec = () => {
  const swiperRef = useRef(null);
  return (
    <section className="orginal_brand">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="p_brand">
              <p>
                Trusted by over 17,000 companies and millions of learners around
                the world
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={7}
              className="brand_Swiper"
              loop={true}
              speed={2000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              allowTouchMove={false}
              breakpoints={{
                // Smaller phones
                320: { slidesPerView: 3, spaceBetween: 10 },

                // 361px - 575px
                361: { slidesPerView: 4, spaceBetween: 15 },

                // 576px - 767px
                576: { slidesPerView: 5, spaceBetween: 20 },

                // 768px - 991px (tablets)
                768: { slidesPerView: 6, spaceBetween: 20 },

                // 992px - 1199px (medium desktops)
                992: { slidesPerView: 6, spaceBetween: 25 },

                // 1200px - 1299px
                1200: { slidesPerView: 7, spaceBetween: 25 },

                // 1300px - 1399px
                1300: { slidesPerView: 7, spaceBetween: 30 },

                // 1400px - 1599px
                1400: { slidesPerView: 7, spaceBetween: 30 },

                // 1600px - 1679px
                1600: { slidesPerView: 7, spaceBetween: 35 },

                // 1680px - 1919px
                1680: { slidesPerView: 7, spaceBetween: 35 },

                // 1920px and above
                1920: { slidesPerView: 7, spaceBetween: 40 },
              }}
            >
              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={Ericsson_logo}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={Cisco}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={HPE}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={Volks}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={City}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image src={PG} alt=".." title=".." fetchPriority="low" />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={Swiggy}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand">
                  <Link href="#" className="brand_logo">
                    <div className="brand_img">
                      <Image
                        src={Google}
                        alt=".."
                        title=".."
                        fetchPriority="low"
                      />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Fifth_sec;
