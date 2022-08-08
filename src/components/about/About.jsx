import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">  
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about_icon'/>              
                <h5>Experience</h5>
                <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about_icon'/>              
                <h5>Projects</h5>
                <small>5+ Worldwide</small>
            </article>
            <article className='about__card'>
                <VscFolderLibrary className='about_icon'/>              
                <h5>Awards</h5>
                <small>1+ Achivements</small>
            </article>
          </div>
          <p>I'm a software engineer focused in React, Redux, Express.js, Java and more. I have over 1.5 years of experience in tech with skills in Software development and Quality Assurance.
</p>
          <p>I am passionate about creating intuitive, functional, and beautiful software and making quantifiable improvements to a product with each iteration. </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About  