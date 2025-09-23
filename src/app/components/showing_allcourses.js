'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import '../../../public/sass/pages/showing_allcourses.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const imagesList = [
  '/images/all_courses_first.jpg',
  '/images/analytics_imageone.webp',
  '/images/analytics_imagetwo.webp',
  '/images/analytics_imagethree.webp',
  '/images/analytics_imagefour.png',
  '/images/analytics_imagefive.png',
  '/images/python_teacher.webp',
  '/images/third_sec1.webp',
  '/images/third_sec2.webp',
  '/images/third_sec3.webp',
  '/images/third_sec4.webp',
  '/images/third_sec5.webp',
];

const courseData = {
  'Data Science': {
    subs: ['Python', 'Machine Learning', 'Deep Learning'],
    cards: {
      Python: [
        { title: 'Python for Beginners', author: 'John Doe', price: 399 },
        { title: 'Intermediate Python', author: 'Jane Doe', price: 499 },
        { title: 'Python Data Structures', author: 'Alex', price: 599 },
        { title: 'Python for Data Science', author: 'Rahul', price: 699 },
        { title: 'NumPy & Pandas with Python', author: 'Simran', price: 799 },
      ],
      'Machine Learning': [
        { title: 'Intro to Machine Learning', author: 'Rahul', price: 699 },
        { title: 'Supervised Learning', author: 'Amit', price: 799 },
        { title: 'Unsupervised Learning', author: 'Sneha', price: 899 },
        { title: 'SVM & Decision Trees', author: 'Ravi', price: 999 },
        { title: 'ML Model Deployment', author: 'Nina', price: 1099 },
      ],
      'Deep Learning': [
        { title: 'Intro to Deep Learning', author: 'Arjun', price: 799 },
        { title: 'Neural Networks Basics', author: 'Priya', price: 899 },
        { title: 'CNN for Image Processing', author: 'Vikas', price: 999 },
        { title: 'RNN & LSTM Models', author: 'Neha', price: 1099 },
        { title: 'GANs & Advanced DL', author: 'Karan', price: 1299 },
      ],
    },
  },
  'Web Development': {
    subs: ['HTML', 'CSS', 'JavaScript'],
    cards: {
      HTML: [
        { title: 'HTML Crash Course', author: 'Ali', price: 299 },
        { title: 'Forms & Tables in HTML', author: 'Sara', price: 399 },
        { title: 'Semantic HTML', author: 'Karan', price: 499 },
        { title: 'HTML5 APIs', author: 'Rohit', price: 599 },
        { title: 'Accessible HTML', author: 'Nina', price: 699 },
      ],
      CSS: [
        { title: 'CSS Basics', author: 'Rohit', price: 299 },
        { title: 'Flexbox & Grid Mastery', author: 'Divya', price: 499 },
        { title: 'CSS Animations & Effects', author: 'Priya', price: 599 },
        { title: 'Sass & SCSS', author: 'Aman', price: 699 },
        { title: 'Tailwind CSS Complete', author: 'Sneha', price: 799 },
      ],
      JavaScript: [
        { title: 'JS for Beginners', author: 'Aman', price: 399 },
        { title: 'DOM Manipulation', author: 'Nina', price: 499 },
        { title: 'ES6+ Advanced JS', author: 'Vikas', price: 699 },
        { title: 'Async JS & Promises', author: 'Kavya', price: 799 },
        { title: 'JavaScript Projects', author: 'Arjun', price: 899 },
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
        { title: 'Remote Team Management', author: 'Simran', price: 799 },
        { title: 'Decision Making in Teams', author: 'Ravi', price: 899 },
      ],
      Communication: [
        { title: 'Effective Communication', author: 'Raj', price: 299 },
        { title: 'Public Speaking Mastery', author: 'Simran', price: 399 },
        { title: 'Business Writing', author: 'Sanjay', price: 499 },
        { title: 'Negotiation Skills', author: 'Ankit', price: 599 },
        { title: 'Interpersonal Skills', author: 'Nisha', price: 699 },
      ],
      Strategy: [
        { title: 'Business Strategy Basics', author: 'Nikhil', price: 699 },
        { title: 'Market Analysis', author: 'Pooja', price: 799 },
        { title: 'Growth Hacking', author: 'Manish', price: 899 },
        { title: 'Startup Strategy', author: 'Ravi', price: 999 },
        { title: 'Corporate Planning', author: 'Priya', price: 1099 },
      ],
    },
  },
};

const ShowingAllCourses = () => {
  library.add(fab, fas);
  const [visibleCourses, setVisibleCourses] = useState({});
  let imgIndex = 0;

  const handleToggleCourses = (category, sub) => {
    const key = `${category}-${sub}`;
    const total = courseData[category].cards[sub].length;
    setVisibleCourses((prev) => ({
      ...prev,
      [key]: prev[key] && prev[key] >= total ? 3 : total,
    }));
  };

  return (
    <section className="all_courses_page py-5">
      <Container>
        <Row>
          <Col>
            {Object.entries(courseData).map(([category, data]) => (
              <div key={category} className="mb-5">
                <h3 className="category_title mb-4">{category}</h3>

                {data.subs.map((sub) => {
                  const key = `${category}-${sub}`;
                  const total = data.cards[sub].length;
                  const visible = visibleCourses[key] || 3;

                  return (
                    <div key={sub} className="mb-4">
                      <h4 className="subcategory_title mb-3">{sub}</h4>

                      <Row>
                        {data.cards[sub].slice(0, visible).map((course, i) => {
                          const currentImg =
                            imagesList[imgIndex % imagesList.length];
                          imgIndex++;
                          return (
                            <Col lg={4} md={6} sm={12} key={i} className="mb-4">
                              <div className="course_card">
                                <div className="course_img">
                                  <Image
                                    src={currentImg}
                                    alt={course.title}
                                    fill
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="course_content">
                                  <h3 className="course_title">
                                    {course.title}
                                  </h3>
                                  <p className="course_author">
                                    {course.author}
                                  </p>
                                  <div className="review">
                                    {Array(5)
                                      .fill(0)
                                      .map((_, idx) => (
                                        <FontAwesomeIcon
                                          key={idx}
                                          icon={['fas', 'star']}
                                        />
                                      ))}
                                    <span> 4.7</span>
                                  </div>
                                  <div className="price">
                                    <p className="current_price">
                                      ${course.price}
                                    </p>
                                    <p className="old_price">
                                      ${course.price + 100}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                      </Row>

                      {total > 3 && (
                        <div className="text-center">
                          <button
                            className="show_more_btn"
                            onClick={() => handleToggleCourses(category, sub)}
                          >
                            {visible >= total ? 'Show Less' : 'Show More'}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            <div className="text-center mt-5">
              <Link href="/">Go Back Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShowingAllCourses;
