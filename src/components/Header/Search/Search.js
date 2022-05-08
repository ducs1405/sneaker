import React, { useRef, useState } from 'react'
import classNames from 'classnames'

import { SearchIcon } from '../../Icon/Icon'

import './Search.css'

function Search() {

    console.log('search-render')

    const [ open, setOpen ] = useState(false)
    const [ text, setText ] = useState('')
    const element = useRef(null)

    const handleSearchButton = () => {
        if(!open) {
            setOpen(true)
            document.addEventListener("click",handleClickOutside)
        }
    }
    
    const handleClickOutside = (e) => {
        if(!open && !element.current.contains(e.target)) {
            setOpen(false)
            document.removeEventListener("click",handleClickOutside)
        }}

    return(
        <div
            ref={element}
            className={classNames('search row', {'search-open':open})}>
            <input
                
                type='text'
                value={text}
                onChange={e => setText(e.target.value)}
                className={classNames('search-input', {'input-open':open})}
            />
            <button
                className='search-button'
                onClick={handleSearchButton}
            >
                <SearchIcon fillst={open} />
            </button>
        </div>
    )
}

export default Search