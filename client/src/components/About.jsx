import React from 'react'

const About = () => {
  return (
    <section className='about-section'>
      <div className="container">
        <img loading='lazy' className='about-img1' src="Image/restaurant.jpg" alt="" />
        <article className='about-desc1'>
          <h1 className="about-title fw-regular ff-secondary fs-3xl text-dark">
            About
          </h1>
          <p className="ff-primary fs-l text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
        <img loading='lazy' className='about-img2' src="Image/happy-waiter.jpg" alt="" />
        <article className='about-desc2'>
          <h1 className="about-title fw-regular ff-secondary fs-3xl text-dark">
            What We Love!
          </h1>
          <p className="ff-primary fs-l text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
      </div>
      
    </section>
  )
}

export default About