import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <section className='service-section bg-dark'>
      <div className="container">
        <h1 className="section-title fw-regular ff-secondary fs-3xl text-yellow">
          Services
        </h1>
        <p className="section-desc ff-primary fs-l text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="service-cards">
          <ServiceCard name={`Express Delivery`} />
          <ServiceCard name={`Online Reservation`} />
          <ServiceCard name={`Online Food`} />
        </div>
      </div>
    </section>
  )
}

export default Service