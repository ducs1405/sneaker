import React from 'react'

import Filter from '../components/Main/Filter/Filter'

import './List.css'

function List() {
    return(
        <div className='list'>
            <div className='filter-wrapper'>
                <div className='filter-title'>
                    <h3>Filter</h3>
                </div>
                <Filter />
            </div>
        </div>
    )
}

export default List