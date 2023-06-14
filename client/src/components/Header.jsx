import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = ({cartOpen, cart, cartItems}) => {

  const headerRef = useRef(undefined)
  const [active, setActive] = useState(false)
  const [login, setLogin] = useState(false)
  const [userDrop, setUserDrop] = useState(false)
  const [user, setUser] = useState('')
  const {pathname} = useLocation()
  const navDropRef = useRef(undefined)

  useEffect(() => {
    const user = sessionStorage.getItem('user')
    if (user){
      setLogin(true)
      setUser(JSON.parse(user))
    }
  },[pathname])

  useEffect(() => {
    const navDropMenu = navDropRef.current
    const handleNavDropMenu = (e) => {
      if(!navDropMenu.contains(e.target) ){
        setUserDrop(false)
      }
      return
    }

    document.addEventListener('mousedown', handleNavDropMenu)

    return () => {
      document.removeEventListener('mousedown', handleNavDropMenu)
    }
  },[])


  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
      window.addEventListener("scroll", isActive)

      return () => {
          window.removeEventListener("scroll", isActive)
      }
  },[])

  

  useEffect(() => {
    if(pathname){
      window.scrollTo(0,0)
    }
  }, [pathname]);


  return (
    <header className={(active || pathname === '/about' || pathname === '/login' || pathname === '/register') ? 'header view-nav' : 'header'}>
      <h1 className='logo ff-secondary fw-regular text-light fs-xl'>Little Lemon</h1>
      <input type="checkbox" className='nav-toggle' name="nav-toggle" id="nav-toggle" />
      <nav className='nav ff-primary fs-s text-light' ref={headerRef}>
        <ul role='list'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/online-menu'>Online Order</NavLink></li>
          <li><NavLink to='/reservation'>Reservations</NavLink></li>
          {
            login ? 
            <li 
              className='nav-user' 
              id='nav-user'
              onClick={() => {setUserDrop(!userDrop)}}
            >
              <FaUser />{user}
            </li> :
            <li><NavLink to='/login'>Login</NavLink></li>
          }
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className='nav-toggle-label'>
        <span></span>
      </label>
      <span className='cart-icon' onClick={() => {cartOpen(!cart)}}>
        <AiOutlineShoppingCart size={30} />
        {
          cartItems.length !== 0 && 
          <span className="cart-num">{cartItems.length}</span>
        }
      </span>
      <ul 
        role='list'
        id='nav-drop' 
        className={`nav-user-option ff-primary text-dark ${userDrop ? 'nav-user-active': ''}`}
        ref={navDropRef}
        >
        <li>
          <Link 
            to={`/reservation`}
            onClick={() => {setUserDrop(false)}}
          >
            Reservation
          </Link>
        </li>
        <li 
          onClick={() => {setUserDrop(false)}}
        >
          <Link 
            to={`/online-menu`} 
          >
            Online Menu
          </Link>
        </li>
        <li onClick={() => {sessionStorage.removeItem('user'), setUserDrop(!userDrop), window.location.reload()}}>Logout</li>
      </ul>
    </header>
  )
}

export default Header