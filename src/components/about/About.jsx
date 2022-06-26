import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="aboutme">  
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About  