import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'flowbite-react'

function SingleBlog({ imgURL, title, desc, date }) {
    return (
        <div
            className="max-w-sm hover:shadow-xl transition-shadow mx-auto p-0 rounded-3xl border-2">
            <img className='h-72 object-cover w-screen' src={imgURL} alt={title} />
            <div className="p-6">
                <Link to={'*'}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>
                <p>{desc}</p>
                <p className='my-1'>Published at: {" " + date}</p>

                <Button>Read Full Blog</Button>
            </div>
        </div>
    )
}

export default SingleBlog