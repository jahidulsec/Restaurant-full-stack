import { faCalendar, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { MonthNames, dayRange, getNumberOfDaysInMonth, getSortedDay } from '../data'


const DatePicker = ({onDate, onSelected, onLabel}) => {
    const date = new Date()
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())
    const [currentYear, setCurrentYear] = useState(date.getFullYear())
    const [selectedDate, setSelectedDate] = useState(date.getDate())
    const [selected, setSelected] = useState(onSelected)
    const [open, setOpen] = useState(false)
    const [viewDate, setViewDate] = useState(onLabel)

    const datePickerRef = useRef(undefined)

    useEffect(() => {


        const datePicker = datePickerRef.current

        const closeDatePicker = (e) => {
            if (!datePicker.contains(e.target)) {
                setOpen(false)
            }
        }

            window.addEventListener('mousedown', closeDatePicker)

            return () => {
                window.removeEventListener("mousedown", closeDatePicker)
            }

    }, [viewDate])


    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear((prev) => prev + 1)
        }
    }

    
    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth((prev) => prev - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear((prev) => prev - 1)
        }
    }
  
  
    return (
    <div 
        role='input' 
        className='date-input' 
        ref={datePickerRef}
    >
        <h3 className="ff-primary fs-l fw-regular text-light">
            Date
        </h3>
        <div 
            className={`dropdown dropdown-label ${selected ? 'selected': ''}`}
            onClick={() => {setOpen(!open)}}    
        >
            <FontAwesomeIcon icon={faCalendar} />
            <span style={{textTransform: 'capitalize'}}>{viewDate}</span>
            <FontAwesomeIcon
                className={open ? 'icon-rotate':'icon'} 
                icon={faChevronDown} 
            />
        </div>
        <div 
            className={`date-picker ${open ? 'active' : 'inactive'}`}
        >
            <div className="picker-header ff-primary">
                <div className="date fw-bold fs-l">
                    {`${MonthNames[currentMonth]}, ${currentYear}`}
                </div>
                <div className="icons">
                    <FontAwesomeIcon 
                        
                        icon={faChevronLeft} 
                        onClick={prevMonth}
                    />
                    <FontAwesomeIcon 
                        icon={faChevronRight}
                        onClick={nextMonth}
                    />
                </div>
            </div>
            <div className="picker-body">
                {
                    getSortedDay(currentYear, currentMonth).map((day) => (
                        <span className="day-name" key={day}>{day}</span>
                    ))
                }

                {
                    dayRange(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1)
                        .map((day) => (
                            <span 
                                className={`day-number ${selectedDate == day ? "day-selected" :" "}`} 
                                key={day}
                                id={day}
                                onClick={(e) => {
                                    setSelectedDate(e.target.id),
                                    setSelected(true),
                                    setOpen(false),
                                    setViewDate(`${e.target.id} ${MonthNames[currentMonth]}, ${currentYear}`),
                                    onDate(`${e.target.id} ${MonthNames[currentMonth]}, ${currentYear}`)
                                }}
                            >
                                {day}
                            </span>
                        ))
                }
            </div>
        </div>
    </div>
  )
}

export default DatePicker