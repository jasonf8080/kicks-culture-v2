import React from 'react'
import { Link } from 'react-router-dom'

const MainNews = ({articles, handleLinkClick}) => {
  return (
    <div className="articles-grid articles-grid-desktop">
                {articles.map((item, index) => {
                    return (
                    <Link to='/' onClick={handleLinkClick}>
                    <div className="article-item" key={index}>
                        <div className="img-container"><img src={`./images/article${item.index}.png`} alt="articleImg" /></div>

                        <div className="article-item-content">
                            <h3 className="text-sm">{item.title}</h3>
                            <p className='text-xs'>{item.content.substring(0, 85).trim().replace(/[\s]+[^\s]*$/, '') + '...'}</p>
                        </div>
                   </div>
                   </Link>
                    )
                })}
    </div>
  )
}

export default MainNews