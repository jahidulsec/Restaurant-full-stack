import React from 'react'
import BestSellerCard from './BestSellerCard'

const BestSeller = () => {
  return (
    <section className='best-seller-section'>
      <div className="container">
        <h1 className="ff-secondary fw-regular fs-3xl text-dark">
          Best Seller
        </h1>
        <p style={{width:`50%`}} className="ff-primary fw-regular fs-l text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magni hic inventore exercitationem maiores! Odio 
        </p>
        <div className="best-seller-cards">
          <BestSellerCard 
            name={`Pasta`}
            desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
            imgUrl={`pasta`}
          />
          <BestSellerCard 
            name={`Chicken Skewers`}
            desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
            imgUrl={`chicken-skewers`}
          />
          <BestSellerCard 
            name={`Shawarma`}
            desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
            imgUrl={`shawarma`}
          />

        </div>
      </div>
    </section>
  )
}

export default BestSeller