

"use client";
import React, { useState } from "react";
import "../../../public/sass/pages/skillpage_paid.scss";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

const courseData = {
  title: "Data Science: Python for Data Analysis 2022 Full Bootcamp",
  videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
  sections: [
    {
      title:
        "Section 1: Mastering Python, Data Handling, Analysis and Visualization",
      lectures: [
        {
          title: "Intro to Python",
          video: "https://www.youtube.com/embed/rfscVS0vtbw",
        },
        {
          title: "Installing Python",
          video: "https://www.youtube.com/embed/YYXdXT2l-Gg",
        },
      ],
    },
    {
      title: "Section 2: The Basics of Python",
      lectures: [
        {
          title: "Variables and Data Types",
          video: "https://www.youtube.com/embed/W8KRzm-HUcc",
        },
        {
          title: "Control Flow",
          video: "https://www.youtube.com/embed/daefaLgNkw0",
        },
      ],
    },
    {
      title: "Section 3: Python Data Structures",
      lectures: [
        {
          title: "Lists and Tuples",
          video: "https://www.youtube.com/embed/W8KRzm-HUcc",
        },
        {
          title: "Dictionaries",
          video: "https://www.youtube.com/embed/daefaLgNkw0",
        },
      ],
    },
    {
      title: "Section 4: The Fundamentals of Python",
      lectures: [
        {
          title: "Functions",
          video: "https://www.youtube.com/embed/NSbOtYzIQI0",
        },
        {
          title: "Loops and Conditions",
          video: "https://www.youtube.com/embed/sBvaPopWOmQ",
        },
        {
          title: "Modules & Packages",
          video: "https://www.youtube.com/embed/CqvZ3vGoGs0",
        },
      ],
    },
    {
      title: "Section 5: Object Oriented Programming (OOP)",
      lectures: [
        {
          title: "Classes and Objects",
          video: "https://www.youtube.com/embed/JeznW_7DlB0",
        },
        {
          title: "Inheritance",
          video: "https://www.youtube.com/embed/RSl87lqOXDE",
        },
        {
          title: "Encapsulation & Polymorphism",
          video: "https://www.youtube.com/embed/ApwcuQcKfog",
        },
      ],
    },
    {
      title: "Section 6: Advanced Python Concepts",
      lectures: [
        {
          title: "Decorators",
          video: "https://www.youtube.com/embed/F6u5rhUQ6dU",
        },
        {
          title: "Generators",
          video: "https://www.youtube.com/embed/bD05uGo_sVI",
        },
      ],
    },
    {
      title: "Section 7: Working with Pandas",
      lectures: [
        {
          title: "Intro to Pandas",
          video: "https://www.youtube.com/embed/vmEHCJofslg",
        },
        {
          title: "DataFrames & Series",
          video: "https://www.youtube.com/embed/otCriSKVV_8",
        },
        {
          title: "Data Cleaning",
          video: "https://www.youtube.com/embed/0UA49DsH-xw",
        },
      ],
    },
    {
      title: "Section 8: NumPy for Data Analysis",
      lectures: [
        {
          title: "NumPy Basics",
          video: "https://www.youtube.com/embed/QUT1VHiLmmI",
        },
        {
          title: "Array Operations",
          video: "https://www.youtube.com/embed/8Mpc9ukltVA",
        },
      ],
    },
    {
      title: "Section 9: Data Visualization with Matplotlib",
      lectures: [
        {
          title: "Intro to Matplotlib",
          video: "https://www.youtube.com/embed/a9UrKTVEeZA",
        },
        {
          title: "Line and Bar Charts",
          video: "https://www.youtube.com/embed/3Xc3CA655Y4",
        },
      ],
    },
    {
      title: "Section 10: Advanced Visualizations with Seaborn",
      lectures: [
        {
          title: "Intro to Seaborn",
          video: "https://www.youtube.com/embed/GCZ3Vw0SXbA",
        },
        {
          title: "Heatmaps and Pairplots",
          video: "https://www.youtube.com/embed/-GzFW4Q4cDA",
        },
        {
          title: "Customizing Themes",
          video: "https://www.youtube.com/embed/hSPmj7mK6ng",
        },
      ],
    },
  ],
};

const Skillpage_paid = () => {
  const [currentVideo, setCurrentVideo] = useState(courseData.videoUrl);
  const [activeTab, setActiveTab] = useState("overview"); // ✅ Fixed missing state

  return (
    
    <section className="paid_section">
      <Container fluid>
        <Row>
          <Col>
            <div className="inner_parent">
              <div className="video_section">
                <h3>{courseData.title}</h3>
                <div className="content_row">
                  {/* Left - Video */}
                  <div className="left">
                    <div className="video_area">
                      <iframe
                        src={currentVideo}
                        frameBorder="0"
                        allowFullScreen
                        title="Video Player"
                      ></iframe>
                    </div>

                    <div className="course-player">
                      <div className="tabs">
                        {[
                          "overview",
                
                          "reviews"
                          
                        ].map((tab) => (
                          <button
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      <div className="tab-content">
                        {activeTab === "overview" && (
                          <div className="overview">
                            <h3 className="learn">
                              Learn web design in 1 hour with 25+ simple-to-use
                              rules and guidelines — tons of amazing web design
                              resources included!
                            </h3>
                            <ul>
                              <li>
                                <span>4.5</span>
                                <p>44,384 ratings</p>
                              </li>
                              <li>
                                <span>810,776</span>
                                <p>Students</p>
                              </li>
                              <li>
                                <span>2.5 hours</span>
                                <p>Total</p>
                              </li>
                            </ul>
                            <div className="area">
                              <div className="row_Area">
                                <FontAwesomeIcon
                                  icon={["far", "clock"]}
                                  className="icon"
                                />
                                <p>Last updated November 2024</p>
                              </div>
                              <div className="row_Area">
                                <FontAwesomeIcon
                                  icon={["fas", "globe"]}
                                  className="icon"
                                />
                                <p>Last updated November 2024</p>
                              </div>
                            </div>
                            <div className="card_area">
                              <div className="card_left">
                                <FontAwesomeIcon
                                  icon={["far", "clock"]}
                                  className="clockIcon"
                                />
                              </div>
                              <div className="card_right">
                                <div className="contant_area">
                                  <h3 className="learning">
                                    Schedule learning time
                                  </h3>
                                  <p className="p_learning">
                                    Learning a little each day adds up. Research
                                    shows that students who make learning a
                                    habit are more likely to reach their goals.
                                    Set time aside to learn and get reminders
                                    using your learning scheduler.
                                  </p>
                                  <ul>
                                    <li>
                                      <Link href="#">Get Started</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Dismiss</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === "reviews" && (
                          <div className="student-feedback">
  <h3>Student feedback</h3>
  <div className="feedback-summary">
    <div className="rating-left">
      <p className="rating-value">4.3</p>
      <div className="stars">
        <p>⭐ ⭐ ⭐ ⭐ ☆</p>
      </div>
      <p className="course-rating-text">Course Rating</p>
    </div>

    <div className="rating-bars">
      {[
        { stars: 5, percent: 44 },
        { stars: 4, percent: 35 },
        { stars: 3, percent: 16 },
        { stars: 2, percent: 3 },
        { stars: 1, percent: 2 },
      ].map((item, index) => (
        <div className="rating-row" key={index}>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
          <div className="rating-label">
            <p>
              {"⭐".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
              <a href="#" className="percent"> {item.percent}%</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


                          // <p>Reviews ka content yaha dikhayega.</p>
                        )}
                        
                      </div>
                    </div>
                  </div>

                  {/* Right - Accordion */}
                  <div className="right">
                    <h4>Course content</h4>
                    <Accordion defaultActiveKey="0" alwaysOpen>
                      {courseData.sections.map((section, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                          <Accordion.Header>{section.title}</Accordion.Header>
                          <Accordion.Body>
                            <ul className="lecture-list">
                              {section.lectures.map((lecture, idx) => (
                                <li
                                  key={idx}
                                  onClick={() => setCurrentVideo(lecture.video)}
                                >
                                  {lecture.title}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skillpage_paid;
