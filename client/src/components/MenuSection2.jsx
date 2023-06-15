import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const MenuSection2 = () => {
  return (
    <section className='menu-item2'>
      <div className="item-desc">
        <h1 className='ff-secondary fs-3xl text-yellow fw-regular'>
          Oriental Taste
        </h1>
        <p className="desc ff-primary text-light fs-l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <Link to={`/online-menu`}>
          <Button color={`yellow`}>Order Now</Button>
        </Link>
      </div>
      <div className="menu-item2-img">
        <img src="Image/shawarma.jpg" alt="item-Image" loading='lazy' />
      </div>
      <div className="bg-menu2">
        <svg id="bg-menu2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438.49 643.18"><path d="M-764.78,706.42V397.89h34.28l.13-1.86-20.27-4.69a6.14,6.14,0,0,1,3.92-1.21c35.07-1.77,70.13-3.66,105.21-5.21,6.91-.31,12.94-3.56,19.43-4.62,33.15-5.41,66.45-10,99.6-15.39,16.83-2.74,33.47-6.63,50.19-10a5.77,5.77,0,0,0-4-.85c-33.39,5-66.76,10.22-100.16,15.14-47.6,7-95.39,12.32-143.45,14.84-14.94.78-29.91,1.25-44.86,1.86v-7c1.48.1,3,.33,4.43.29,47.17-1.17,94-5.76,140.71-12.38a1761.84,1761.84,0,0,0,202-40.61c84.9-22.41,169.38-46.38,254-69.69,4.08-1.13,8.11-2.44,12.17-3.66a17.09,17.09,0,0,0-6.46.74c-72.66,19.25-145.28,38.67-218,57.74-108.78,28.53-218.3,53.1-331,59.88-19.26,1.16-38.59,1.16-57.89,1.7V357c4.82-.05,9.64.05,14.44-.18,74.65-3.55,148.46-13.73,221.71-28.24,84-16.65,166.4-39.24,248.32-63.92,42.65-12.84,84.52-28.05,128-38.43C-97.15,213-42.55,197.5,12.17,182.56,104.78,157.29,199,143.13,295,141.35c52.76-1,105.18,2,156.92,13,9.86,2.11,19.64,4.57,29.46,6.86a11.15,11.15,0,0,0-4.45-2.21c-82-23.66-165.42-30.78-250.08-19.2-39.22,5.37-78.25,12.12-117.34,18.44-43.35,7-86.69,13.88-128.87,26.85-21.7,6.67-44.1,11-66.19,16.45l-.37-1.3L-51,188.1a3.75,3.75,0,0,0-3-.36c-22.68,6-45.33,12-68,18q-87.87,23-175.77,45.78c-5.33,1.38-10.87,2-16.31,3l-.36-1.36c1.81-.61,3.61-1.28,5.44-1.82q45.5-13.33,91-26.62c103.17-30,205.84-61.85,310.4-86.92,3.31-.79,6.45-2.62,9.4-4.39,2.26-1.36,2.08-3.5-.34-4.6s-5.31-2.38-8-2.5c-15.26-.68-30.54-1.18-45.82-1.41-4.47-.07-9,.94-13.43,1.45l-.18-1L87.42,111l-.3-1.24-99.47,22.38.28,1.36,33.23-5.42c-30.7,10.08-61.29,20.4-92.48,28.39S-134.2,170.35-165,179.71l15.5.7,0,1.58a135.44,135.44,0,0,1-37.77,6l-.42-1.72,14.29-5.48-.21-.78-24.09,1.26c0-.2,0-.41-.05-.61l320.5-86.64c-92.14,16.38-182.61,40-273.18,63.18a8.85,8.85,0,0,1,2.67-1.35q34.09-10.53,68.18-21C27,102.29,135.13,77.37,246.32,67.18c65.73-6,131.36-5.51,196.81,4.16a614.3,614.3,0,0,1,217.06,75.24c10.13,5.8,14.56,11.75,13.32,23.47-1.19,11.28-.26,22.78-.26,35.14-37.73-25-76.83-45.09-118.68-59.61,8.17,4.06,16.62,7.52,24.95,11.26s16.63,7.62,24.8,11.74c8,4,15.79,8.44,23.68,12.68a2.45,2.45,0,0,1-2.61,0c-56.15-30.31-116-49.87-178.59-61.48-14.36-2.66-28.89-6.36-43.33-6.29-32.1.17-64.18,2.41-96.27,3.84-7.75.34-15.49.81-23.26,1.22-.72,3.42,1.06,4,3.88,4,14.32.23,28.64.57,43,.91,44.14,1.07,88.12,3.78,131.8,10.78,75.19,12.05,144.38,38.66,206.57,82.93a8.72,8.72,0,0,1,4.19,8.12q-.15,237.65-.09,475.27v5.76H-703.32Q-734.05,706.34-764.78,706.42ZM474,86.19A564.62,564.62,0,0,0,316.54,67.61c-43.36,1.08-140.92,13.12-157,19.83C264.27,71.31,369.06,66,474,86.19ZM431.1,88.37c-104-22-206.39-9.06-308.23,14.41C225,84.8,327.48,75,431.1,88.37ZM98.77,188.6C167,171,235.39,157.67,305.18,152.42c-86.08,4.41-169.66,22.37-252,46.91l48.75-8.68-.24-1.3Zm426.92-10.11.36-1.27c-7-2.7-13.89-6.14-21.14-8a582,582,0,0,0-116.76-17.67c-18.38-.84-36.83-.14-49.13-.14C398.63,149.67,462.7,160.2,525.69,178.49Zm-90.37-62.95,67.56,13.17A290.57,290.57,0,0,0,435.32,115.54ZM-12.93,216.31,0,213.49l.1.44-6.6,2.61c.1.3.2.61.31.92L26.71,208l-.31-1.32C12.77,207.68-.12,212.34-12.93,216.31ZM-19,218l-.27-1.12L-41,222.41l.24,1Z" transform="translate(764.78 -63.24)"/></svg>
      </div>
    </section>
  )
}

export default MenuSection2