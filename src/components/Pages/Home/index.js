import React from 'react'
import Landing from '../../Templates/Landing'
import Services from '../../Templates/Services'
import HowItWork from '../../Templates/HowItWork'
import Product from '../../Templates/Product'
import Testimonials from '../../Templates/Testimonials'

const Home = () => {
  return (
    <div>
      <Landing/>
      <Services/>
      <HowItWork/>
      <Product/>
      <Testimonials/>
    </div>
  )
}

export default Home
