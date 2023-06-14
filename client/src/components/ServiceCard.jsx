import React from 'react'

const ServiceCard = ({name}) => {
  return (
    <div className="service-card">
        <h3 className="text-light ff-primary fs-l">
            {name}
        </h3>
    </div>
  )
}

export default ServiceCard