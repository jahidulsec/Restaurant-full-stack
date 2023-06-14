import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Registration = () => {

  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <section className='registration-section'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className="ff-secondary fw-regular fs-2xl text-dark">
            Welcome to Little Lemon!
          </h1>
          <div className="login-field">
            <label className='login-label' htmlFor="username">Username<sup>*</sup></label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder='ex. johndoe' 
              value={user}
              onChange={(e) => {setUser(e.target.value)}}
              required />
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="email">Email <sup>*</sup></label>
            <input type="email" name="email" id="email" placeholder='ex. john@email.com' required/>
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="password">Password <sup>*</sup></label>
            <input type="password" name="password" id="password" placeholder='ex. xxxxxxxx' required/>
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="password">Confirm Password <sup>*</sup></label>
            <input type="password" name="password" id="password" placeholder='ex. xxxxxxxx' required/>
          </div>
          <div className="btns">
            <button 
              className='btn-dark'
              type='submit'
            >
              Sign Up!
            </button>
            
          </div>
        </form>
      </div>
    </section>
  )
}

export default Registration