import React, {useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import Swipe from './Swipe'
import MobileSwiper from './MobileSwiper'

const MobileRelatedProducts = ({relatedProducts}) => {

  const relatedSlider = useRef(null)



  return (
    
    <div className="container mobile-related-products">
        <div className="underline"></div>
         <h1 className="heading" style={{marginTop: '30px'}}>Related Products</h1>

        <MobileSwiper data={relatedProducts} refValue={relatedSlider} targetID={'relatedSlider'}/>
     
    
    </div>
  )
}

export default MobileRelatedProducts