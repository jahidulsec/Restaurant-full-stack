import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../components/Button'

const Registration = () => {

  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({
    username:'',
    password:'',
    non_field_errors: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    console.log(error)
  },[error])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      re_password: '',
      email: '',
    },
    onSubmit: async(values) => {
      console.log(values)
      setLoading(true)
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/users/', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values)
        })
        const status = response.status
        const result = await response.json().then(
          data => {
            return data
          }
        )
        
        if (status===400) {
          setError({
            ...error,
            username: result.username,
            password: result.password,
            non_field_errors: result.non_field_errors
          })
        }
        if (status === 201) {
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Enter a unique username!').min(4, 'Must be at least of 4 characters'),
      email: Yup.string().email('Enter a valid email!').required(),
      password: Yup.string().required('Enter your password!').min(8, 'Must be at least of 8 characters'),
      re_password: Yup.string().required('Confirm your password!').min(8, 'Must be at least of 8 characters'),
    })
  })



  return (
    <section className='registration-section'>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
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
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              // clien-side validation

              !!formik.errors.username && formik.touched.username &&
                  <span className="error-msg">{formik.errors.username}</span>
            }
            {
              // server-side validation

              error.username && error.username !== undefined &&
                  <span className="error-msg">{error.username}</span>
            }
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="email">Email <sup>*</sup></label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='ex. john@email.com' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {
              !!formik.errors.email && formik.touched.email &&
                  <span className="error-msg">{formik.errors.email}</span>
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
              !!formik.errors.password && formik.touched.password &&
                  <span className="error-msg">{formik.errors.password}</span>
            }
            {
              // server-side validation

              error.password && error.password !== undefined &&
                  <span className="error-msg">{error.password}</span>
            }
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="re_password">Confirm Password <sup>*</sup></label>
            <input 
              type="password" 
              name="re_password" 
              id="re_password" 
              placeholder='ex. xxxxxxxx'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.re_password}
            />
            {
              !!formik.errors.re_password && formik.touched.re_password &&
                  <span className="error-msg">{formik.errors.re_password}</span>
            }
            {
              // server-side validation

              error.non_field_errors && error.non_field_errors !== undefined &&
                  <span className="error-msg">{error.non_field_errors}</span>
            }
          </div>
          <div className="btns">
            <Button
              loading={isLoading}
              color={`dark`}
            >
              Sign Up!
            </Button>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Registration