import React from 'react'
import SingleProductCard from './SingleProductCard'

import productsData from '../Dummy_Data/Products'

import { Button } from 'flowbite-react'

function TrendingProducts() {

    const showingProducts = []

    for (let i = 0; i <= 11; i++) {
        showingProducts.push(<SingleProductCard title={productsData[i].title} name={productsData[i].name} imgURL={productsData[i].imgURL} previousPrice={productsData[i].previousPrice} salePrice={productsData[i].salePrice} category={productsData[i].category} rating={productsData[i].rating} desc={productsData[i].description} key={i} />)
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="mb-[-50px]">
                    <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>Trending Products</h2>
                    <img className='mt-[-70px] opacity-40 mx-auto' src="underline.png" alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                    {
                        // productsData.map((product) => <SingleProductCard title={product.title} name={product.name} imgURL={product.imgURL} previousPrice={product.previousPrice} salePrice={product.salePrice} category={product.category} rating={product.rating} desc={product.description} />)

                        showingProducts
                    }
                </div>

                <Button gradientDuoTone="tealToLime" className='mx-auto my-8  group'>See More (Shop Page) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 my-auto ml-2 group-hover:text-red-600 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </Button>
            </div>
        </>
    )
}

export default TrendingProducts