import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterComponent() {
    return (
        <div className="shadow-md border">
            <Footer container>
                <div className="w-full">
                    <div className="flex flex-wrap justify-between items-center sm:flex-row">
                        {/* Brand */}
                        <div>
                            <Footer.Brand
                                href="/"
                                src="SwiftCart.png"
                                alt="Logo"
                                name="SwiftCart"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-4 sm:mt-0">
                            <div>
                                <Footer.Title title="About" />
                                <Footer.LinkGroup col>
                                    <Link to="/">Flowbite</Link>
                                    <Link to="/">Tailwind CSS</Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Link to="/">Github</Link>
                                    <Link to="/">Discord</Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Link to="/">Privacy Policy</Link>
                                    <Link to="/">Terms & Conditions</Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <Footer.Divider />

                    {/* Social Icons */}
                    <div className="flex justify-between items-center w-full mt-4 sm:mt-0">
                        <Footer.Copyright
                            className="z-10"
                            href="/"
                            by="SwiftCart™"
                            year={new Date().getFullYear()}
                        />
                        <div className="flex space-x-6 z-10">
                            <Link to="/" className="hover:text-cyan-500 transition-colors">
                                <BsFacebook size={20} />
                            </Link>
                            <Link to="/" className="hover:text-pink-500 transition-colors">
                                <BsInstagram size={20} />
                            </Link>
                            <Link to="/" className="hover:text-blue-400 transition-colors">
                                <BsTwitter size={20} />
                            </Link>
                            <Link to="/" className="hover:text-gray-600 transition-colors">
                                <BsGithub size={20} />
                            </Link>
                            <Link to="/" className="hover:text-purple-500 transition-colors">
                                <BsDribbble size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center text-sm opacity-70 mt-6 md:mt-[-20px]">
                        Copyright {new Date().getFullYear()} || All rights reserved || Made by <Link className="underline hover:text-purple-950 transition-colors hover:underline-offset-2" to={'https://hmhasibul.netlify.app'}>Hasibul Islam</Link>
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default FooterComponent;
