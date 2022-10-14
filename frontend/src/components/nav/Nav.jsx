/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import  {AiOutlineHome} from 'react-icons/ai'
import  {AiOutlineUser} from 'react-icons/ai'
import  {GiStairsGoal} from 'react-icons/gi'
import  {HiOutlineClipboardList} from 'react-icons/hi'
import  {BiMailSend} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>      
      <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 
      <a href="#sobre" onClick={() => setActiveNav('#sobre')} className={activeNav === '#sobre' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#objetivos" onClick={() => setActiveNav('#objetivos')} className={activeNav === '#objetivos' ? 'active' : ''}><GiStairsGoal/></a>
      <a href="#atividades" onClick={() => setActiveNav('#atividades')} className={activeNav === '#atividades' ? 'active' : ''}><HiOutlineClipboardList/></a>
      <a href="#contatos"onClick={() => setActiveNav('#contatos')} className={activeNav === '#contatos' ? 'active' : ''}><BiMailSend/></a>
    </nav>
  )
}

export default Nav