import React from 'react'
import MobileCartItem from './MobileCartItem'
import { useDispatch, useSelector } from 'react-redux'
import ProceedToCheckout from './ProceedToCheckout'
import CartBtns from './CartBtns'


const MobileCart = () => {
    const {cartItems} = useSelector((store) => store.cart)

  return (
    <div className="mobile-cart">
        <div className="container">
            <h2 className='text-lg heading mobile-cart-heading'>Cart Details</h2>
            <div className="white-line"></div>
                
        
            <div className="mobile-cart-items" style={{marginBottom: '30px'}} >
                    {cartItems.map((item, index) => {
                        return <MobileCartItem key={index} {...item}/>
                    })}
            </div>

            <CartBtns/>
           <ProceedToCheckout/>
            
        </div>
    </div>
  )
}

export default MobileCart