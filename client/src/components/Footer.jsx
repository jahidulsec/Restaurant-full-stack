import React, { useEffect } from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp, FaTwitter} from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'

const Footer = () => {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])

  return (
    <footer className='footer-section bg-dark'>
      <hr />
      <div className="container">
        <div className="left">
          <h3 className='footer-nav-title ff-primary fs-l ff-bold text-light' >
            Little Lemon
          </h3>
          <p className="footer-desc text-light ff-primary fs-s fw-regular">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
          </p>
          <div className="social-icons">
            <span className="icon"><FaInstagram size={30}/></span>
            <span className="icon"><FaFacebook size={30}/></span>
            <span className="icon"><FaTwitter size={30}/></span>
            <span className="icon"><FaWhatsapp size={30}/></span>
          </div>
        </div>
        <div className="right">
          <div className="col1">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Navigation
            </h3>
            <ul role='list'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/online-menu">Menu</NavLink></li>
              <li><NavLink to="/online-menu">Order Online</NavLink></li>
            </ul>
          </div>
          <div className="col2">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Services
            </h3>
            <ul role='list'>
              <li><a href="">Express Delivery</a></li>
              <li><NavLink to="/reservation">Reservations</NavLink></li>
              <li><a href="">Online Food</a></li>
            </ul>
          </div>
          <div className="col3">
            <h3 className="footer-nav-title ff-primary fs-l ff-bold text-light">
              Other
            </h3>
            <ul role='list'>
              <li><a href="">Contact Us!</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer