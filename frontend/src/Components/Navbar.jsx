import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar } from "flowbite-react";
function NavbarComponent() {
    return (
        <Navbar fluid rounded className='bg-gray-50 shadow-md '>
            <Navbar.Brand as={Link} href="/">
                <img src="SwiftCart.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SwiftCart</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink className={`hover:bg-red-700 hover:text-white transition-colors text-center py-1 lg:px-3 rounded-3xl mb-4 lg:mb-0`} to={'/'}>Home</NavLink>
                <NavLink className={`hover:bg-red-700 hover:text-white transition-colors text-center py-1 lg:px-3 rounded-3xl mb-4 lg:mb-0`} to={'/about'}>About</NavLink>
                <NavLink className={`hover:bg-red-700 hover:text-white transition-colors text-center py-1 lg:px-3 rounded-3xl mb-4 lg:mb-0`} to={'/shop'}>Shop</NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent