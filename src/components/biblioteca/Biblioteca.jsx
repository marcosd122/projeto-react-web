/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */

import React from 'react'
import './biblioteca.css'
import IMG1 from '../../assets/biblioteca1.png'
import IMG2 from '../../assets/biblioteca2.png'
import IMG3 from '../../assets/biblioteca3.png'
import IMG4 from '../../assets/biblioteca4.png'
import IMG5 from '../../assets/biblioteca5.png'
import IMG6 from '../../assets/biblioteca6.png'


const data = [
  {
id: 1,
imagem: IMG1,
titulo: 'Batman',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
},
{
id: 2,
imagem: IMG2,
titulo: 'Superman',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
},
{
id: 3,
imagem: IMG3,
titulo: 'Turma da Mônica',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
},
{
id: 4,
imagem: IMG4,
titulo: 'Disney',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
},
{
id: 5,
imagem: IMG5,
titulo: 'Mangás',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
},
{
id: 6,
imagem: IMG6,
titulo: 'Marvel',
biblioteca: 'https://github.com/',
detalhes:'https://ifro.edu.br/'
}
]

const Biblioteca= () => {
  return (
    <section id='biblioteca'>

      <h5>Leia online e organize suas leituras aqui</h5>

      <h2>Biblioteca</h2>

      <div className='container biblioteca__container'>

     {
      data.map(({id, imagem, titulo, biblioteca, detalhes}) => {
        return (

        <article key={id} className='biblioteca__item'>

        <div className='biblioteca__item-imagem'>
        
          <img src={imagem} alt={titulo} />
        
          </div>
        
          <h3>{titulo}</h3>
          
          <div className="biblioteca__item-cta">
        
          <a href={biblioteca} className='btn' target='_blank'>Biblioteca</a>
          <a href={detalhes} className='btn btn-primary' target='_blank'>Detalhes</a>          
        
          </div>
        
        </article> 
      )
      })
     }      

      </div>
    </section>
  )
}

export default Biblioteca