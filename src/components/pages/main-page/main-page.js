import React from 'react'
import Slider from '../../slider/slider';
import News from '../../news/news';

import './_main-page.scss'

const MainPage = () => {
    return (
        <div className='main'>
            <div className='main__container'>
                <Slider/>
                <News/>
            </div>
        </div>
    )
}

export default MainPage;
