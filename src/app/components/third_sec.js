"use client";
import React from "react";
import "../../../public/sass/pages/third_sec.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Card3_1 from "../../../public/images/third_sec1.webp";
import Card3_2 from "../../../public/images/third_sec2.webp";
import Card3_3 from "../../../public/images/third_sec3.webp";
import Card3_4 from "../../../public/images/third_sec4.webp";
import Card3_5 from "../../../public/images/third_sec5.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const Third_sec = () => {
  return (
    <section className="third">
      <Container>
        <div className="inner_parent">
          <div className="content">
            <h3>Ready to reimagine your career?</h3>
            <p>
              Get the skills and real-world experience employers want with
              Career Accelerators.
            </p>
          </div>
          <div className="swiper-controls">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: true,
            // }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            breakpoints={{
              // Smaller phones
              320: { slidesPerView: 1, spaceBetween: 10 },

              // 361px - 575px
              361: { slidesPerView: 1, spaceBetween: 15 },

              // 576px - 767px
              576: { slidesPerView: 2, spaceBetween: 20 },

              // 768px - 991px (tablets)
              768: { slidesPerView: 2, spaceBetween: 20 },

              // 992px - 1199px (medium desktops)
              992: { slidesPerView: 3, spaceBetween: 25 },

              // 1200px - 1299px
              1200: { slidesPerView: 3, spaceBetween: 25 },

              // 1300px - 1399px
              1300: { slidesPerView: 3, spaceBetween: 30 },

              // 1400px - 1599px
              1400: { slidesPerView: 3, spaceBetween: 30 },

              // 1600px - 1679px
              1600: { slidesPerView: 3, spaceBetween: 35 },

              // 1680px - 1919px
              1680: { slidesPerView: 3, spaceBetween: 35 },

              // 1920px and above
              1920: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            <SwiperSlide>
              <Link href="/careerpage">
                <div className="career_card">
                  <div className="card_image">
                    <Image
                      src={Card3_1}
                      alt="Full Stack Web Developer"
                      title="images"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="card_content">
                    <h4>Full Stack Web Developer</h4>
                    <div className="rating_row">
                      <ul>
                        <li>
                          <div className="star_logo badge_item">
                            <FontAwesomeIcon
                              icon={["fas", "star"]}
                              className="star_icon"
                            />
                            4.7
                          </div>
                        </li>
                        <li>
                          <p className="badge_item">455K ratings</p>
                        </li>
                        <li>
                          <p className="badge_item">87.8 total hours</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/careerpage">
              <div className="career_card">
                <div className="card_image">
                  <Image
                    src={Card3_2}
                    alt="Full Stack Web Developer"
                    title="images"
                    fetchPriority="low"
                  />
                </div>
                <div className="card_content">
                  <h4>Data Science</h4>
                  <div className="rating_row">
                    <ul>
                      <li>
                        <div className="star_logo badge_item">
                          <FontAwesomeIcon
                            icon={["fas", "star"]}
                            className="star_icon"
                          />
                          4.7
                        </div>
                      </li>
                      <li>
                        <p className="badge_item">455K ratings</p>
                      </li>
                      <li>
                        <p className="badge_item">87.8 total hours</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/careerpage">
              <div className="career_card">
                <div className="card_image">
                  <Image
                    src={Card3_5}
                    alt="Full Stack Web Developer"
                    title="images"
                    fetchPriority="low"
                  />
                </div>
                <div className="card_content">
                  <h4>Ai Engineer</h4>
                  <div className="rating_row">
                    <ul>
                      <li>
                        <div className="star_logo badge_item">
                          <FontAwesomeIcon
                            icon={["fas", "star"]}
                            className="star_icon"
                          />
                          4.7
                        </div>
                      </li>
                      <li>
                        <p className="badge_item">455K ratings</p>
                      </li>
                      <li>
                        <p className="badge_item">87.8 total hours</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/careerpage">
              <div className="career_card">
                <div className="card_image">
                  <Image
                    src={Card3_3}
                    alt="Cyber Security"
                    title="images"
                    fetchPriority="low"
                  />
                </div>
                <div className="card_content">
                  <h4>Cyber Security</h4>
                  <div className="rating_row">
                    <ul>
                      <li>
                        <div className="star_logo badge_item">
                          <FontAwesomeIcon
                            icon={["fas", "star"]}
                            className="star_icon"
                          />
                          4.7
                        </div>
                      </li>
                      <li>
                        <p className="badge_item">455K ratings</p>
                      </li>
                      <li>
                        <p className="badge_item">87.8 total hours</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/careerpage">
              <div className="career_card">
                <div className="card_image">
                  <Image
                    src={Card3_4}
                    alt="Software Developer"
                    title="images"
                    fetchPriority="low"
                  />
                </div>
                <div className="card_content">
                  <h4>Software Developer</h4>
                  <div className="rating_row">
                    <ul>
                      <li>
                        <div className="star_logo badge_item">
                          <FontAwesomeIcon
                            icon={["fas", "star"]}
                            className="star_icon"
                          />
                          4.7
                        </div>
                      </li>
                      <li>
                        <p className="badge_item">455K ratings</p>
                      </li>
                      <li>
                        <p className="badge_item">87.8 total hours</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          {/* <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
            <div className="career_card">
              <div className="card_image">
                <Image
                  src={Card3_2}
                  alt="Full Stack Web Developer"
                  title="images"
                  fetchPriority="low"
                />
              </div>
              <div className="card_content">
                <h4>Data Science</h4>
                <div className="rating_row">
                  <ul>
                      <li>
                       
                        <div className="star_logo badge_item">
                          <FontAwesomeIcon
                            icon={['fas', 'star']}
                            className="star_icon"
                          />
                          4.7
                        </div>
                      </li>
                      <li>
                       
                        <p className="badge_item">455K ratings</p>
                      </li>
                      <li>
                        
                        <p className="badge_item">87.8 total hours</p>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </Col> */}
        </div>
      </Container>
    </section>
  );
};

export default Third_sec;
