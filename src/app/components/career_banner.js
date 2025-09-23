import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/career_banner.scss';
import Link from 'next/link';
import Image from 'next/image';
import career_banner from '../../../public/images/third_sec1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

const Career_banner = () => {
  return (
    <>
      <section className="career_banner">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <div className="left_area">
                  <div className="course_detail_card">
                    <h2>Full Stack Web Developer Career Accelerator</h2>
                    <p>
                      Your career in full stack web development starts here.
                      Fast-track learning and interview prep. Grow skills at
                      your own pace. Expand your earnings potential.
                    </p>

                    <div className="stats_row">
                      <ul>
                        <li className="stat_item">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star_icon"
                          />
                          <h3>4.7</h3>
                          <p>average course rating</p>
                        </li>
                        <li className="stat_item">
                          <h3>126</h3>
                          <p>practice exercises</p>
                        </li>
                        <li className="stat_item">
                          <h3>87.8</h3>
                          <p>hours of content</p>
                        </li>
                      </ul>
                    </div>

                    <div className="price_row">
                      <button className="start_btn">Get started</button>
                      <div className="price">
                        <h3>₹1,287</h3>
                        <p className="old_price">₹10,217</p>
                      </div>
                    </div>

                    <div className="enrolled">
                      <FontAwesomeIcon icon={faUser} />
                      <span> 1.5M learners already enrolled</span>
                    </div>
                  </div>
                </div>

                <div className="right_area">
                  <div className="image_area">
                    <Image
                      src={career_banner}
                      alt="Full Stack Web Developer"
                      title="images"
                      width={400}
                      height={400}
                      fetchPriority="low"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Career_banner;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../../../public/sass/pages/career_banner.scss';
// import Link from 'next/link';
// import Image from 'next/image';
// import career_banner from '../../../public/images/third_sec1.webp';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

// const Career_banner = () => {
//   return (
//     <>
//       <section className="career_banner">
//         <Container>
//           <Row>
//             <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
//               <div className="inner_area">
//                 <div className="course_detail_card">
//                   <h2>Full Stack Web Developer Career Accelerator</h2>
//                   <p>
//                     Your career in full stack web development starts here.
//                     Fast-track learning and interview prep. Grow skills at your
//                     own pace. Expand your earnings potential.
//                   </p>

//                   <div className="stats_row">
//                     <ul>
//                       <li className="stat_item">
//                         <FontAwesomeIcon icon={faStar} className="star_icon" />
//                         <h3>4.7</h3>
//                         <p>average course rating</p>
//                       </li>
//                       <li className="stat_item">
//                         <h3>126</h3>
//                         <p>practice exercises</p>
//                       </li>
//                       <li className="stat_item">
//                         <h3>87.8</h3>
//                         <p>hours of content</p>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="price_row">
//                     <button className="start_btn">Get started</button>
//                     <div className="price">
//                       <h3>₹1,287</h3>
//                       <p className="old_price">₹10,217</p>
//                     </div>
//                   </div>

//                   <div className="enrolled">
//                     <FontAwesomeIcon icon={faUser} />
//                     <span> 1.5M learners already enrolled</span>
//                   </div>
//                 </div>

//                 <div className="image_area">
//                   <Image
//                     src={career_banner}
//                     alt="Full Stack Web Developer"
//                     title="images"
//                     width={400}
//                     height={400}
//                     fetchPriority="low"
//                   />
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Career_banner;
