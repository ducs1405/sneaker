import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames';

import { closeNavbar } from '../../reducers/navbar';

import './Navbar.css'

function Navbar() {

    const dispatch = useDispatch();

    const ok = useSelector((state) => state.navbar);

    const handleCloseNavbar = () => {
        dispatch(closeNavbar());
    };

    return(
        <div className={classNames( 'navbar', 'column', {open:ok} )}>
            <NavLink
                to={'/'}
                onClick={handleCloseNavbar}
            >
                <div className='link-title'>
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink
                to={'/List/Trending'}
                onClick={handleCloseNavbar}
            >
                <div className='link-title'>
                    <span>Trending</span>
                </div>
            </NavLink>
            <NavLink
                to={'/List'}
                onClick={handleCloseNavbar}
            >
                <div className='link-title'>
                    <span>List</span>
                </div>
            </NavLink>
            <NavLink
                to={'/Customs'}
                onClick={handleCloseNavbar}
            >
                <div className='link-title'>
                    <span>Customs</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Navbar