import React from 'react'
import './sobre.css'
import PROJ from '../../assets/projeto.jpg'
import {GiBookshelf} from 'react-icons/gi'
import {RiUploadCloudFill} from 'react-icons/ri'
import {FaAward} from 'react-icons/fa'


export const Sobre = () => {
  return (
    <section id='sobre'>
      <h5>Conheça o projeto</h5>
      <h2>Sobre nós</h2>

      <div className='container sobre__container'>
        <div className='sobre__projeto'>
          <div className='sobre__projeto-imagem'>
            <img src={PROJ} alt='Projeto Imagem' />
          </div>
        </div>

        <div className='sobre__conteudo'>
          <div className='sobre__cards'>

            <article className='sobre__card'>
              <GiBookshelf className='sobre__icones'/>
              <h5>Quadrinhos e Mangás</h5>
              <small>Uma grande coleção e variedades de quadrinhos e mangás para alunos</small>
              </article>
              
              <article className='sobre__card'>
              <RiUploadCloudFill className='sobre__icones'/>
              <h5>Novidades</h5>
              <small>Atualização de conteúdo de publicações e digitalizações feitas por alunos</small>
            </article>

            <article className='sobre__card'>
              <FaAward className='sobre__icones'/>
              <h5>Recompensas</h5>
              <small>Acumule pontos de leitura e troque por acesso antecipado a conteúdos em primeira mão</small>
            </article>
           
          </div>

          <p>Fabio Saacedra Marcelo e Marcos Guimarães ambos alunos do curso de Análise e
            Desenvolvimento de Sistemas 4 período. Trabalharam no projeto desenvolvido para
            a disciplina de Programação Web ministrada pelo professor Leandro Ferrarezi com 
            o Desenvolvimento de uma página Web para leitura de quadrinhos</p>

          <a href='#contatos' className='btn btn-primary'>Entre em contato</a>

        </div>
      </div>
    </section>
  )
}

export default Sobre
