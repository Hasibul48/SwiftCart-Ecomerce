import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <section className="bg-white font-serif">
            <br />
            <br />
            <br />
            <div className="container mx-auto my-28">
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="bg-cover bg-center h-96 w-96" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}>
                            <h1 className="text-8xl">404</h1>
                        </div>

                        <div className="mt-[-50px]">
                            <h3 className="text-4xl">Look like you're lost</h3>
                            <p className="mt-4">The page you are looking for is not available!</p>
                            <Link to="/" className="inline-block mt-6 px-6 py-2 bg-green-500 text-white rounded-md">
                                Go to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page404;
