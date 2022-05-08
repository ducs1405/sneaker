import React from 'react'
import { useParams } from 'react-router-dom'

import './Products.css'

function Products({ detail }) {

    const { id } = useParams()

    return(
        <div className='products'>
                <div className='products-container'>
                    <div className='products-images'>
                        <img
                            className='products-img'
                            src={detail.images}
                            alt='products-img' />
                    </div>
                    <div className='products-description column'>
                        <div className='products-name'>
                            <span>{detail.name}</span>
                        </div>
                        <div className='products-price'>
                            <span>{detail.price}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Products