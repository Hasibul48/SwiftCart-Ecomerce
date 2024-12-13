import React from 'react'

import { Link } from 'react-router-dom'

import { Card } from "flowbite-react";
function SingleProductCard({ title, name, imgURL, previousPrice, salePrice, category, rating, desc }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill={i < rating ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>)

    }

    return (
        <div
            className="max-w-sm hover:shadow-xl transition-shadow mx-auto p-0 rounded-3xl border-2 overflow-hidden h-fit  group">
            <img className='h-72 object-cover p-0 w-screen group-hover:scale-105 transition-transform duration-300' src={imgURL} alt={title} />
            <div className="p-6">
                <Link to={'*'}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-3">
                        {`${title} (${name})`}
                    </h5>
                </Link>

                <div className="mb-5 mt-2.5 flex items-center">
                    {stars}

                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {rating} / 5
                    </span>
                </div>
                <p className='font-semibold mb-3'>Category: {category}</p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{salePrice}$</span>
                        <span className="text-lg ml-1 text-gray-900 dark:text-white line-through">{previousPrice}$</span>
                    </div>
                    <Link
                        to={'*'}
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                        Add to cart
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard