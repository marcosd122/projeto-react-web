/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
// eslint-disable-next-lin

import React from 'react'
import './contatos.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

//https://www.emailjs.com/docs/examples/reactjs/
// Biblioteca emailjs utilizada no projeto

//https://dashboard.emailjs.com/admin
// Dashboard de controle de e-emails


const Contatos = () => {
  
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_w44np3l', 'template_rzk3z1z', form.current, '21JfmajranFN9xTnR')
  

    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
};


  return (
    <section id='contatos'>
      <h5>Entre em contato</h5>
      <h2>Contatos</h2>

      <div className="container contato__container">
        <div className="contato_opcoes">

          <article className="contato__opcao">
            <MdOutlineEmail className='contato__opcao-icones'/>
            <h4>E-mail</h4>
            <h5>comics.ads.ifro@gmail.com</h5>
            <a href="mailto:comics.ads.ifro@gmail.com" target="_blank">Enviar uma mensagem</a>
          </article>

          <article className="contato__opcao">
            <RiMessengerLine className='contato__opcao-icones'/>
            <h4>Messenger</h4>
            <h5>Facebook - Comics ADS</h5>
            <a href="https://m.me/ifrondonia" target="_blank">Enviar uma mensagem</a>
          </article>

          <article className="contato__opcao">
            <BsWhatsapp className='contato__opcao-icones'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsApp.com/send?phone=69992510764" target="_blank">Enviar uma mensagem</a>
          </article>

        </div>

        {/* FIM DA AREA - CONTATOS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="texto" name='nome' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu E-mail' required/>
          <textarea name="mensagem" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submeter' className='btn btn-primary'>Enviar mensagem</button>
          </form>

      </div>
    </section>
  )
}

export default Contatos