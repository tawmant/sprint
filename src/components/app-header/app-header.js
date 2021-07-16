import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import eng from './united-states.svg';
import rus from './russia.svg';
import kgn from './kyrgyzstan.svg';
import logo from '../../assest/img/logo__footer.svg'

import './_app-header.scss';

const AppHeader = () => {
    const {t} = useTranslation()

    const { i18n } = useTranslation();

    const handleLangChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [togActive, setTogActive] = useState(false)
    let tog = togActive ? 'active' : '';

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__top'>
                        <div className='header__top-left'>
                            <a href="#">
                                <img className="header__logo" src={logo}/>
                            </a>
                        </div>
                        <div className='header__top-right'>
                            <div className='header__lang'>
                                <span onClick={() => handleLangChange('en')}><img className='header__icon' src={eng}/></span>
                                <span onClick={() => handleLangChange('ru')}><img className='header__icon' src={rus}/></span>
                                <span onClick={() => handleLangChange('kg')}><img className='header__icon' src={kgn}/></span>
                            </div>
                            <div className={'search-wrapper ' + tog}>
                                <div className='input-holder'>
                                    <input type='text' className='search-input' placeholder='Type to search' />
                                    <button className='search-icon' onClick={() => setTogActive(!togActive)}><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='header__bottom'>
                        <nav className='header__nav'>
                            <Link to='/' className='header__link'>{t('header.main')}</Link>
                            <Link to='/sprint' className='header__link'>{t('sprint')}</Link>
                            <Link to='/IT' className='header__link'>{t('IT')}</Link>
                            <Link to='/student' className='header__link'>{t('student')}</Link>
                            <Link to='/gallery' className='header__link'>{t('gallery')}</Link>
                            <Link to='/contact' className='header__link'>{t('contact')}</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader;