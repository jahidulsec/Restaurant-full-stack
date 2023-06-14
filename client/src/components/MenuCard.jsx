import React, { useState } from 'react'

const MenuCard = ({ name, desc, imgUrl, price, onAdd}) => {


  return (
    <div className='menu-card'>
        <img className='menu-img' src={imgUrl} alt={name} loading='lazy' />
        <div className="card-header">
            <h4 className='ff-secondary fs-xl fw-regular'>
                {name}
            </h4>
            <span className="price text-yellow ff-primary fw-bold fs-l">${Number(price).toFixed(2)}</span>
        </div>
        <p className="card-desc ff-primary fs-s fw-regular">
            {desc} 
        </p>
        <button 
          className='btn-yellow'
          onClick={() => {onAdd(name, price)}}
        >
          Add to cart
        </button>
    </div>
  )
}

export default MenuCard