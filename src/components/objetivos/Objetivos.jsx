import React from 'react'
import './objetivos.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Objetivos = () => {
  return (

    <section id='objetivos'>

      <h5>Estrutura e condução da aplicação</h5>
      <h2>Objetivos para o projeto</h2>

      <div className='container objetivos__container'>
        <div className='objetivos__projeto'>
          <h3>Objetivos - Soft Skills</h3>

          <div className='objetivos__conteudo'>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Trabalho em equipe</h4>
                <small className='text-light'>Um ambiente colaborativo.</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Criatividade</h4>
                <small className='text-light'>Produzir algo novo e diferente.</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Organização</h4>
                <small className='text-light'>Cumprir objetivos em ordem.</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Adaptabilidade</h4>
                <small className='text-light'>Acompanhar as mudanças.</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Negociação</h4>
                <small className='text-light'>Forma mais eficiente para alcançar um objetivo.</small>
              </div>
            </article>
          </div>
        </div>

        {/* FIM DA AREA OBJETIVOS SOFT */}

        <div className='objetivos__ferramentas'>
          <h3>Objetivos - Hard Skills</h3>

          <div className='objetivos__conteudo'>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>HTML + CSS</h4>
                <small className='text-light'>Criação de interfaces de usuário</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>JSX</h4>
                <small className='text-light'>Sintaxe para JavaScript </small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>JavaScript ES6</h4>
                <small className='text-light'>Padronização da linguagem JS </small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Repositório armazenado no GitHub</small>
              </div>
            </article>

            <article className='objetivos__detalhes'>
              <BsPatchCheckFill className='objetivos__detalhes-icones' />
              <div>
                <h4>UX/UI</h4>
                <small className='text-light'>UI - design de interface / UX - experiência de interações</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Objetivos
