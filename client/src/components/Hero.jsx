import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <h1 className="hero-title fs-4xl ff-secondary fw-regular text-yellow">
          Little Lemon
        </h1>
        <p className='hero-para ff-primary text-light fs-s'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <div className="btns">
          <Link to='/online-menu'>
            <Button>Order Now</Button>
          </Link>
          <Link to='/reservation'>
            <Button>Reserve a table</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero