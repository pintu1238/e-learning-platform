'use client';
import React, { useState } from 'react';

import '../../../public/sass/pages/skill_content.scss';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Skill_content = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="learn_section">
      <Container>
        <Row>
          <Col>
            <div className="inner_parent">
              <div className="left">
                <div className="learn_box">
                  <h3>What You will learn</h3>
                  <div className="learn_list">
                    <ul>
                      <li>
                        Generative AI: Create content, synthesize information,
                        and learn faster than ever with effective prompt
                        engineering!
                      </li>
                      <li>
                        Productivity: Achieve goals faster with artificial
                        intelligence, manage time, prioritize tasks, and create
                        an optimized daily schedule!
                      </li>
                      <li>
                        Soft Skills: Improve your communication, leadership,
                        problem-solving, and social skills with personalized
                        ChatGPT feedback!
                      </li>

                      {showMore && (
                        <>
                          <li>
                            AI Video Tools: Create an AI avatar that transforms
                            scripts into presentations and quickly generate
                            social media content!
                          </li>
                          <li>
                            AI Writing Tools: Automate writing tasks, generate
                            effective copy, and integrate with Google
                            Sheets/Excel!
                          </li>
                          <li>
                            Branding: Develop a visual identity, design logos,
                            and generate content to establish a strong online
                            presence!
                          </li>
                          <li>
                            Business: Streamline your AI workflow, automate
                            repetitive tasks, and gain insights for your
                            business!
                          </li>
                          <li>
                            Midjourney: Use prompts, parameters, and modifiers
                            to create amazing images that showcase your
                            creativity!
                          </li>
                          <li>
                            Custom GPTs & AI Assistants: Build and optimize your
                            workflows, tailoring AI to your needs!
                          </li>
                        </>
                      )}
                    </ul>

                    <ul>
                      <li>
                        ChatGPT: Turn your creativity into paid work, generate
                        fresh ideas, reach new audiences, and scale your
                        projects!
                      </li>
                      <li>
                        Marketing: Generate targeted content with generative AI,
                        capitalize on trends, create ads, newsletters,
                        specialized content, and media campaigns!
                      </li>
                      <li>
                        AI Voice Tools: Easily create AI-generated speech for
                        any use case and even clone your own voice entirely!
                      </li>

                      {showMore && (
                        <>
                          <li>
                            AI Photo Tools: Add motion to images, dynamically
                            enhance image aesthetics, and create custom images
                            in bulk!
                          </li>
                          <li>
                            AI Music Tools: Create unique compositions for any
                            type of video and save time with a streamlined
                            creative process.
                          </li>
                          <li>
                            AI Art Generation: Create photos from prompts, fill
                            in or remove elements using inpainting and
                            outpainting techniques!
                          </li>
                          <li>
                            Multimodal: Combine multiple AI tools to create
                            immersive content that would previously take a team!
                          </li>
                          <li>
                            Coding: Combine the power of ChatGPT with
                            programming fundamentals, algorithms, debugging, and
                            documentation!
                          </li>
                          <li>
                            AI Automation: Automate tasks with Zapier, Make, and
                            OpenAI APIs, integrating AI efficiently and
                            scalably!
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="show_more">
                    <a onClick={toggleShowMore} role="button">
                      {showMore ? 'Show less' : 'Show more'}{' '}
                      <span>{showMore ? '▲' : '▼'}</span>
                    </a>
                  </div>
                </div>

                <div className="course_info_section">
                  {/* <div className="related_topics">
                    <h4>Explore related topics</h4>
                    <div className="tags">
                      <ul>
                        <li>
                          <Link href="#">Python</Link>
                        </li>
                        <li>
                          <Link href="#">Programming Language</Link>
                        </li>
                        <li>
                          <Link href="#">Development</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  <div className="course_includes">
                    <h4>This course includes:</h4>
                    <div className="includes_grid">
                      <ul>
                        <li>👤 Role Play</li>
                        <li>💻 52.5 hours on-demand video</li>
                        <li>📄 23 exercise</li>
                        <li>📥 141 downloadable resources</li>
                      </ul>
                      <ul>
                        <li>📱 Access on mobile and TV</li>
                        <li>💬 Closed captions</li>
                        <li>🎧 Audio description in existing audio</li>
                        <li>🏆 Certificate of completion</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="course_content">
                  <h3 className="title">Course content</h3>
                  <p className="subtitle">
                    54 sections • 519 lectures • 39h 22m total length
                  </p>

                  <Accordion
                    defaultActiveKey="0"
                    alwaysOpen
                    className="custom_accordion"
                  >
                    {/* Section 1 */}
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>The Complete AI Guide Introduction</h4>
                          <p>2 lectures • 4min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Welcome to the course</li>
                          <li>How to get the most out of this course</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 2 */}
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            Getting Started with ChatGPT, Prompting, and How LLM
                            s Work
                          </h4>
                          <p>9 lectures • 1hr 18min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Introduction to Prompting</li>
                          <li>Understanding LLMs</li>
                          <li>Basic Prompt Structures</li>
                          <li>Types of Prompts</li>
                          <li>Effective Prompting Techniques</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 3 */}
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT in Action: Features, Use Cases, and Tools
                          </h4>
                          <p>12 lectures • 1hr 32min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Exploring ChatGPT Features</li>
                          <li>Real-world Use Cases</li>
                          <li>Using ChatGPT for Productivity</li>
                          <li>Tools & Integrations</li>
                          <li>Case Studies</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 4 */}
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT: Prompt Engineering and Custom 17 Page
                            Prompting Guide PDF
                          </h4>
                          <p>22 lectures • 1hr 14min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Prompt Engineering Basics</li>
                          <li>Prompt Frameworks</li>
                          <li>Using the 17-page PDF Guide</li>
                          <li>Designing Better Prompts</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 5 */}
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT: Enhancements, Extensions, and Advanced
                            Features
                          </h4>
                          <p>23 lectures • 1hr 31min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>ChatGPT Pro Features</li>
                          <li>Extensions & Plugins</li>
                          <li>Integrating APIs</li>
                          <li>Advanced Features Overview</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 6 */}
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT Quick Skills: Simplify Information,
                            Proofread, and Organize Data
                          </h4>
                          <p>13 lectures • 29min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Summarizing Text</li>
                          <li>Proofreading Documents</li>
                          <li>Organizing Information</li>
                          <li>Converting Data Formats</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 7 */}
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT Quick Skills: Content Creation, Copywriting,
                            SEO, and Scripts
                          </h4>
                          <p>24 lectures • 1hr</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Writing Blog Posts</li>
                          <li>SEO Copywriting</li>
                          <li>Social Media Captions</li>
                          <li>Ad Scripts & Sales Copy</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 8 */}
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            ChatGPT Quick Skills: Self-Guided Learning,
                            Qualitative & Quantitative Research
                          </h4>
                          <p>21 lectures • 1hr</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Learning with ChatGPT</li>
                          <li>Conducting Research</li>
                          <li>Analyzing Data</li>
                          <li>Building Reports</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Section 9 */}
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <h4>
                            CustomGPTs: Create Your Own Custom Versions of
                            ChatGPT
                          </h4>
                          <p>7 lectures • 39min</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Introduction to CustomGPTs</li>
                          <li>Creating Your First CustomGPT</li>
                          <li>Deploying CustomGPT</li>
                          <li>Practical Examples</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="course-info">
                  <div className="requirement">
                    <h3>Requirements</h3>
                    <ul>
                      <li>
                        No programming experience needed - I'll teach you
                        everything you need to know
                      </li>
                      <li>
                        A 64-bit Mac or PC computer with 4GB of memory and
                        access to the internet
                      </li>
                      <li>
                        No paid software required - I'll teach you how to use
                        PyCharm, Jupyter Notebooks and Google Colab
                      </li>
                      <li>
                        I'll walk you through, step-by-step how to get all the
                        software installed and set up
                      </li>
                    </ul>
                  </div>

                  <div className="description">
                    <h3>Description</h3>
                    <p>
                      Welcome to the 100 Days of Code - The Complete Python Pro
                      Bootcamp,
                      <strong>the only course you need</strong> to learn to code
                      with Python. With over 500,000{' '}
                      <strong>5 STAR reviews</strong> and a 4.8 average, my
                      courses are some of the HIGHEST RATED courses in the
                      history of Udemy!
                    </p>
                    <p>
                      <strong>
                        100 days, 1 hour per day, learn to build 1 project per
                        day, this is how you master Python.
                      </strong>
                    </p>
                    <p>
                      At 60+ hours, this Python course is without a doubt the
                      <strong>most comprehensive</strong> Python course
                      available anywhere online. Even if you have{' '}
                      <strong>zero</strong> programming experience, this course
                      will take you from{' '}
                      <strong>beginner to professional</strong>. Here s why:
                    </p>
                    <ul>
                      <li>
                        The course is taught by the{' '}
                        <strong>lead instructor</strong> at the App Brewery,
                        London s{' '}
                        <strong>best in-person programming Bootcamp</strong>.
                      </li>
                      <li>
                        The course has been updated and you ll be learning the
                        latest tools and technologies used at large companies
                        such as Apple, Google and Netflix.
                      </li>
                      <li>
                        This course doesn t cut any corners, there are beautiful
                        <strong>animated explanation videos</strong> and tens of
                        <strong>real-world projects</strong> which you will get
                        to build. e.g. Tinder auto swiper, Snake game, Blog
                        Website, LinkedIn Auto Submit Job Application
                      </li>
                      <li>
                        The curriculum was developed over a period of
                        <strong>2 years</strong>, with comprehensive student
                        testing and feedback.
                      </li>
                      <li>
                        We ve taught over 600,000 students how to code and many
                        have gone on to
                        <strong>change their lives</strong> by becoming
                        professional developers or starting their own tech
                        startup.
                      </li>
                      <li>
                        You ll save yourself <strong>over $12,000</strong> by
                        enrolling, and still get access to the same teaching
                        materials and learn from the same instructor and
                        curriculum as our in-person programming Bootcamp.
                      </li>
                      <li>
                        The course is <strong>constantly updated</strong> with
                        new content, with new projects and modules determined by
                        students - that s you!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="right"> */}
              <div className="right">
                <div className="course-container">
                  <div className="video-preview">
                    <iframe
                      width="100%"
                      height="200"
                      src="https://www.youtube.com/embed/rfscVS0vtbw"
                      title="Python Course Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="preview-overlay">Preview this course</div>
                  </div>

                  <p className="premium-info">
                    This Premium course is included in plans
                  </p>

                  <h3>Subscribe to Udemys top courses</h3>
                  <p className="description">
                    Get this course, plus 26,000+ of our top-rated courses, with
                    Personal Plan.
                    <a href="#"> Learn more</a>
                  </p>

                  <Link href="#" className="btn subscribe">
                    Start subscription
                  </Link>

                  <p className="price-note">
                    Starting at <span className="old-price">₹500</span>{' '}
                    <span className="new-price">₹375</span> per month
                  </p>
                  <p className="cancel-note">Cancel anytime</p>

                  <div className="or-separator">or</div>

                  <h2 className="price">₹3,109</h2>
                  <Link href="#" className="btn add-to-cart">
                    Add to cart
                  </Link>
                  <Link href="#" className="btn buy-now">
                    Buy now
                  </Link>

                  <div className="applied-coupon">
                    <p>KEEPLEARNING is applied using Udemy Coupon</p>

                    <div className="coupon-box">
                      <input type="text" placeholder="Enter Coupon" />
                      <Link href="#">Apply</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill_content;
