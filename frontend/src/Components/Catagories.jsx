import React from 'react'

import categories from '../Dummy_Data/catagories'
import Category from './Category'
function Catagories() {

    return (
        <>
            <div className="mb-[-50px]">
                <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>Product Categories</h2>
                <img className='mt-[-70px] opacity-40 mx-auto' src="underline.png" alt="" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 px-8'>
                {categories.map((item) => <Category key={item.path} categoryName={item.categoryName} path={`/category/${item.categoryName.toLowerCase().replace(/[\s]+/g, '-')}`} imgURL={item.imgURL} />)}
            </div>
        </>
    )
}

export default Catagories