import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { getCategories, getColors, getSizes } from '../../../reducers/filter'

import { ColorIcon } from '../../Icon/Icon'

import './Filter.css'

const categories = [
    {"id": "0", "name": "lifestyle"},
    {"id": "1", "name": "running"},
    {"id": "2", "name": "gym"},
    {"id": "3", "name": "soccer"},
]
const colors = [
    {"id": "0", "name": "white"},
    {"id": "1", "name": "gray"},
    {"id": "2", "name": "yellow"},
    {"id": "3", "name": "orange"},
    {"id": "4", "name": "red"},
    {"id": "5", "name": "violet"},
    {"id": "6", "name": "blue"},
    {"id": "7", "name": "green"},
    {"id": "8", "name": "black"},
    {"id": "9", "name": "mutilcolor"},
]

const sizes = [
    {"id": "0", "name": "20"}, {"id": "1", "name": "21"}, {"id": "2", "name": "22"},
    {"id": "3", "name": "23"}, {"id": "4", "name": "24"}, {"id": "5", "name": "25"},
    {"id": "6", "name": "26"}, {"id": "7", "name": "27"}, {"id": "8", "name": "28"},
    {"id": "9", "name": "29"}, {"id": "10", "name": "30"}, {"id": "11", "name": "31"},
    {"id": "12", "name": "32"}, {"id": "13", "name": "33"}, {"id": "14", "name": "34"},
    {"id": "15", "name": "36"}, {"id": "17", "name": "37"}, {"id": "31", "name": "38"},
]

function Filter() {

    const dispatch = useDispatch()

    const ok = useSelector((state) => state.categories)

    const handleGetCategories = (e) => {
        const set = e.name
        dispatch(getCategories({set}));
        console.log(ok);
    }

    return(
        <div className='filter'>
            <div className='categories-wrapper'>
                <div className='categories-title'>
                    <span>Categories</span>
                </div>
                <div className='categories-list column'>
                {categories.map((e, index) => 
                    <div className={classNames(e.name,'set-categories')} key={index}>
                        <button
                            className='filter-btn' 
                            onClick={() => handleGetCategories(e)}
                        >
                            {e.name}
                        </button>
                    </div>
                )}
                </div>
            </div>
            <div className='colors-wrapper'>
                <div className='color-title'>
                    <span>Colors</span>
                </div>
                <div className='color-list row'>
                {colors.map((e, index) => 
                    <div
                        style={
                            e.name === "mutilcolor" ? 
                            {background:"linear-gradient(to right,red,orange,yellow,green,blue,violet)"} : 
                            {background:e.name}
                        }
                        className={classNames(e.name,'set-color')} 
                        key={index}
                    >
                        <button className='filter-btn'>
                            <ColorIcon color={e.name}/>
                        </button>
                    </div>
                )}
                </div>
            </div>
            <div className='sizes-wrapper'>
                <div className='sizes-title'>
                    <span>Sizes</span>
                </div>
                <div className='sizes-list row'>
                {sizes.map((e, index) => 
                    <div className={classNames('set-sizes')} key={index}>
                        <button className='filter-btn'>{e.name}</button>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Filter