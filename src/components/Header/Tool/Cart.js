import React from 'react'

import { CartIcon } from '../../Icon/Icon'

import './Cart.css'

function Cart() {
    return(
        <div className='cart'>
            <button className='cart-btn'>
                <CartIcon />
            </button>
        </div>
    )
}

export default Cart