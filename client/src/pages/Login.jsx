import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <section className='login-section'>
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
            <label className='login-label' htmlFor="password">Password <sup>*</sup></label>
            <input type="password" name="password" id="password" placeholder='ex. xxxxxxxx' required/>
          </div>
          <div className="btns">
            <button 
              className='btn-dark'
              type='submit'
            >
              Login
            </button>
            <Link to={`/register`}>
              <button className='btn-dark'>Register!</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login