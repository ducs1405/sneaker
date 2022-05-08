import React from 'react'
import { Link } from 'react-router-dom';

import Search from './Search/Search'
import Menu from './Menu/Menu'
import Login from './Tool/Login';

import './Header.css'
import Cart from './Tool/Cart';

function Header() {

    console.log('header-render')

    return(
        <div className='header row'>
            <div className='left'>
                <Menu />
            </div>
            
            <div className='middle'>
                <Link 
                    className='web-logo row'
                    to={'/'}
                >
                    <span className='logo-icon'>My Shopppp</span>
                </Link>
            </div>
            
            <div className='right row'>
                <Search />
                <Cart />
                <Login />
            </div>
            
        </div>
    )
}

export default Header