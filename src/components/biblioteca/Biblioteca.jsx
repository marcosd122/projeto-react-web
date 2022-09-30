/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './biblioteca.css'
import IMG1 from '../../assets/biblioteca1.png'
import IMG2 from '../../assets/biblioteca2.png'
import IMG3 from '../../assets/biblioteca3.png'
import IMG4 from '../../assets/biblioteca4.png'
import IMG5 from '../../assets/biblioteca5.png'
import IMG6 from '../../assets/biblioteca6.png'


const Biblioteca= () => {
  return (
    <section id='biblioteca'>

      <h5>Leia online e organize suas leituras aqui</h5>

      <h2>Biblioteca</h2>

      <div className='container biblioteca__container'>

        <article className='biblioteca__item'>

        <div className='biblioteca__item-imagem'>

          <img src={IMG1} alt={""} />

          </div>

          <h3>Confira a lista de itens dentro do nosso acervo</h3>
          
          <div className="biblioteca__item-cta">

          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          
        
          </div>
        
        </article> 

        <article className='biblioteca__item'>

<div className='biblioteca__item-imagem'>

  <img src={IMG1} alt={""} />

  </div>

  <h3>Confira a lista de itens dentro do nosso acervo</h3>
  
  <div className="biblioteca__item-cta">

  <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          

  </div>

</article> 

<article className='biblioteca__item'>

<div className='biblioteca__item-imagem'>

  <img src={IMG1} alt={""} />

  </div>

  <h3>Confira a lista de itens dentro do nosso acervo</h3>
  
  <div className="biblioteca__item-cta">

  <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          

  </div>

</article> 

<article className='biblioteca__item'>

<div className='biblioteca__item-imagem'>

  <img src={IMG1} alt={""} />

  </div>

  <h3>Confira a lista de itens dentro do nosso acervo</h3>
  
  <div className="biblioteca__item-cta">

  <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          

  </div>

</article> 

<article className='biblioteca__item'>

<div className='biblioteca__item-imagem'>

  <img src={IMG1} alt={""} />

  </div>

  <h3>Confira a lista de itens dentro do nosso acervo</h3>
  
  <div className="biblioteca__item-cta">

  <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          

  </div>

</article> 

<article className='biblioteca__item'>

<div className='biblioteca__item-imagem'>

  <img src={IMG1} alt={""} />

  </div>

  <h3>Confira a lista de itens dentro do nosso acervo</h3>
  
  <div className="biblioteca__item-cta">

  <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
  <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Demo</a>          

  </div>

</article> 

      </div>
    </section>
  )
}

export default Biblioteca