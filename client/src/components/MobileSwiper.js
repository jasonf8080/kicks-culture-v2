import React from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swipe from './Swipe'

const MobileSwiper = ({refValue, targetID, data}) => {

    const {id} = useParams();

    const [sliderPosition, setSliderPosition] = useState(0)

    useEffect(() => {
        handleScroll(refValue)
    }, [])

       const handleScroll = (value) => {
         if(value){

            value.current.addEventListener('scroll', () => {

              const currentScroll = value.current.scrollLeft;
              const maxScroll = value.current.scrollWidth - value.current.clientWidth;

              setSliderPosition((currentScroll / maxScroll) * 100)
            })
        }
    }




    useEffect(() => {
  
      const targetElement = document.getElementById(targetID);
      const swiperElement = targetElement.querySelector('.swipe-container');

      
      
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 1 // Trigger the callback when 50% of the target is visible
      };

      // Intersection Observer callback function
      const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           setTimeout(() => {
                swiperElement.remove();
           }, 4000);
          } 
        });
      };

      // Create an Intersection Observer
      const observer = new IntersectionObserver(intersectionCallback, options);

      // Observe the target element
      observer.observe(targetElement);

    }, [])


    useEffect(() => {
      setSliderPosition(0)
    }, [id])

  return (
    <div  id={targetID} className='mobile-card-slider'>
      <div className='cards-slider' ref={refValue}>
       {data.map((item, index) => {
            return <Card key={index} {...item}/>
       })}
       <Swipe/>
       </div>

       

       <div className='mobile-slider-width'>
            <div style={{width: `${sliderPosition}%`}} className='width-el'></div>
       </div>
    
    </div>
  )
}

export default MobileSwiper