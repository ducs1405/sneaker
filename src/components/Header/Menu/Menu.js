import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openNavbar, closeNavbar } from '../../../reducers/navbar'

import { MenuIcon } from '../../Icon/Icon'

import './Menu.css'

function Menu() {

    const dispatch = useDispatch()

    const togglenavbar = useSelector((state) => state.navbar)

    const handleToggleNavbar = () => {
        togglenavbar ? dispatch(closeNavbar()) : dispatch(openNavbar())
    }

    return(
        <div className='menu column'>
            <button
                className='menu-button'
                onClick={handleToggleNavbar}
            >
                <MenuIcon />
            </button>
        </div>
    )
}

export default Menu