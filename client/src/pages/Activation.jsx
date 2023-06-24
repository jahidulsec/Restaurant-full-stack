import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../utilities/newRequest'

const Activation = () => {
  const param = useParams()
  console.log(param)


  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const body = JSON.stringify(param)

  //  fetching category
  const { isLoading, error, data } = useQuery({
    queryKey: ['activation'],
    queryFn: () => 

      newRequest.post('auth/users/activation/', body, config).then(
        (res) => {
          return res.status
        }
      )
  })




  return (
    <section className='activation-section'>
        {
          isLoading ? <span className='loading'></span> : error ? 'Try Again!' :
          <article className='ff-primary'>
            <h1 className='ff-secondary fw-regular fs-xl text-dark'>
              Congratulations
            </h1>
            <p className='ff-primary fw-regular fs-l text-dark'>
              Your account has been created and is ready to use!
            </p>
            <Button color={`dark`} >
              Login
            </Button>
          </article>
        }
    </section>
  )
}

export default Activation