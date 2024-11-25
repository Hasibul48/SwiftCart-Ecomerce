import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import categoriesData from "../Dummy_Data/catagories";
import productsData from "../Dummy_Data/products";
import SingleProductCard from "../Components/SingleProductCard";

function CategoryPage() {
    const { categoryName } = useParams(); // Get category from URL
    const [categoryDetails, setCategoryDetails] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Find the category details from categoriesData
        const category = categoriesData.find(
            (cat) => cat.categoryName.toLowerCase().replace(/[\s.,&_]+/g, '-') === categoryName.toLowerCase().replace(/[\s.,&_]+/g, '-')
        );

        if (category) {
            setCategoryDetails(category);
        }

        // Filter products for the selected category
        const filteredData = productsData.filter(
            (product) =>
                product.category.toLowerCase().replace(/[\s.,&_]+/g, '-') === categoryName.toLowerCase().replace(/[\s.,&_]+/g, '-')
        );

        setFilteredProducts(filteredData);
    }, [categoryName]);

    return (
        <>
            {/* Category Banner */}
            <section className="bg-pink-100 py-16 container mx-auto rounded-xl mb-14">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
                        {categoryDetails.categoryName || "Unlisted Category"}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {categoryDetails.categoryDescription ||
                            "Browse our amazing collection in this category."}
                    </p>
                </div>
            </section>

            {/* Render Products */}
            <div className="mb-[-50px]">
                <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>All Products releted to {categoryDetails.categoryName || "__"}</h2>
                <img className='mt-[-70px] opacity-40 mx-auto' src="/underline.png" alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 container mx-auto'>
                {
                    filteredProducts.length > 0 ? (filteredProducts.map((item, i) => <SingleProductCard title={item.title} name={item.name} imgURL={item.imgURL} previousPrice={item.previousPrice} salePrice={item.salePrice} category={item.category} rating={item.rating} desc={item.description} key={i} />)) : "No Products Matched with the Category"
                }
            </div>

        </>
    );
}

export default CategoryPage;
