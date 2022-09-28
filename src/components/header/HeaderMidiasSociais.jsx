/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderMidiasSociais = () => {
  return (
    <div className='header__midias__sociais'>
        <a href='https://www.facebook.com/ifrondonia/' target='_blank'><BsFacebook/></a>
        <a href='https://github.com/IFRO' target='_blank'><FaGithub/></a>
        <a href='https://www.instagram.com/ifro_oficial/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderMidiasSociais