import React from 'react'
import { removeAllCartItems } from '../features/cartSlice'
import { BsChevronLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CartBtns = () => {
    const dispatch = useDispatch();

   const handleClearCart = () => {
        dispatch(removeAllCartItems())
    }


  return (
    <div className="cart-btns-container">
            <Link to='/products' className='btn-link'>
                <span><BsChevronLeft/></span>
                 <p>Continue Shopping</p>
            </Link>

        <button className="btn-red" onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default CartBtns