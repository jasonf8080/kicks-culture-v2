import React from 'react'
import MobileNewsSlider from './MobileNewsSlider'
import MainNews from './MainNews'
import { articles } from '../utils/data'
import { handleLinkClick } from '../utils/helpers'


const Blog = () => {

  return (
    <>
    <section className="main-section blog-section">
        <div className="container">
             <h1 className="heading text-2xl">Blog Posts</h1>

             <MainNews articles={articles} handleLinkClick={handleLinkClick}/>
             <MobileNewsSlider articles={articles} handleLinkClick={handleLinkClick}/>
        </div>
    </section>
    </>
  )
}

export default Blog