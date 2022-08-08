import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      
        <a href="https://leetcode.com/prateeksahu-me/" target="_blank"><SiLeetcode/></a>        
        <a href="https://github.com/prateeksahu-me" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/prateeksahu-me/" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials