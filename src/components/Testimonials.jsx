import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {data} from './../data/testimonialData'

function Testimonials() {
  return (
    <section className='mt-10 pb-10 pt-10 bg-slate-50'>
      <div className="container">
        <h2 className='text-center mb-10 font-bold text-black uppercase xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl'>What our clients say</h2>
        <Splide options={{
          autoplay:true,
          gap:"1rem"
        }}>
          {data.map((review)=>(
          <SplideSlide key={review.id}>
          <div  className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-center'>
            <img src={`${review.img_src}`} alt="" />
            <div>
            <p>{review.review}</p>
            <h4 className='font-bold mt-3 capitalize text-black'>{review.name}</h4>
            </div>
          </div>
          </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Testimonials