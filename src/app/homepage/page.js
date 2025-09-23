import React from 'react';
import '../../../public/sass/pages/demo.scss';
import Feedback from '../components/feedback';
import Banner from '../components/banner';
import Third_sec from '../components/third_sec';
import All_courses from '../components/all_courses';
import Fifth_sec from '../components/fifth_sec';
import Plan from '../components/plan';

const Homepage = () => {
  return (
    <>
    
      <Banner />
      <Third_sec />
      <All_courses />
      <Fifth_sec />
      <Plan />
      <Feedback />
    </>
  );
};

export default Homepage;