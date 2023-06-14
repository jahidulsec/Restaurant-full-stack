import React from 'react'
import {MdClose} from 'react-icons/md'
import { menuItems } from '../data'
import { Link, useNavigate } from 'react-router-dom'

const Cart = ({cart, cartOpen, cartItems, onDelete, onReset, cartPrices, cartTotal}) => {

    const navigate = useNavigate()
    
    console.log(cartTotal, cartPrices)
    
  return (
    <section className={`cart-sidebar ${!cart ? 'cart-hidden': ''}`}>
        <div className="cart-header">
            <span>Your Cart</span>
            <span className="cart-icon" onClick={() => {cartOpen(false)}}>
                <MdClose size={25} />
            </span>
        </div>
        <div className="cart-container">

            {
                cartItems.map((item,idx) => (
                    <div key={idx} className="cart-item">
                        <div className="cart-desc">
                            <span className="item-title">{item.name}</span>
                            <span className="item-price">$ {item.price.toFixed(2)} </span>
                        </div>
                        <MdClose 
                            className='item-del' 
                            size={20} 
                            onClick={()=> {onDelete(item.id)}}
                        />
                    </div>
                ))
            }
            
            
           
            <hr />
            <div className="cart-total">
                <span className="item-title">Total</span>
                <span className="item-price">
                    $ {cartTotal.toFixed(2)}
                </span>
            </div>
            <div className="cart-btns">
                <button 
                    className='btn-yellow'
                    onClick={() => {navigate('/payment')}}
                >
                    Pay your bill
                </button>
                <button className='btn-yellow'
                    onClick={() => {onReset()}}
                >
                    Reset
                </button>
            </div>
            
        </div>
    </section>
  )
}

export default Cart