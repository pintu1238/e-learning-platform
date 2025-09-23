'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../src/app/components/about_seven.js"
import "../../../public/sass/pages/about_seven.scss"

const Aboutus_Seven = () => {
    return (

<>
 <section className="info-cards">
      <div className="card">
        <div className="line purple"></div>
        <h2>Work with us</h2>
        <p>
          At Udemy, we’re all learners and instructors. We live out our values
          every day to create a culture that is diverse, inclusive, and committed
          to helping employees thrive.
        </p>
        <a href="#">Join our team →</a>
      </div>

      <div className="card">
        <div className="line violet"></div>
        <h2>See our research</h2>
        <p>
          We’re committed to improving lives through learning. Dig into our
          original research to learn about the forces that are shaping the
          modern workplace.
        </p>
        <a href="#">Learn more →</a>
      </div>

      <div className="card">
        <div className="line teal"></div>
        <h2>Read our blog</h2>
        <p>
          Want to know what we’ve been up to lately? Check out the Udemy blog
          to get the scoop on the latest news, ideas and projects, and more.
        </p>
        <a href="#">Read now →</a>
      </div>
    </section>
</>

          )
}

export default Aboutus_Seven