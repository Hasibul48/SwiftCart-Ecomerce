import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container mx-auto">
            <nav className="flex items-center justify-between px-6 py-4 border-b">
                {/* Left Navigation NavLinks (Hidden on Mobile) */}
                <ul
                    className={`fixed top-0 left-0 w-full h-1/3 mt-12 md:mt-0 bg-white flex flex-col items-center justify-center space-y-2 text-gray-800 font-medium z-50 transform transition-transform duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-0 md:h-auto md:w-auto ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0`}
                >
                    <li className="w-full flex justify-center">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `py-2 px-5 rounded-3xl transition-all w-full text-center ${isActive
                                    ? "bg-red-100 text-red-700"
                                    : "hover:bg-red-100 hover:text-gray-500"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="w-full flex justify-center">
                        <NavLink
                            to={"/shop"}
                            className={({ isActive }) =>
                                `py-2 px-5 rounded-3xl transition-all w-full text-center ${isActive
                                    ? "bg-red-100 text-red-700"
                                    : "hover:bg-red-100 hover:text-gray-500"
                                }`
                            }
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li className="w-full flex justify-center">
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                `py-2 px-5 rounded-3xl transition-all w-full text-center ${isActive
                                    ? "bg-red-100 text-red-700"
                                    : "hover:bg-red-100 hover:text-gray-500"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="w-full flex justify-center">
                        <NavLink
                            to={"/contact"}
                            className={({ isActive }) =>
                                `py-2 px-5 rounded-3xl transition-all w-full text-center ${isActive
                                    ? "bg-red-100 text-red-700"
                                    : "hover:bg-red-100 hover:text-gray-500"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Center Logo */}
                <div className="text-2xl font-bold text-gray-900 flex justify-center items-center">
                    <img src="/SwiftCart.png" className="size-7 mr-1" alt="" />
                    SwiftCart<span className="text-red-500">.</span>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-6 text-gray-800">
                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        {menuOpen ? (
                            <FiX
                                className="w-6 h-6 hover:text-gray-500 "
                                onClick={() => setMenuOpen(false)}
                            />
                        ) : (
                            <FiMenu
                                className="w-6 h-6 hover:text-gray-500"
                                onClick={() => setMenuOpen(true)}
                            />
                        )}
                    </div>

                    {/* Icons for Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink className={({ isActive }) =>
                            `py-2 px-2 rounded-full transition-all w-full text-center ${isActive
                                ? "bg-red-100 text-red-700"
                                : "hover:bg-red-100 hover:text-gray-500"
                            }`
                        } to={"/search"}>
                            <FiSearch className="w-5 h-5 hover:text-gray-500" />
                        </NavLink>
                        <NavLink className={({ isActive }) =>
                            `py-2 px-2 rounded-full transition-all w-full text-center ${isActive
                                ? "bg-red-100 text-red-700"
                                : "hover:bg-red-100 hover:text-gray-500"
                            }`
                        } to={"/dcced"}>
                            <div className="relative">
                                <FiShoppingCart className="w-5 h-5 hover:text-gray-500" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    0
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to={"/fgdsgsdrg"} className={({ isActive }) =>
                            `py-2 px-2 rounded-full transition-all w-full text-center ${isActive
                                ? "bg-red-100 text-red-700"
                                : "hover:bg-red-100 hover:text-gray-500"
                            }`
                        }>
                            <FiUser className="w-5 h-5 hover:text-gray-500" />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
