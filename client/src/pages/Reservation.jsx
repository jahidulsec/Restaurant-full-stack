import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioOption } from '../components/RadioGroup/Radio'
import {DropDownGroup, DropDownItem} from '../components/DropDown'
import { faChampagneGlasses, faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import DatePicker from '../components/DatePicker'

const Reservation = () => {

    const [booking, setBooking] = useState({
        occasion: '',
        diners:'',
        date:'',
        time:'',
        seating: '',
    })

    const navigation = useNavigate()

    const data = sessionStorage.getItem('booking')
    const bookingData = JSON.parse(data)


    useEffect(()=>{
        console.log(booking, location, bookingData)
        if(bookingData){
            setBooking({
                ...booking,
                date: bookingData.date,
                time: bookingData.time,
                diners: bookingData.diners,
                occasion: bookingData.occasion,
                seating: bookingData.seating
            })
        }
    },[])

    const handleDate = (date) => {
        setBooking({
            ...booking,
            date: date,
        })
    }

    const handleNavigation = () => {
        sessionStorage.setItem('booking',JSON.stringify(booking))
        navigation('/confirmation')
    }

  return (
    <section className='reservation-section'>
        <div className="container">
            <h1 className="ff-secondary fs-3xl fw-regular text-yellow">
                Reserve a Table
            </h1>
            <form action="">
                <RadioGroup 
                    onChange={(e)=> {
                        setBooking({
                            ...booking,
                            seating: e.target.value
                        })
                    }}  
                    selected={booking.seating}
                >
                    <RadioOption value='indoor'>Indoor Seating</RadioOption>
                    <RadioOption value='outdoor'>Outdoor Seating</RadioOption>
                </RadioGroup>
                <div className='fields'>
                    <div className="field">
                        <DatePicker
                            onSelected={bookingData === null ? false : bookingData.date}
                            onLabel={bookingData === null ?'Date' : bookingData.date ? bookingData.date : 'Date'}
                            onDate = {handleDate}
                        />
                    </div>
                    <div className="field">
                        <h4 className="field-label">Number of Diners</h4>
                        <DropDownGroup 
                            label={bookingData === null ?'No of Diners' : bookingData.diners ? bookingData.diners : 'No of Diners'} 
                            icon={faUser} 
                            onSelected={bookingData === null ? false : bookingData.diners}
                            onClick={(e)=> {
                                setBooking({
                                    ...booking,
                                    diners: e.target.id
                                })
                            }}
                        >
                            <DropDownItem value={`2 diners`}>2 Diners</DropDownItem>
                            <DropDownItem value={`4 diners`}>4 Diners</DropDownItem>
                            <DropDownItem value={`6 diners`}>6 Diners</DropDownItem>
                            <DropDownItem value={`8 diners`}>8 Diners</DropDownItem>
                        </DropDownGroup>
                    </div>
                    <div className="field">
                        <h4 className="field-label">Occasion</h4>
                        <DropDownGroup 
                            label={bookingData === null ?'Occasion' : bookingData.occasion ? bookingData.occasion : 'Occasion'} 
                            onSelected={bookingData === null ? false : bookingData.occasion}
                            icon={faChampagneGlasses} 
                            onClick={(e)=>{
                                setBooking({
                                    ...booking,
                                    occasion: e.target.id
                                    }
                                )
                            }}
                        >
                            <DropDownItem value={`birthday`}>Birthday</DropDownItem>
                            <DropDownItem value={`anniversary`}>Anniversary</DropDownItem>
                            <DropDownItem value={`engagement`}>Engagement</DropDownItem>
                        </DropDownGroup>
                    </div>
                    <div className="field">
                        <h4 className="field-label">Time</h4>
                        <DropDownGroup 
                            label={bookingData === null ? 'Time' : bookingData.time ? bookingData.time : 'Time'}  
                            icon={faClock} 
                            onSelected={bookingData === null ? false : bookingData.time}
                            onClick={(e)=>{
                                setBooking({
                                    ...booking,
                                    time: e.target.id
                                })
                            }}    
                        >
                            <DropDownItem value={`6:00 PM`}>6:00 PM</DropDownItem>
                            <DropDownItem value={`7:00 PM`}>7:00 PM</DropDownItem>
                            <DropDownItem value={`7:30 PM`}>7:30 PM</DropDownItem>
                            <DropDownItem value={`8:00 PM`}>8:00 PM</DropDownItem>
                        </DropDownGroup>
                    </div>
                </div>
                <Link to='/confirmation'>
                    <button
                        className='btn-yellow' 
                        onClick={handleNavigation}
                    >
                        Reserve a Table
                    </button>
                </Link>
            </form>
        {/* <hr /> */}
        </div>
    </section>
  )
}

export default Reservation