'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../../public/sass/pages/cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Cart() {
  const courses = [
    {
      id: 1,
      title: 'The Complete AI Guide: Learn ChatGPT, Generative AI & More',
      instructors: 'By Julian Melanson and 2 others',
      rating: 4.5,
      ratingsCount: '52,313 ratings',
      hours: '39.5 total hours',
      lectures: 519,
      level: 'All Levels',
      price: 2489,
      thumb: '/images/third_sec1.webp',
      badge: 'Bestseller',
      premium: true,
    },
    {
      id: 2,
      title: 'Web Development Bootcamp 2025',
      instructors: 'By Colt Steele',
      rating: 4.7,
      ratingsCount: '89,120 ratings',
      hours: '72 total hours',
      lectures: 850,
      level: 'Beginner to Advanced',
      price: 2999,
      thumb: '/images/third_sec4.webp',
      badge: 'Hot & New',
      premium: false,
    },
  ];

  const totalPrice = courses.reduce((sum, c) => sum + c.price, 0);

  return (
    <section className="cart">
      <Container>
        <Row>
          <Col>
            <div className="shopping_cart">
              <div className="header_wrap">
                <h1 className="title">Shopping Cart</h1>
                <p className="subtitle">{courses.length} Courses in Cart</p>
              </div>

              <div className="grid">
                <section className="list">
                  {courses.map((course) => (
                    <article key={course.id} className="course_card">
                      <div className="thumb">
                        <Image
                          src={course.thumb}
                          alt="course thumbnail"
                          width={160}
                          height={90}
                        />
                      </div>

                      <div className="meta">
                        <h3 className="course_title">{course.title}</h3>
                        <p className="instructors">{course.instructors}</p>

                        <div className="row_badges">
                          <span className="badge">{course.badge}</span>
                          <div className="rating">
                            <span className="stars">
                              <ul className="stars">
                                <li>
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="empty"
                                  />
                                </li>
                              </ul>
                            </span>
                            <span className="rating_num">{course.rating}</span>
                            <span className="ratings_count">
                              ({course.ratingsCount})
                            </span>
                          </div>
                        </div>

                        <div className="stats">
                          <span>{course.hours}</span>
                          <span>•</span>
                          <span>{course.lectures} lectures</span>
                          <span>•</span>
                          <span>{course.level}</span>
                        </div>

                        <div className="actions">
                          <Link
                            href={`/cart/remove/${course.id}`}
                            className="link_btn"
                          >
                            Remove
                          </Link>
                          <Link
                            href={`/cart/save/${course.id}`}
                            className="link_btn"
                          >
                            Save for Later
                          </Link>
                        </div>
                      </div>

                      <div className="price_wrap">
                        <div className="price">
                          ₹{course.price.toLocaleString('en-IN')}
                        </div>
                        {course.premium && (
                          <div className="premium">
                            <span className="premium_dot" /> Premium
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </section>

                <aside className="summary">
                  <div className="total_row">
                    <span>Total:</span>
                    <strong>₹{totalPrice.toLocaleString('en-IN')}</strong>
                  </div>

                  <Link href="/checkout" className="checkout_btn">
                    Proceed to Checkout →
                  </Link>

                  <p className="not_charged">You won’t be charged yet</p>

                  <div className="coupon_box">
                    <input
                      type="text"
                      placeholder="Enter coupon"
                      className="coupon_input"
                    />
                    <Link href="/apply-coupon" className="apply_btn">
                      Apply Coupon
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;
