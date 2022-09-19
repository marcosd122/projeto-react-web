/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/ifrondonia/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/IFRO" target="_blank"><FaGithub/></a>
        <a href="https://br.linkedin.com/school/institutofederalderondonia" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials