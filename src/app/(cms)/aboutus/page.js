import React from 'react'
import Image from 'next/image';
import Aboutus_banner from '@/app/components/aboutus_banner';
import Aboutus_sectiontwo from '@/app/components/about_sectiontwo';
import Aboutus_third from '@/app/components/about_third';
import Aboutus_for from '@/app/components/about_for';
import Aboutus_five from '@/app/components/about_five';

import Aboutus_seven from '@/app/components/about_seven';

import Fifth_sec from '@/app/components/fifth_sec';
import Aboutus_testimonials from '@/app/components/about_testimonials';
// import Aboutus_banner from '@/app/components/aboutus_banner';
// import Aboutus_sectiontwo from '@/app/components/aboutus_sectiontwo';
// import Aboutbanner from '../..src/app/components/aboutus_banner.js/';
// import Aboutbanner from "../../../public/images/about-homepage-hero-jan-2024.png"

const page = () => {
  return (
    <>
      <Aboutus_banner />
      <Aboutus_sectiontwo/>
      <Aboutus_third/>
      <Aboutus_for/>
      <Aboutus_five/>
      <Aboutus_testimonials/>
      <Fifth_sec/>
      <Aboutus_seven/>
  
    </>
  )
}

export default page;