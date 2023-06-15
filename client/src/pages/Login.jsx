import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../components/Button'

const Login = () => {

  const [user, setUser] = useState('')
  const [isLoading, setloading] = useState(false)
  const [error, setError] = useState({
    non_field_errors: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    console.log(error)
  },[error])

  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
    },
    onSubmit: async(values) => {
      console.log(values)
      setloading(true)
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/token/login', {
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

        if(status===400) {
          setError({
            ...error,
            non_field_errors: data.non_field_errors,
          })
        }

        let token = ''
        if (status === 200) {
          localStorage.setItem('auth_token', data.auth_token)
          token = data.auth_token
          localStorage.setItem('user', values.username)
          navigate('/')
        }

        // fetching user info
        // await fetch('http://127.0.0.1:8000/auth/users/me/', {
        //   method: 'GET',
        //   mode: 'cors',
        //   credentials: 'same-origin',
        //   headers: {
        //     "content-type": "application/json",
        //     "Authorization": "Token ea1604b0352dd6010dc58f0d81351045f04feb9b",
        //   },
          
        // }).then(
        //   res => res.json()
        // ).then(
        //   data => console.log(data)
        // )


      } catch (error) {
        console.log(error)
      } finally {
        setloading(false)
      }
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Enter your username!').min(4, 'Must be at least of 4 characters!'),
      password: Yup.string().required("Enter your password!").min(8, 'At least 8 characters!')
    }) 
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(user))
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
                  <span style={{color: '#ff3e3e'}} className="error-msg">{formik.errors.username}</span>
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
        </form>
      </div>
    </section>
  )
}

export default Login