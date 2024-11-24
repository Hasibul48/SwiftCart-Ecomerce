import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'flowbite-react'

function SingleBlog({ imgURL, title, desc, date, fullBlog }) {
    return (
        <div
            className="max-w-sm hover:shadow-xl transition-shadow mx-auto p-0 rounded-3xl border-2 overflow-hidden  group">
            <img className='h-72 object-cover w-screen group-hover:scale-105 transition-transform duration-300' src={imgURL} alt={title} />
            <div className="p-6">
                <Link to={'*'}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white  line-clamp-2">
                        {title}
                    </h5>
                </Link>
                <p className='line-clamp-4 mt-2'>{fullBlog}</p>
                <p className='my-2 mb-4'>Published at: {" " + date}</p>

                <Link to={"#"}>
                    <Button>Read Full Blog</Button>
                </Link>
            </div>
        </div>
    )
}

export default SingleBlog