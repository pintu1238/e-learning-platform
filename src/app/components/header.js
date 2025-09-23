"use client";
import { useState } from "react";
import "../../../public/sass/pages/header.scss";
// import "../../../public/sass/pages/herderscss.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faChevronRight,
  faCartPlus,
  faBars,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

// Add specific icons to the library
library.add(faChevronRight, faCartPlus, faBars, faSearchengin, fas);

const Header = () => {
  // State to control the visibility of the main Explore menu
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  // State to control the visibility of the "Development" sub-menu
  const [showDevelopmentSubMenu, setShowDevelopmentSubMenu] = useState(false);
  const [showAISubMenu, setShowAISubMenu] = useState(false);
  const [showCertSubMenu, setShowCertSubMenu] = useState(false);
  const [showCareerSubMenu, setShowCareerSubMenu] = useState(false);
  const [showBusinessSubMenu, setShowBusinessSubMenu] = useState(false);

  return (
    <>
      <section className="header_section">
        <Container fluid>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <div className="left_area">
                  <div className="logo_area">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={50}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="right_area">
                  <div className="left_of_right">
                    <nav>
                      <div
                        className="explore-menu-container"
                        onMouseEnter={() => setShowExploreMenu(true)}
                        onMouseLeave={() => {
                          setShowExploreMenu(false);
                          setShowDevelopmentSubMenu(false); // Nested menu bhi hide hoga
                        }}
                      >
                      <Link href="#">Explore</Link>

                        {showExploreMenu && (
                          <div className="explore-dropdown-menu">
                            {/* Left Panel - Categories */}
                            <div className="explore-left-panel">
                              <ul className="categories-list">
                                {/* Explore by Goal */}
                                <li className="category-item">
                                  <ul className="sub-categories">
                                    {/* AI with Stable Hover */}
                                    <li
                                      className="category-item"
                                      onMouseEnter={() =>
                                        setShowAISubMenu(true)
                                      }
                                      onMouseLeave={() =>
                                        setShowAISubMenu(false)
                                      }
                                    >
                                      <div className="item-title">
                                        <span>AI</span>
                                        <FontAwesomeIcon
                                          icon={["fas", "chevron-right"]}
                                        />
                                      </div>

                                      {/* Right Panel - Sub-categories (AI) */}
                                      {showAISubMenu && (
                                        <div className="explore-right-panel ai-submenu">
                                          <ul className="sub-category-list">
                                            <li>
                                              <Link href="#">Data Science</Link>
                                            </li>
                                            <li>
                                              <Link href="#">
                                                Data Analytics
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">ML Engineer</Link>
                                            </li>
                                            <li>
                                              <Link href="#">AI Engineer</Link>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </li>

                                    {/* Launch a New Career with Stable Hover */}
                                    <li
                                      className="category-item"
                                      onMouseEnter={() =>
                                        setShowCareerSubMenu(true)
                                      }
                                      onMouseLeave={() =>
                                        setShowCareerSubMenu(false)
                                      }
                                    >
                                      <div className="item-title">
                                        <span>Launch a new career</span>
                                        <FontAwesomeIcon
                                          icon={["fas", "chevron-right"]}
                                        />
                                      </div>

                                      {/* Right Panel - In-demand Careers */}
                                      {showCareerSubMenu && (
                                        <div className="explore-right-panel career-submenu">
                                          <ul className="sub-category-list">
                                            <li>
                                              <Link href="#">
                                                Cloud Engineer
                                              </Link>
                                            </li>

                                            <li>
                                              <Link href="#">
                                                Full Stack Web Developer
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">
                                                Cybersecurity Analyst
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">AI Engineer</Link>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </li>

                                    {/* Prepare for a Certification with Stable Hover */}
                                    <li
                                      className="category-item"
                                      onMouseEnter={() =>
                                        setShowCertSubMenu(true)
                                      }
                                      onMouseLeave={() =>
                                        setShowCertSubMenu(false)
                                      }
                                    >
                                      <div className="item-title">
                                        <span>Prepare for a certification</span>
                                        <FontAwesomeIcon
                                          icon={["fas", "chevron-right"]}
                                        />
                                      </div>

                                      {/* Right Panel - Popular Certifications */}
                                      {showCertSubMenu && (
                                        <div className="explore-right-panel certification-submenu">
                                          <ul className="sub-category-list">
                                            <li>
                                              <Link href="#">
                                                AWS Certified Solutions
                                                Architect
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">
                                                Microsoft Azure Fundamentals
                                                (AZ-900)
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">
                                                Google Associate Cloud Engineer
                                              </Link>
                                            </li>
                                            <li>
                                              <Link href="#">
                                                Cisco CCNA Certification
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  </ul>
                                </li>

                                {/* Development with Stable Hover */}
                                <li
                                  className="category-item"
                                  onMouseEnter={() =>
                                    setShowDevelopmentSubMenu(true)
                                  }
                                  onMouseLeave={() =>
                                    setShowDevelopmentSubMenu(false)
                                  }
                                >
                                  <div className="item-title">
                                    <span>Development</span>
                                    <FontAwesomeIcon
                                      icon={["fas", "chevron-right"]}
                                    />
                                  </div>
                                  {/* Right Panel - Sub-categories (Development) */}
                                  {showDevelopmentSubMenu && (
                                    <div className="explore-right-panel development-submenu">
                                      <ul className="sub-category-list">
                                        <li>
                                          <Link href="#">Web Development</Link>
                                        </li>

                                        <li>
                                          <Link href="#">
                                            Mobile Development
                                          </Link>
                                        </li>

                                        <li>
                                          <Link href="#">Game Development</Link>
                                        </li>

                                        <li>
                                          <Link href="#">
                                            Software Engineering
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                </li>

                                {/* Business with Stable Hover */}
                                <li
                                  className="category-item"
                                  onMouseEnter={() =>
                                    setShowBusinessSubMenu(true)
                                  }
                                  onMouseLeave={() =>
                                    setShowBusinessSubMenu(false)
                                  }
                                >
                                  <div className="item-title">
                                    <span>Business</span>
                                    <FontAwesomeIcon
                                      icon={["fas", "chevron-right"]}
                                    />
                                  </div>

                                  {/* Right Panel - Business Subcategories */}
                                  {showBusinessSubMenu && (
                                    <div className="explore-right-panel business-submenu">
                                      <ul className="sub-category-list">
                                        <li>
                                          <Link href="#">Entrepreneurship</Link>
                                        </li>
                                        <li>
                                          <Link href="#">
                                            Project Management
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="#">
                                            Business Analytics & Intelligence
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="#">Sales</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </nav>
                    
                    <div className="search_box">
                      <div>
                        <FontAwesomeIcon
                          icon={["fab", "searchengin"]}
                          className="search_icon"
                        />
                      </div>
                      <div className="input_box">
                        <input
                          type="Ftext"
                          placeholder="Search for anything"
                          className="search_icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right_of_right">
                    <div className="cart_area">
                      <Link href="/cart">
                        <FontAwesomeIcon
                          icon={["fas", "cart-plus"]}
                          className="cart_logo"
                        />
                      </Link>
                    </div>
                    <ul className="auth_links">
                      <li>
                        <Link href="/login">Log in</Link>
                      </li>
                      <li>
                        <Link href="/signup">Sign up</Link>
                      </li>
                    </ul>
                    <div className="user_account">
                      <FontAwesomeIcon
                        icon={["fas", "user"]}
                        className="user_icon"
                      />
                    </div>
                    <div className="bars">
                      <FontAwesomeIcon
                        icon={["fas", "bars"]}
                        className="bar_icons"
                      />
                    </div>
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

export default Header;
