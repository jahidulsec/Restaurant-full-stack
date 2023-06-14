import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useAlertContext } from '../context/alertContext'

const Payment = ({cartTotal}) => {

    const [success, setSuccess] = useState(false)
    const {onOpen} = useAlertContext()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cardNumber: '',
            exDate: '',
            cvv: '',
        },
        onSubmit: (values) => {
            console.log(values)
            setSuccess(true)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please enter your first name!'),
            lastName: Yup.string().required('Please enter your last name!'),
            email: Yup.string().email('Must be valid email!').required('Please enter your email address!'),
            phone: Yup.number().required('Please enter your phone number!'),
            cardNumber: Yup.number('Only numbers!').required('Please enter card number!').min(16, 'Must be 16 numbers!'),
            exDate: Yup.date().required('Enter expiration date of your card!'),
            cvv: Yup.number('Only numbers!').required('Enter card cvv!').min(3, 'must be of 3 numbers')
        })
    })

    useEffect(() => {
        if(success){
            onOpen('Success!', "Have a nice day!")
        }
    }, [success])


  return (
    <section className='payment-section'>
        <div className="container">
            <h1 className="ff-secondary fw-regular fs-3xl text-yellow">
                Payment
            </h1>
            <form onSubmit={formik.handleSubmit}>
                {/* personal Information */}
                <div className="personal-info">
                    <div className="field">
                        <label htmlFor="firstName">First Name<sup>*</sup></label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            placeholder='ex. John'
                            {...formik.getFieldHelpers('firstName')}
                        />
                        {
                            !!formik.errors.firstName && formik.touched.firstName &&
                                <span className="error-msg">{formik.errors.firstName}</span>
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name<sup>*</sup></label>
                        <input 
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange} 
                            placeholder='ex. Doe'
                        />
                        {
                            !!formik.errors.lastName && formik.touched.lastName &&
                                <span className="error-msg">{formik.errors.lastName}</span>
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email<sup>*</sup></label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='ex. johndoe@email.com'
                        />
                        {
                            !!formik.errors.email && formik.touched.email &&
                                <span className="error-msg">{formik.errors.email}</span>
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone Number<sup>*</sup></label>
                        <input 
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formik.values.phone} 
                            onChange={formik.handleChange}
                            placeholder='ex. +880 1234 123 123'
                        />
                        {
                            !!formik.errors.phone && formik.touched.phone &&
                                <span className="error-msg">{formik.errors.phone}</span>
                        }
                    </div>
                </div>
                
                {/* card information */}
                <h1 className="ff-primary fs-l fw-500 text-light"
                    style={{textTransform: `uppercase`}}
                >
                    Payment card
                </h1>
                <div className="card-info">
                    
                    <div className="field">
                        <label htmlFor="cardNumber">Card Number<sup>*</sup></label>
                        <input 
                            type="text"
                            name="cardNumber" 
                            id="cardNumber"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            placeholder='ex. xxxx xxxx xxxx xxxx' 
                        />
                        {
                            !!formik.errors.cardNumber && formik.touched.cardNumber &&
                                <span className="error-msg">{formik.errors.cardNumber}</span>
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="exDate">Expiration Date<sup>*</sup></label>
                        <input 
                            type="text" 
                            name="exDate" 
                            id="exDate"
                            value={formik.values.exDate}
                            onChange={formik.handleChange} 
                            placeholder='ex. yyyy-mm-dd'
                        />
                        {
                            !!formik.errors.exDate && formik.touched.exDate &&
                                <span className="error-msg">{formik.errors.exDate}</span>
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="cvv">CVV<sup>*</sup></label>
                        <input 
                            type="text" 
                            name="cvv"
                            id="cvv"
                            value={formik.values.cvv}
                            onChange={formik.handleChange}
                            placeholder='ex. xxx'
                        />
                        {
                            !!formik.errors.cvv && formik.touched.cvv &&
                                <span className="error-msg">{formik.errors.cvv}</span>
                        }
                    </div>
                </div>
                <div className="pay-total">
                    <h4 className="ff-primary fw-regular fs-l text-yellow">
                        Total Amount
                    </h4>
                    <p className='ff-primary fw-bold fs-l text-light'>
                        ${cartTotal.toFixed(2)}
                    </p>
                </div>
                <button
                    className='btn-yellow'
                    type='submit'
                >
                    pay your bill
                </button>
            </form>
        </div>
    </section>
  )
}

export default Payment