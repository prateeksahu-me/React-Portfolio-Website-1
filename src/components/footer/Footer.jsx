import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PrateekSahu.me</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      
      <div className='footer__socials'>
        
        <a href="https://www.linkedin.com/in/prateeksahu-me/" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/prateeksahu.me" target="_blank"><FiInstagram/></a>
        <a href="https://m.me/prateek.sahu.167/" target="_blank"><FaFacebookF/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; PrateekSahu.me All rights reserved</small>

      </div>
    </footer>
  )
}

export default Footer