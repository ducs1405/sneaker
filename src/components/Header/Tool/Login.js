import React from 'react'

import { LoginIcon } from '../../Icon/Icon'

import './Login.css'

function Login() {
    return(
        <div className='login'>
            <button className='login-btn'>
                <LoginIcon />
            </button>
        </div>
    )
}

export default Login