import React, { useEffect, useReducer, useState } from 'react'
import Footer from './components/Footer'
import "./App.css"
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Registration from './pages/Registration'
import ConfirmationPage from './pages/ConfirmationPage'
import { AlertProvider } from './context/alertContext'
import Modal from './components/Modal'
import About from './components/About'
import Cart from './components/Cart'
import Payment from './pages/Payment'


const reducer = (state, action) => {
  switch(action.type) {
    case 'added': {
      return [
        ...state,
        {
          id: action.id,
          name: action.name, 
          price: action.price,
        }
      ]
    }
    case 'deleted': {
      return state.filter((item) => {
        return item.id !== action.id
      })
    }

    case 'reset': {
      return []
    }
    default: {
      throw Error('unknown action ' + action.type)
    }
  }
}


const App = () => {

  const [cart, setCart] = useState(false)
  const [cartItems, dispatch] = useReducer(reducer, [])

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  const cartPrices = cartItems.map(item => {
    return item.price
}) 

let cartTotal = cartPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);

  const handleAddCart = (name, price) => {
    dispatch({
      type: 'added',
      id: nextId++,
      name: name,
      price: price,
    })
  }

  const handleCartItemDelete = (id) => {
    dispatch({
      type:'deleted',
      id: id,
    })
  }

  const handleResetCart = () => {
    dispatch({
      type:'reset',
    })
  }

  return (
    <div className='app'>
      <Header cartOpen={setCart} cart={cart} cartItems={cartItems} />
      <AlertProvider>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/confirmation' element={<ConfirmationPage />} />
            <Route path='/online-menu' element={<Menu onAdd={handleAddCart} />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/payment' element={<Payment cartTotal={cartTotal} />} />
          </Routes>
          <Modal />
          <Cart 
            cart={cart} 
            cartOpen={setCart} 
            cartItems={cartItems} 
            cartPrices={cartPrices}
            cartTotal={cartTotal}
            onDelete={handleCartItemDelete}
            onReset={handleResetCart}
          />
        </main>
      </AlertProvider>
      <Footer />
    </div>
  )
}


let nextId = 0
export default App