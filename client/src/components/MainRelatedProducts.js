import React from 'react'
import Card from './Card'

const MainRelatedProducts = ({relatedProducts}) => {
  return (
   <div className='container related-products'>
        <div className="underline"></div>
         <h1 className="heading">Related Products</h1>
        {relatedProducts.length > 0 && 
            <div className="cards-grid-container">
            {relatedProducts.map((item, index) => {
                 return <Card key={index} {...item}/>
            })}
            </div>
        }
    </div>

  )
}

export default MainRelatedProducts