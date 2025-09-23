// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { Col, Container, Row } from 'react-bootstrap';
// import '../../../public/sass/pages/all_courses.scss';

// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import all_courses_first from '../../../public/images/all_courses_first.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Autoplay,
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
// } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const All_courses = () => {
//   library.add(fab, fas);
//   return (
//     <>
//       <section className="all_courses">
//         <Container>
//           <Row>
//             <Col>
//               <div className="inner_area">
//                 <div className="header">
//                   <h3>All the skills you need in one place</h3>
//                   <p>
//                     From critical skills to technical topics, Udemy supports
//                     your professional development.
//                   </p>
//                 </div>

//                 <nav className="tab_navigation">
//                   <ul>
//                     <li>
//                       <Link href="#" className="tab active">
//                         Data Science
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#" className="tab">
//                         IT Certifications
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#" className="tab">
//                         Leadership
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#" className="tab">
//                         Web Development
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#" className="tab">
//                         Communication
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="#" className="tab">
//                         Business Analytics & Intelligence
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </Col>
//           </Row>
//         </Container>

//         <div className="select_courses_area">
//           <Container>
//             <Row>
//               <Col>
//                 <div className="inner_area_two">
//                   <div className="skill_tags">
//                     <Link href="#" className="skill_tag active">
//                       <h3 className="skill_name">ChatGPT</h3>
//                       <p className="skill_learners">4M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">Data Science</h3>
//                       <p className="skill_learners">8M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">Python</h3>
//                       <p className="skill_learners">49.9M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">Machine Learning</h3>
//                       <p className="skill_learners">9M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">Deep Learning</h3>
//                       <p className="skill_learners">2M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">
//                         Artificial Intelligence (AI)
//                       </h3>
//                       <p className="skill_learners">4M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">Statistics</h3>
//                       <p className="skill_learners">1M+ learners</p>
//                     </Link>

//                     <Link href="#" className="skill_tag">
//                       <h3 className="skill_name">
//                         Natural Language Processing
//                       </h3>
//                       <p className="skill_learners">859.5k+ learners</p>
//                     </Link>
//                   </div>

//                   <div className="courses_area">
//                     <Swiper
//                       modules={[
//                         // Navigation,
//                         // Pagination,
//                         Scrollbar,
//                         A11y,
//                         Autoplay,
//                       ]}
//                       spaceBetween={50}
//                       slidesPerView={4}
//                       navigation={true}
//                       pagination={{ clickable: true }}
//                       // scrollbar={{ draggable: true }}
//                       // autoplay={{
//                       //   delay: 2500,
//                       //   disableOnInteraction: false,
//                       // }}
//                       loop={true}
//                       onSwiper={(swiper) => console.log(swiper)}
//                       onSlideChange={() => console.log('slide change')}
//                       breakpoints={{
//                         // Smaller phones
//                         320: { slidesPerView: 1, spaceBetween: 10 },

//                         // 361px - 575px
//                         361: { slidesPerView: 1, spaceBetween: 15 },

//                         // 576px - 767px
//                         576: { slidesPerView: 2, spaceBetween: 20 },

//                         // 768px - 991px (tablets)
//                         768: { slidesPerView: 3, spaceBetween: 20 },

//                         // 992px - 1199px (medium desktops)
//                         992: { slidesPerView: 3, spaceBetween: 25 },

//                         // 1200px - 1299px
//                         1200: { slidesPerView: 4, spaceBetween: 25 },

//                         // 1300px - 1399px
//                         1300: { slidesPerView: 4, spaceBetween: 30 },

//                         // 1400px - 1599px
//                         1400: { slidesPerView: 4, spaceBetween: 30 },

//                         // 1600px - 1679px
//                         1600: { slidesPerView: 4, spaceBetween: 35 },

//                         // 1680px - 1919px
//                         1680: { slidesPerView: 4, spaceBetween: 35 },

//                         // 1920px and above
//                         1920: { slidesPerView: 4, spaceBetween: 40 },
//                       }}
//                     >
//                       <SwiperSlide>
//                         <div className="course_card">
//                           <div className="course_image">
//                             <Image
//                               src={all_courses_first}
//                               alt="Full Stack Web Developer"
//                               title="images"
//                               width={100}
//                               height={100}
//                               fetchPriority="low"
//                             />
//                           </div>
//                           <div className="course_content">
//                             <h3>
//                               The Complete AI Guide: Learn ChatGPT, Generative
//                               AI & More
//                             </h3>
//                             <p>Julian Melanson, Benza Maman, Leap...</p>

//                             <div className="review">
//                               <ul>
//                                 <li>
//                                   <h3>4.7</h3>
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <p>(111,775)</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="price">
//                               <h3>$619</h3>
//                               <p>$700</p>
//                             </div>
//                             <div className="s">
//                               <h3>Bestseller</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                       <SwiperSlide>
//                         <div className="course_card">
//                           <div className="course_image">
//                             <Image
//                               src={all_courses_first}
//                               alt="Full Stack Web Developer"
//                               title="images"
//                               width={100}
//                               height={100}
//                               fetchPriority="low"
//                             />
//                           </div>
//                           <div className="course_content">
//                             <h3>
//                               The Complete AI Guide: Learn ChatGPT, Generative
//                               AI & More
//                             </h3>
//                             <p>Julian Melanson, Benza Maman, Leap...</p>

//                             <div className="review">
//                               <ul>
//                                 <li>
//                                   <h3>4.7</h3>
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <p>(111,775)</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="price">
//                               <h3>$619</h3>
//                               <p>$700</p>
//                             </div>
//                             <div className="s">
//                               <h3>Bestseller</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                       <SwiperSlide>
//                         <div className="course_card">
//                           <div className="course_image">
//                             <Image
//                               src={all_courses_first}
//                               alt="Full Stack Web Developer"
//                               title="images"
//                               width={100}
//                               height={100}
//                               fetchPriority="low"
//                             />
//                           </div>
//                           <div className="course_content">
//                             <h3>
//                               The Complete AI Guide: Learn ChatGPT, Generative
//                               AI & More
//                             </h3>
//                             <p>Julian Melanson, Benza Maman, Leap...</p>

//                             <div className="review">
//                               <ul>
//                                 <li>
//                                   <h3>4.7</h3>
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <p>(111,775)</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="price">
//                               <h3>$619</h3>
//                               <p>$700</p>
//                             </div>
//                             <div className="s">
//                               <h3>Bestseller</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                       <SwiperSlide>
//                         <div className="course_card">
//                           <div className="course_image">
//                             <Image
//                               src={all_courses_first}
//                               alt="Full Stack Web Developer"
//                               title="images"
//                               width={100}
//                               height={100}
//                               fetchPriority="low"
//                             />
//                           </div>
//                           <div className="course_content">
//                             <h3>
//                               The Complete AI Guide: Learn ChatGPT, Generative
//                               AI & More
//                             </h3>
//                             <p>Julian Melanson, Benza Maman, Leap...</p>

//                             <div className="review">
//                               <ul>
//                                 <li>
//                                   <h3>4.7</h3>
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <p>(111,775)</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="price">
//                               <h3>$619</h3>
//                               <p>$700</p>
//                             </div>
//                             <div className="s">
//                               <h3>Bestseller</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                       <SwiperSlide>
//                         <div className="course_card">
//                           <div className="course_image">
//                             <Image
//                               src={all_courses_first}
//                               alt="Full Stack Web Developer"
//                               title="images"
//                               width={100}
//                               height={100}
//                               fetchPriority="low"
//                             />
//                           </div>
//                           <div className="course_content">
//                             <h3>
//                               The Complete AI Guide: Learn ChatGPT, Generative
//                               AI & More
//                             </h3>
//                             <p>Julian Melanson, Benza Maman, Leap...</p>

//                             <div className="review">
//                               <ul>
//                                 <li>
//                                   <h3>4.7</h3>
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <FontAwesomeIcon icon={['fas', 'star']} />
//                                 </li>
//                                 <li>
//                                   <p>(111,775)</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="price">
//                               <h3>$619</h3>
//                               <p>$700</p>
//                             </div>
//                             <div className="s">
//                               <h3>Bestseller</h3>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     </Swiper>
//                     <div className="all_page">
//                       <Link href="#">Show All Courses</Link>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>
//     </>
//   );
// };

// export default All_courses;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/all_courses.scss';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import all_courses_first from '../../../public/images/all_courses_first.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const courseData = {
  'Data Science': {
    subs: ['Python', 'Machine Learning', 'Deep Learning'],
    cards: {
      Python: [
        { title: 'Python Basics', author: 'John Doe', price: 399 },
        { title: 'Advanced Python', author: 'Jane Doe', price: 499 },
        { title: 'Data Analysis with Python', author: 'Alex', price: 599 },
      ],
      'Machine Learning': [
        { title: 'ML Foundations', author: 'Rahul', price: 699 },
        { title: 'Regression Models', author: 'Amit', price: 799 },
        { title: 'Clustering Techniques', author: 'Sneha', price: 899 },
      ],
      'Deep Learning': [
        { title: 'Neural Networks', author: 'Sam', price: 799 },
        { title: 'CNNs Explained', author: 'Ravi', price: 899 },
        { title: 'RNN & LSTMs', author: 'Maya', price: 999 },
      ],
    },
  },

  'Web Development': {
    subs: ['HTML', 'CSS', 'JavaScript'],
    cards: {
      HTML: [
        { title: 'HTML Crash Course', author: 'Ali', price: 299 },
        { title: 'Forms & Tables', author: 'Sara', price: 399 },
        { title: 'Semantic HTML', author: 'Karan', price: 499 },
      ],
      CSS: [
        { title: 'CSS Basics', author: 'Rohit', price: 299 },
        { title: 'Flexbox/Grid Mastery', author: 'Divya', price: 499 },
        { title: 'CSS Animations', author: 'Priya', price: 599 },
      ],
      JavaScript: [
        { title: 'JS for Beginners', author: 'Aman', price: 399 },
        { title: 'DOM Manipulation', author: 'Nina', price: 499 },
        { title: 'ES6+ Advanced', author: 'Vikas', price: 699 },
      ],
    },
  },

  Leadership: {
    subs: ['Team Management', 'Communication', 'Strategy'],
    cards: {
      'Team Management': [
        { title: 'Managing Teams', author: 'Arjun', price: 499 },
        { title: 'Agile Leadership', author: 'Meena', price: 599 },
        { title: 'Conflict Resolution', author: 'Kavya', price: 699 },
      ],
      Communication: [
        { title: 'Effective Communication', author: 'Raj', price: 299 },
        { title: 'Public Speaking', author: 'Simran', price: 399 },
        { title: 'Business Writing', author: 'Sanjay', price: 499 },
      ],
      Strategy: [
        { title: 'Business Strategy Basics', author: 'Nikhil', price: 699 },
        { title: 'Market Analysis', author: 'Pooja', price: 799 },
        { title: 'Growth Hacking', author: 'Manish', price: 899 },
      ],
    },
  },
};

const All_courses = () => {
  library.add(fab, fas);

  // ---- State ----
  const [activeTab, setActiveTab] = useState('Data Science');
  const [activeSub, setActiveSub] = useState(
    courseData['Data Science'].subs[0]
  );

  return (
    <section className="all_courses">
      <Container>
        <Row>
          <Col>
            <div className="inner_area">
              <div className="header">
                <h3>All the skills you need in one place</h3>
                <p>
                  From critical skills to technical topics, Udemy supports your
                  professional development.
                </p>
              </div>

              {/* ---- Main Tabs ---- */}
              <nav className="tab_navigation">
                <ul>
                  {Object.keys(courseData).map((tab) => (
                    <li key={tab}>
                      <button
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => {
                          setActiveTab(tab);
                          setActiveSub(courseData[tab].subs[0]);
                        }}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="select_courses_area">
        <Container>
          <Row>
            <Col>
              <div className="inner_area_two">
                {/* ---- Sub Course Tags ---- */}
                <div className="skill_tags">
                  {courseData[activeTab].subs.map((sub) => (
                    <button
                      key={sub}
                      className={`skill_tag ${
                        activeSub === sub ? 'active' : ''
                      }`}
                      onClick={() => setActiveSub(sub)}
                    >
                      <h3 className="skill_name">{sub}</h3>
                      <p className="skill_learners">Learners Info</p>
                    </button>
                  ))}
                </div>

                {/* ---- Courses Swiper ---- */}
                <div className="courses_area">
                  <Swiper
                    modules={[Scrollbar, A11y, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      576: { slidesPerView: 2, spaceBetween: 20 },
                      992: { slidesPerView: 3, spaceBetween: 25 },
                      1200: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                  >
                    {courseData[activeTab].cards[activeSub].map((course, i) => (
                      <SwiperSlide key={i}>
                        <Link href="/skills_page">
                          <div className="course_card">
                            <div className="course_image">
                              <Image
                                src={all_courses_first}
                                alt={course.title}
                                title="images"
                                width={100}
                                height={100}
                                fetchPriority="low"
                              />
                            </div>
                            <div className="course_content">
                              <h3>{course.title}</h3>
                              <p>{course.author}</p>

                              <div className="review">
                                <ul>
                                  <li>
                                    <h3>4.7</h3>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={['fas', 'star']} />
                                  </li>
                                </ul>
                              </div>
                              <div className="price">
                                <h3>${course.price}</h3>
                                <p>${course.price + 100}</p>
                              </div>
                              <div className="s">
                                <h3>Bestseller</h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="all_page">
                    <Link href="/allcourses_page">Show All Courses</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default All_courses;
