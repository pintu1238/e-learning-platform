import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../public/sass/pages/career_sectionthree.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-brands-svg-icons';

const Career_sectionthree = () => {
  library.add(fab, fas);
  return (
    <>
      <section className="sectionthree">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner_area">
                <div className="left_area">
                  <h2>Break into a full stack web development career.</h2>
                  <p>
                    Get the skills, structure, and hands-on experience to launch
                    your career.
                  </p>
                  <Link href="#" className="btn">
                    Get started
                  </Link>

                  <h3>
                    ₹1,287
                    <span className="old_price">₹10,217</span>
                  </h3>

                  <p className="guarantee">30-Day Money-Back Guarantee</p>
                </div>
                <div className="right_area">
                  <div className="card_box">
                    <h3>What s included</h3>
                    <ul>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={['fas', 'award']} />
                        </span>{' '}
                        3 top-rated courses
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={['fas', 'star']} />
                        </span>{' '}
                        4.7 average course rating
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={['fas', 'terminal']} />
                        </span>{' '}
                        126 hands-on practice exercises
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={['fas', 'tv']} />
                        </span>{' '}
                        87.8 hours of on-demand content
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{ clear: 'both' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Career_sectionthree;
