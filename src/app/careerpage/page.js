import React from 'react';
import '../../../public/sass/pages/demo.scss';
// import Blog from '../components/blog';
// import { Col, Container, Row } from 'react-bootstrap';
import Career_sectiontwo from '../components/career_sectiontwo';
import Career_banner from '../components/career_banner';

import Aboutus_sectiontwo from '../components/about_sectiontwo';

import Career_sectionthree from '../components/career_sectionthree';
import Career_sectionfour from '../components/career_sectionfour';
import Feedback from '../components/feedback';
import Third_sec from '../components/third_sec';
import All_courses from '../components/all_courses';
import Faq from '../components/faq';
const CPage = () => {
  return (
    <>
      <Career_banner />
      <Career_sectiontwo />

      {/* <Aboutus_sectiontwo /> */}

      <Career_sectionthree />
      {/* <Career_sectionfour /> */}
      {/* <Faq /> */}
      {/* <Feedback /> */}
      <Third_sec />
      {/* <All_courses /> */}
    </>
  );
};

export default CPage;
