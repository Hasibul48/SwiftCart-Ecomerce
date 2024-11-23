import React from 'react'
import SingleBlog from './SingleBlog'

import BlogsData from '../Dummy_Data/BlogsData'

const showingBlogs = BlogsData.slice(0, 9).map((blog, index) => (
    <SingleBlog
        key={index} // Unique key for each blog
        imgURL={blog.imageUrl}
        title={blog.title}
        desc={blog.desc}
        date={blog.date}
    />))
function Blogs() {
    console.log(BlogsData.length)
    return (
        <div className='container mx-auto'>
            <div className="mb-[-30px]">
                <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>Blogs</h2>
                <img className='mt-[-70px] opacity-40 mx-auto' src="underline.png" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {showingBlogs}
            </div>
        </div>
    )
}

export default Blogs