import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { NextIcon, PrevIcon } from '../../Icon/Icon'

import './Slider.css'

const products = [
    {"id": "0", "name": "Giày Nike Air Jordan 1 Retro High OG ‘Heritage’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://i.ibb.co/0rGM9kS/U1.png","price": "6.890.000"},
    {"id": "1", "name": "Giày Air Jordan 1 Retro High ‘Obsidian UNC’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://i.ibb.co/gwL23YZ/U2.png" ,"price": "19.690.000"},
    {"id": "2", "name": "Giày Air Jordan 1 Mid ‘Dark Teal Green’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://i.ibb.co/Y7WGs60/U3.png" ,"price": "5.290.000"},
    {"id": "3", "name": "Giày Nike Dunk High ‘Cargo Khaki’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://i.ibb.co/PrMkW1X/U4.png" ,"price": "6.090.000"},
    {"id": "4", "name": "Giày Nike Air Jordan 1 Mid ‘University Blue’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://i.ibb.co/Kh67xYp/U5.png" ,"price": "5.890.000"},
    {"id": "5", "name": "Giày Nike Air Jordan 1 Mid ‘Coconut Milk’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-jordan-1-mid-coconut-milk-bq6472-121-11.png.webp" ,"price": "4.990.000"},
    {"id": "6", "name": "Giày Nike Air Force 1 Low Fontanka ‘Triple White’", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-13.png.webp" ,"price": "4.690.000"},
]

function Slider() {

    console.log('slider-render')

    const [ count , setCount ] = useState(2)

    const length = 5

    const handleNext = () => {
        setCount(count === length - 1 ? 0 : count + 1)
    }

    const handlePrev = () => {
        setCount(count === 0 ? length - 1 : count - 1)
    }

    function handleClick({index}) {
        if(index !== count)
            setCount(index)
    }

    useEffect(() => {
        const delay = setTimeout(() => 
            setCount((count) => count === length - 1 ? 0 : count + 1)
        ,7000)
        return () => clearTimeout(delay)
    },[count])

    return(
        <div className='slider'>
            { products.slice(0,5).map((e, index) => 
                <div 
                    className={index === count ? 'slide sl-active' : 'slide'}
                    key={index}
                >
                    <div className='img-wrapper'>
                        <img
                            className='slider-img'
                            src={e.images}
                            alt=''
                        />
                    </div>
                    <div className='column slider-information'>
                        <h2>{e.name}</h2>
                        <div className='slider-description'>
                            <span>{e.description}</span>
                        </div>
                        <div className='slider-money'>
                            <span>{e.price}</span>
                        </div>
                        <div className='slider-infor'>
                            <Link
                                className='slider-link'
                                to={`/List/Detail/`}
                            >
                                More infor
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <div className='dots row'>
            {products.slice(0,5).map((e,index) =>
                <div 
                    className={count === index ? 'dot-icon dot-active' : 'dot-icon'} 
                    key={index}
                >
                    <button
                        id={index}
                        className='dot-btn'
                        onClick={(a) => handleClick({index})}
                    ></button>
                </div>
            )}
            </div>
            <div className='prev'>
                <button
                    className='prev-btn'
                    onClick={handlePrev}
                >
                    <PrevIcon />
                </button>
            </div>
            <div className='next'>
                <button
                    className='next-btn'
                    onClick={handleNext}
                >
                    <NextIcon />
                </button>
            </div>
        </div>
    )
}

export default Slider