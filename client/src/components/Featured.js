import React, { useEffect, useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { clearFilters } from '../features/filterSlice'
import { featuredSneakers } from '../utils/data'
import MainFeatured from './MainFeatured'
import MobileSwiper from './MobileSwiper'


const Featured = () => {


    const dispatch = useDispatch();
    const cardSlider = useRef(null)


   




  return (
   <section className="featured-section">
    <div className="container">
        <h1 className="heading text-2xl">Featured Products</h1>

        <MainFeatured data={featuredSneakers}/>
        <MobileSwiper data={featuredSneakers} refValue={cardSlider} targetID={'cardSlider'}/>

        <Link to='/products' onClick={() => dispatch(clearFilters())} className="btn-black view-all text-sm">View All Products</Link>
    </div>
   </section>
  )
}

export default Featured