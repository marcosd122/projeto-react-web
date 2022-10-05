/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */

import React, {useState} from 'react'
import './biblioteca.css'
import data from '../modal/data'
import Model from '../modal/Model'


const Biblioteca= () => {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (imagem, titulo, detalhes) => {
    let tempData = [imagem, titulo, detalhes];
    setTempdata(item => [1, ...tempData]);

    return setModel (true);
  }

  return (
    <>
    <section id='biblioteca'>

      <h5 >Leia online e organize suas leituras aqui</h5>

      <h2>Biblioteca</h2>
      
      <div className='container biblioteca__container'>
        
      
      {data.cardData.map((item, index)=>{
        return (
          <article key={index} className='biblioteca__item'>

          <div className='biblioteca__item-imagem'>
          
            <img src={item.imgSrc} alt={item.titulo} />
            
            </div>
          
            <h3>{item.titulo}</h3>
            
            <div className="biblioteca__item-cta">
            
            <a href={item.biblioteca} className='btn' target='_blank'>Biblioteca</a>
            
            <button className='btn btn-primary' 
            onClick={()=> getData(item.imgLogo, item.titulo, item.detalhes)}
            >Detalhes</button>
            
            
            </div>
          
          </article> 
        )

      })}

      </div>
    </section>

{
  // === Valor e tipo igual a

  model === true ? <Model imagem={tempdata[1]} titulo={tempdata[2]} detalhes={tempdata[3]} hide={() => setModel(false)}/>:''
}
    
    </>
  )
}

export default Biblioteca
