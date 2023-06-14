import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'


export const DropDownGroup = ({children, label, icon, onClick, onSelected}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(label)
  const [selected, setSelected] = useState(onSelected)

  const dropDownRef = useRef(undefined)
  const listRef = useRef(undefined)

  useEffect(()=>{
    const lst = listRef.current
    
    const handleOpen = (e) => {

      if(!dropDownRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    const handleValue = (e) => {
      setValue(e.target.id)
      setSelected(true)
    }

    lst.addEventListener('click',handleValue)
    window.addEventListener('mousedown', handleOpen)

    return () => {
      lst.removeEventListener('click',handleValue)
      window.removeEventListener('mousedown', handleOpen)
    }
  },[])
  
  return (
    <div 
      className={`dropdown`} 
      onClick={()=>{setOpen(!open)}}
      ref={dropDownRef}
    >
      <div className={`dropdown-label ${selected ? 'selected': ''}`}>
        <FontAwesomeIcon icon={icon} />
        <span style={{textTransform: 'capitalize'}}>{value}</span>
        <FontAwesomeIcon
          className={open ? 'icon-rotate':'icon'} 
         icon={faChevronDown} 
        />
      </div>
      <ul 
        role='select' 
        className={open ? 'active' : 'inactive'}
        // onClick={(e)=>{setValue(e.target.id), setSelected(true)}}
        onClick={onClick}
        ref={listRef}
      >
        {children}
      </ul>
    </div>
  )
}

export const DropDownItem = ({children, value}) => {
  return (
    <li role='option' className='dropdown-item' id={value} value={value}>
      {children}
    </li>
  )
}
