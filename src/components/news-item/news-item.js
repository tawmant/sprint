import React from 'react'

import './_news-item.scss'

const NewsItem = ({newsItem}) => {
    const {title, url, description} = newsItem

    return (
        <div className='news__item'>
            <div><img className='news__img' src={url} alt={title}/></div>
            <div className='d-flex flex-column justify-content-between'>
                <div>
                    <h3 className='news__title'><span>{title}</span></h3>
                    <p className='news__description'>{description}</p>
                </div>
                <div>
                    <button className='btn btn-danger'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;