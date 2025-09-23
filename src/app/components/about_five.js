'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/about.five.scss"

const Aboutus_five = () => {
    return (
        <>
         {/* <section className='five'>
            <div className='impact'>
                <h1>Creating impact around the world</h1>

                <p> With our global catalog spanning the latest skills and topics, people and organizations everywhere are able to adapt to change and thrive.    </p>
            </div>

            <div>
                "81M"
                <span>Learners</span>
            </div>

            <div className='tag'>
                "85K"
                <span>Instructors</span>
            </div>

            <div className='tag'>
                "250K+"
                <span>Courses</span>
            </div>


            <div className='tag'>
                "1.1B"
                <span>Course enrollments</span>
            </div>


            <div className='tag'>
                "77"
                <span>Languages</span>
            </div>

            <div className='tag'>
                "17K+"
                <span>Enterprise customers </span>
            </div>
         </section> */}

         <section className="impact-section">
      <div className="impact">
        <h1>Creating impact around the world</h1>
        <p>
          With our global catalog spanning the latest skills and topics,
          people and organizations everywhere are able to adapt to change and thrive.
        </p>
      </div>

      <div className="stats">
        <div className="tag">
          <span className="number">81M</span>
          <span className="label">Learners</span>
        </div>

        <div className="tag">
          <span className="number">85K</span>
          <span className="label">Instructors</span>
        </div>

        <div className="tag">
          <span className="number">250K+</span>
          <span className="label">Courses</span>
        </div>

        <div className="tag">
          <span className="number">1.1B</span>
          <span className="label">Course enrollments</span>
        </div>

        <div className="tag">
          <span className="number">77</span>
          <span className="label">Languages</span>
        </div>

        <div className="tag">
          <span className="number">17K+</span>
          <span className="label">Enterprise customers</span>
        </div>
      </div>
    </section>
        </>
    )
}

export default Aboutus_five