import React, {useEffect} from 'react'
import NewsItem from '../news-item/news-item'
import WithService from '../hoc/with-service'
import Spinner from '../spinner' 
import Error from '../error'
import { useSelector, useDispatch } from 'react-redux'
import {
    newsLoaded,
    newsRequested,
    newsError
} from '../../redux/actions/actions'

import './_news.scss';

const News = ({Service}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(newsRequested())

        Service.getNewsItems()
            .then(res => dispatch(newsLoaded(res)))
            .catch(err => dispatch(newsError()))
    }, [])

    if (state.loading) {
        return <Spinner/>;
    }

    if (state.error) {
        return <Error/>;
    }

    const items = state.news.map(newsItem => {
        return <NewsItem
                id={newsItem.id}
                newsItem={newsItem}
            />
    })

    return (
        <div className='news'>
            {items}
        </div>
    )
}


export default WithService()(News);