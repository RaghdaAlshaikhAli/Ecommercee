import React from 'react'
import './style.scss'

// images
import OneCategory from './oneCategroy'
import fur from '../../../assets/images/beaf.jpg'
import bag from '../../../assets/images/pizza.jpg'
import shoes from '../../../assets/images/burger.jpg'
import travel from '../../../assets/images/steak.jpg'
import book from '../../../assets/images/ken.jpg'

const Category = () => {
    return (
        <div className='category'>
            <h3>Some types of menu</h3>
            <div className='flex'>
                <OneCategory title={'Burger'} photo={fur} />
                <OneCategory title={'Pizza'} photo={bag} />
                <OneCategory title={'staek'} photo={book} />
                <OneCategory title={'staek'} photo={book} />
                <OneCategory title={'beef stroganof'} photo={shoes} />
                <OneCategory title={'Kentucky'} photo={travel} />
            </div>
        </div>
    )
}

export default Category
