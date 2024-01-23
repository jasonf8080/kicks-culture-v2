import React from 'react'
import { CartItem } from '.'
import {BsChevronLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProceedToCheckout from './ProceedToCheckout'
import CartBtns from './CartBtns'



const MainCart = () => {
  const dispatch = useDispatch();
  const {cartItems, totalItems, totalPrice} = useSelector((store) => store.cart);


    
  return (
     <section className="main-section cart-section">
        <div className="container">

            
            <div className="cart-header-grid">
                <p className="text-md">Cart Details</p>
                <p className="text-md cart-center">Amount</p>
                <p className="text-md cart-center">Price</p>
                <p className="text-md cart-center">Total</p>
                <div className="white-line"></div>
            </div>
            
            <div className="cart-items">
                {cartItems.map((item, index) => {
                     return <CartItem key={index} {...item}/>
                })}
            </div>

             <CartBtns/>
            <ProceedToCheckout/>
            
        </div>
    </section>
  )
}

export default MainCart