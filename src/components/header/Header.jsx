import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h5>Seja Bem-Vindo</h5>
        
        <h1>Comics - ADS</h1>

        <h5 className="text-light">Rápido, fácil e acessível a todos</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Rolar para baixo</a>
        </div>  
    </header>
  )
}

export default Header