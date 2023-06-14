import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import MenuSection1 from '../components/MenuSection1'
import Service from '../components/Service'
import MenuSection2 from '../components/MenuSection2'
import Testimonial from '../components/Testimonial'
import About from '../components/About'

const Home = () => {
  return (
    <>
        <Hero />
        <BestSeller />
        <MenuSection1 />
        <Service />
        <MenuSection2 />
        <Testimonial />
        <About />
    </>
  )
}

export default Home