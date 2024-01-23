import React from 'react'
import { useSelector } from 'react-redux'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProceedToCheckout = () => {

  const {totalItems, totalPrice} = useSelector((store) => store.cart)

  return (
     <div className="cart-total-container">
                <h2 className="text-xl">Order Summary</h2>
                <p className="text-lg">Items: <span className='items'>{totalItems}</span></p>
                <h3 className="text-lg">Total Cost: <span className='subtotal'>${totalPrice}</span></h3>
             

                <div className="btn-transparent-container">
                    <Link to='/checkout' className="btn-link">
                        <p>Proceed to Checkout</p>
                        <span><BsChevronRight/></span>
                    </Link>
                </div>
    </div>
  )
}

export default ProceedToCheckout