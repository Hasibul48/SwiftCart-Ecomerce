import React from 'react'

import { Button } from 'flowbite-react'
function ContactForm() {
    return (
        <div className="container mx-auto flex justify-center">
            <div className="border lg:w-[70%] md:w-[95%] w-[100%] px-10 md:px-24 py-6 shadow-lg">
                <div className="mb-[-30px]">
                    <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>Contact Us</h2>
                    <img className='mt-[-70px] opacity-40 mx-auto' src="underline.png" alt="" />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" className='rounded-lg border-red-200 bg-red-50 mt-1' placeholder='Enter your name' />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="email">Your Email:</label>
                    <input type="text" className='rounded-lg border-red-200 bg-red-50 mt-1' placeholder='Enter your Email' />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="name">Your Country:</label>
                    <input type="text" className='rounded-lg border-red-200 bg-red-50 mt-1' placeholder='Enter your Country Name' />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="name">Your Message:</label>
                    <textarea name='message' className='rounded-lg border-red-200 bg-red-50 h-24 mt-1' placeholder='Ex: enter your own message with details.....' />
                </div>
                <Button gradientDuoTone="tealToLime" className='mx-auto my-8'>Submit My Informations
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-3 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                    </svg>


                </Button>
            </div>
        </div>
    )
}

export default ContactForm