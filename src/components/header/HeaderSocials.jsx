import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/ifrondonia/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/IFRO" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://br.linkedin.com/school/institutofederalderondonia" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials