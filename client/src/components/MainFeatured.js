import React from 'react'
import Card from './Card'


const MainFeatured = ({data}) => {
  return (
     <div className="cards-grid-container home-cards">
                {data.map((item, index) => {
                    return <Card key={index} {...item}/>
                })}
        </div>
  )
}

export default MainFeatured