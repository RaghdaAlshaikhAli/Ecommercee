import React from 'react'
import './style.scss'

const OneCategory = ({ title, photo, desc }) => {
    return (
        <div className='OneCategory'
            style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
            }}>
            <h4>{title}</h4>
            <div>
                <h5>{'desc'}</h5>
            </div>
        </div>
    )
}

export default OneCategory
