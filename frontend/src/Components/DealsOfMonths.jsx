import React from "react";
import { FiTruck, FiDollarSign, FiHeadphones } from "react-icons/fi";

function DealsOfTheMonth() {
    return (
        <div className="bg-gray-50 py-10">
            {/* Deals of the Month Section */}
            <div className="max-w-7xl mx-auto md:px-12 lg:px-16">
                <div className="bg-pink-100 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
                    {/* Image Section */}
                    <div className="flex-shrink-0 md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Deal of the Month"
                            className="rounded-lg h-96 mx-auto object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="text-center md:text-left">
                        <p className="text-red-500 font-medium text-sm uppercase">
                            Get Up To 20% Discount
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Deals Of This Month
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Our Men’s Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.
                        </p>

                        {/* Countdown Timer */}
                        <div className="flex justify-center md:justify-start space-x-6 mt-6">
                            {["14 Days", "20 Hours", "15 Mins", "05 Secs"].map((time, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md px-4 py-2 text-center"
                                >
                                    <p className="text-xl font-bold text-gray-900">{time.split(" ")[0]}</p>
                                    <p className="text-sm text-gray-600">{time.split(" ")[1]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {/* Free Delivery */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <FiTruck className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="font-bold text-lg text-gray-900">Free Delivery</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Offers convenience and the ability to shop from anywhere, anytime.
                        </p>
                    </div>

                    {/* Money Back Guarantee */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <FiDollarSign className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="font-bold text-lg text-gray-900">
                            100% Money Back Guarantee
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            E-commerce has a review system where customers can share feedback.
                        </p>
                    </div>

                    {/* Strong Support */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <FiHeadphones className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="font-bold text-lg text-gray-900">Strong Support</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Offer customer support services to assist customers with queries and issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealsOfTheMonth;
