import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './style.scss'

const Logo = () => {
    return (
        <div className='LogoApp'>
            <Link to={'/'}>
                <IoFastFoodOutline className='logo' />
                <span> Resturant</span>
            </Link>
        </div>
    )
}

export default Logo
