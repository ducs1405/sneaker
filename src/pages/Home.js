import React from 'react'
import { Link } from 'react-router-dom'

import Products from '../components/Main/Products/Products'
import Slide from '../components/Main/Slider/Slider'

import './Home.css'


const products = [
    {"id": "1", "name": "Giày Nike Air Jordan 1 Retro High OG ‘Heritage’","images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-jordan-1-retro-high-og-heritage-555088-161-13.png.webp" ,"price": "6.890.000"},
    {"id": "2", "name": "Giày Air Jordan 1 Retro High ‘Obsidian UNC’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-air-jordan-1-retro-high-obsidian-unc-575441-140-10.png.webp" ,"price": "19.690.000"},
    {"id": "3", "name": "Giày Air Jordan 1 Mid ‘Dark Teal Green’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/03/httpswww.nicekicks.comair-jordan-1-mid-bq6472-308-7.png.webp" ,"price": "5.290.000"},
    {"id": "4", "name": "Giày Nike Dunk High ‘Cargo Khaki’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-dunk-high-cargo-khaki-dd1399-107-10.png.webp" ,"price": "6.090.000"},
    {"id": "5", "name": "Giày Nike Air Jordan 1 Mid ‘University Blue’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-jordan-1-mid-university-blue-bq6472-141-13.png.webp" ,"price": "5.890.000"},
    {"id": "6", "name": "Giày Nike Air Jordan 1 Mid ‘Coconut Milk’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-jordan-1-mid-coconut-milk-bq6472-121-11.png.webp" ,"price": "4.990.000"},
    {"id": "7", "name": "Giày Nike Air Force 1 Low Fontanka ‘Triple White’", "images": "https://sneakerdaily.vn/wp-content/uploads/2022/04/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-13.png.webp" ,"price": "4.690.000"},
]

function Home () {
    return (
        <>
            <div className='home'>
                <div className='slider-wrapper'>
                    <Slide />
                </div>
                <div className='sale'>
                    <div className='sale-slide row'>
                        <div className='sale-title'></div>
                        <div className='sale-list row'>
                        {
                            products.slice(0,4).map((e) => 
                            <Link
                                className='product'
                                key={e.id}
                                id={e.id}
                                to={`/List/Detail/${e.id}`}
                            >
                                <Products detail={e} />
                            </Link>
                            )
                        }
                        </div>
                    </div>
                </div>
                <div className='trending'>
                        
                </div>
            </div>
        </>
    )
}

export default Home