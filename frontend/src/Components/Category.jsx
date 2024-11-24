import React from 'react'

import { Link } from 'react-router-dom'
function Category({ categoryName, path, imgURL }) {
    return (
        <>
            <div className='border p-3 text-center hover:shadow-lg group transition-shadow'>
                <Link to={path}>
                    <img className='w-40 h-40 object-cover rounded-full mb-3 group-hover:scale-105 transition-all' src={imgURL} alt="Image Not Found" />
                    <h4>{categoryName}</h4>
                </Link>
            </div>
        </>
    )
}

export default Category