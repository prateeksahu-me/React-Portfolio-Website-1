import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/prateek-sahu-796993145/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/prateeksahu-in" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/prateeksahu.me/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials