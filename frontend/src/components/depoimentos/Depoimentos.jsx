import React from 'react'
import './depoimentos.css'
import data from './data'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';


// https://swiperjs.com/react
// Uso da biblioteca swiperjs para transição dos depoimentos.


const Depoimentos = () => {
  return (
    <section id='depoimentos'>
      
      <h5>Acompanhe as reviews do site</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container depoimentos__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>

      {
        data.map(({avatar, nome, review}, index) => {
          return (

            <SwiperSlide key={index} className="depoimentos">

            <div className="cliente__avatar">
    
              <img src={avatar} alt='Avatar 1'/>
            </div>
            <h5 className='cliente__nome'>{nome}</h5>
              <small className='cliente__review'>{review}</small>
            </SwiperSlide>  
          )
      })
    }     

      </Swiper>

    </section>
  )
}

export default Depoimentos