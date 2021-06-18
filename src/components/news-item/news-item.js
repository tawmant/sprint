import React from 'react'

const NewsItem = ({newsItem}) => {
    const {title, url, description} = newsItem
    
    return (
        <div className='news__item'>
            <div><img src={url} alt={title}/></div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default NewsItem;