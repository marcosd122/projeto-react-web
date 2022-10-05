/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      
      <a href='#' className='footer__logo'>Comics - ADS</a>
      
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#sobre'>Sobre</a></li>
      <li><a href='#objetivos'>Objetivos</a></li>
      <li><a href='#atividades'>Atividades</a></li>
      <li><a href='#biblioteca'>Biblioteca</a></li>
      <li><a href='#depoimentos'>Depoimentos</a></li>
      <li><a href='#contatos'>Contatos</a></li>     
            
      </ul>

      <div className='footer__midias-sociais'>
      <a href='https://facebook.com/'><FaFacebookF/></a>
      <a href='https://instagram.com/'><FiInstagram/></a>
      <a href='https://twitter.com/Comics_Ads'><IoLogoTwitter/></a>      
      </div>
      <div className='footer__pesquisa'>
      <a href='https://docs.google.com/forms/d/1Zmy8Gy5wNsBo3p75yvGCyOA5w_ujdL9pX1LXzGOp_80/viewform?edit_requested=true' target='_blank'>Participe da nossa pesquisa</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Comics - ADS. Todos os direitos reservados</small>        
      </div>
   
    </footer>
  )
}

export default Footer