import React from 'react'
import './header.css'
import CTA from './CTA'
import SOBRE from '../../assets/sobre.png'
import HeaderMidiasSociais from './HeaderMidiasSociais'


const Header = () => {
  return (
    <header>
      
      <div className='container header__container'>
        
        <h5>Seja Bem-Vindo</h5>
        
        <h1>Comics - ADS</h1>

        <h5 className='text-light'>Rápido, fácil e acessível a todos</h5>

        <CTA />
        <HeaderMidiasSociais />

        <div className='sobre'>
          <img src={SOBRE} alt='Sobre a equipe' />
        </div>
        <a href='#contatos' className='scroll__down'>Rolar para baixo</a>
        </div>  
    </header>
  )
}

export default Header