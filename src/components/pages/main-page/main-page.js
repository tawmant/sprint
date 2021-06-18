import React from 'react'
import Slider from '../../slider/slider';
import News from '../../news/news';

import './_main-page.scss'

const MainPage = () => {
    return (
        <div className='w-50'>
            {/* <Slider/> */}
            <News/>
        </div>
    )
}

export default MainPage;
