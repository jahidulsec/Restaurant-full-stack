import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../components/Button'
import axios from 'axios'

const Login = () => {

  const [user, setUser] = useState('')
  const [isLoading, setloading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(error)
  },[error])

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    onSubmit: async(values) => {
      console.log(values)
      setloading(true)
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/jwt/create/', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(values)
        })
        const status  = response.status
        const data = await response.json().then(
          data => {
            return data
          }
        )
        console.log(data)

        if(status!==200) {
          setError(true)
        }

        if (status === 200) {
          localStorage.setItem('refresh', data.refresh)
          localStorage.setItem('access', data.access)
          localStorage.setItem('user', values.username)
          navigate('/')
        }
        

        // get user info

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${data.access}`,
            'Accept': 'application/json',
          }
        }

        const res = await axios.get('http://127.0.0.1:8000/auth/users/me/', config)
        localStorage.setItem('user', JSON.stringify(res.data))

      } catch (error) {
        console.log(error)
      } finally {
        setloading(false)
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email!').required('Enter your Email!'),
      password: Yup.string().required("Enter your password!").min(8, 'At least 8 characters!')
    }) 
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <section className='login-section'>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="ff-secondary fw-regular fs-2xl text-dark">
            Welcome to Little Lemon!
          </h1>
          <div className="login-field">
            <label className='login-label' htmlFor="email">Email<sup>*</sup></label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='ex. johndoe' 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              // clien-side validation

              !!formik.errors.email && formik.touched.email &&
                  <span style={{color: '#ff3e3e'}} className="error-msg">{formik.errors.email}</span>
            }
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="password">Password <sup>*</sup></label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder='ex. xxxxxxxx'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              // clien-side validation

              !!formik.errors.password && formik.touched.password &&
                  <span style={{color: '#ff3e3e'}} className="error-msg">{formik.errors.password}</span>
            }
          </div>
          <div className="btns">
            <Button
              color={`dark`}
              loading={isLoading}
            >
              Login
            </Button>
            <Link to={`/register`}>
              <button className='btn-dark'>Register!</button>
            </Link>
          </div>
          {error ? 
              <p className='ff-primary fs-s fw-bold text-red ' style={{marginTop: '1rem'}}>
                Check your email or password!
              </p>
              : ''
            }
        </form>
      </div>
    </section>
  )
}

export default Login