import React, { useEffect, useState } from 'react'
import MenuCard from '../components/MenuCard'
// import { category, menuItems } from '../data'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { faL, fas } from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/Loading'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import newRequest from '../utilities/newRequest'

const Menu = ({onAdd}) => {

  const [limit, setLimit] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNumber, setPageNumber] = useState([])
  const [catSelected, setCatSelected] = useState('')

  

  //  fetching category
  const { isLoading: loadingCat, error: errorCat, data: cat } = useQuery({
    queryKey: ['category'],
    queryFn: () => 
      newRequest.get('/api/category/').then(
        (res) => {
          return res.data
        }
      )
  })




  //  fetching data from api
  const { isLoading, error, data } = useQuery({
    queryKey: ['menuItem', currentPage, catSelected],
    queryFn: () =>
      newRequest.get(`/api/menu-items/?page=${currentPage}${catSelected ? `&category=${catSelected}` : ''}`).then(
        (res) => {
          return res.data
        }
      )
  })



  const handlePageNumber = () => {
    if (data) {
      let numberOfPage = data.count / limit 
      numberOfPage = Math.ceil(numberOfPage)
      let num = Array.from({length: numberOfPage}, (_, i) => i + 1)
      setPageNumber(num)
    }
    else{
      return
    }
  }

  


  useEffect(() => {

    if (catSelected) {
      setCurrentPage(1)
    }
    handlePageNumber()

  }, [data,currentPage,catSelected])



  const handleNext = () => {
    if  (data.next === null) {
      return 
    }
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrev = () => {
    if  (data.previous === null) {
      return 
    }
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <section className='menu-section'>
      <div className='header'>
        <h1 className="text-yellow ff-secondary fs-3xl fw-regular">
          Our Choice
        </h1>
        <h2 className='text-light fw-regular ff-primary fs-l'>
          Online Menu
        </h2>
      </div>
      <div className="menu-item-section">
        <div className="header">
          <h3 className="text-dark fw-bold fs-l ff-primary">
            Order for Delivery!
          </h3>
          <div className="query-list">
            {
              loadingCat ? <span className="loading"></span> : errorCat ? 'Something Went Wrong!' :
              cat.results.map(cat => (
                <button 
                  className={`btn-pagination ${catSelected == cat.id ? 'page-selected' : ''}`}
                  key={cat.id}
                  value={cat.id}
                  onClick={(e) => {
                    catSelected != cat.id ? 
                      setCatSelected(e.target.value) 
                      :
                      setCatSelected("")}}
                >
                  {cat.title}
                </button>
              ))
            }
          </div>
        </div>
        {
          isLoading ? <Loading /> : error ? "Something went wrong!" :
        <div className="menu-cards">
          {
            data.results.map( item => (
              <MenuCard 
                key={item.id}
                name={item.title}
                price={item.price}
                desc={item.desc}
                imgUrl={item.img_url}
                onAdd={onAdd}
              />
            ))
          }
        </div>}
        <div 
          className={`pagination ${pageNumber.length < 2 ? 'pagination-hidden' : '' }`}
        >
          <button 
            className='btn-pagination'
            onClick={handlePrev}  
          >
            <AiOutlineLeft />
            Prev
          </button>
          {
            pageNumber.map(num => (
              <button 
                key={num}
                value={num}
                className={`btn-pagination ${currentPage == num ? 'page-selected' : ""}`}
                onClick={(e) => {setCurrentPage(Number(e.target.value))}}
              >
                {num}
              </button>
            ))
          }
          <button 
            className='btn-pagination'
            onClick={handleNext}
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu