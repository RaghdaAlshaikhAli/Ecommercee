import React from 'react'
import './style.scss'

// images
import OneCategory from './oneCategroy'
import fur from '../../../assets/images/fur.jpg'
import bag from '../../../assets/images/bag.jpg'
import shoes from '../../../assets/images/shoes.jpg'
import travel from '../../../assets/images/travel.jpg'
import book from '../../../assets/images/book.jpg'

const Category = () => {
    return (
        <div className='category'>
            <h3>Shop Our Top Categories</h3>
            <div className='flex'>
                <OneCategory title={'Burger'} photo={fur} />
                <OneCategory title={'Pizza'} photo={bag} />
                <OneCategory title={'staek'} photo={book} />
                <OneCategory title={'beef stroganof'} photo={shoes} />
                <OneCategory title={'Kentucky'} photo={travel} />
            </div>
        </div>
    )
}

export default Category
