import React from 'react'
import { useNavigate } from 'react-router-dom'

const BestSellerCard = ({name, desc, imgUrl}) => {


  const navigate = useNavigate()

  return (
    <div className="seller-card" onClick={() => {navigate('/online-menu')}}>
        <img className='seller-card-img' src={`Image/${imgUrl}.jpg`} alt="item-img" loading='lazy' />
        <h2 className="seller-card-title fw-regular ff-secondary fs-xl">
            {name}
        </h2>
        <p style={{textAlign: `center`}} className="seller-card-desc ff-primary fs-s">
            {desc} 
        </p>
    </div>
  )
}

export default BestSellerCard