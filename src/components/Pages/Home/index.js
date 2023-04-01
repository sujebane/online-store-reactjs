import React from 'react'
import Landing from '../../Templates/Landing'
import Services from '../../Templates/Services'
import HowItWork from '../../Templates/HowItWork'
import Product from '../../Templates/Product'
import Testimonials from '../../Templates/Testimonials'
import { Footer } from '../../Organisms'

const Home = () => {
  return (
    <div className='font-sans'>
      <Landing/>
      <Services/>
      <HowItWork/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
