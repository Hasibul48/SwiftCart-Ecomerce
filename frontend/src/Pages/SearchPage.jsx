import { Button } from 'flowbite-react'
import React, { useState } from 'react'

import products from '../Dummy_Data/products';
import SingleProductCard from '../Components/SingleProductCard';
function SearchPage() {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {

        setSearchQuery(e.target.value.toLowerCase())

        const filteredData = products.filter(item => item.title.toLowerCase().includes(searchQuery) || item.name.toLowerCase().includes(searchQuery) || item.category.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery));

        setFilteredProducts(filteredData);
    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section className="bg-pink-100 py-16 container mx-auto rounded-xl mb-14">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
                        Search Products
                    </h2>
                    <p className="text-gray-600 text-lg">

                        Discover an extensive selection of top-quality products in this category, thoughtfully curated to meet all your needs and preferences. Whether you're searching for everyday essentials or unique finds, our collection is designed to inspire and delight.
                    </p>
                </div>
            </section>
            <div className='container mx-auto justify-center flex mb-20 px-6'>
                <input value={searchQuery} onChange={handleSearch} className="w-full lg:w-1/2 border-red-400 rounded-full" type="text" placeholder='Your search query goes here.....' />
                <Button onClick={handleSearch} className='ml-[-40px]' color="purple" pill>
                    Search
                </Button>
            </div>
            <div className="mb-[-50px]">
                <h2 className='text-2xl text-center text-gray-600 font-serif font-bold md:text-3xl lg:text-4xl'>All Products releted to the Search</h2>
                <img className='mt-[-70px] opacity-40 mx-auto' src="/underline.png" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 container mx-auto">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, i) => (
                        <SingleProductCard
                            title={item.title}
                            name={item.name}
                            imgURL={item.imgURL}
                            previousPrice={item.previousPrice}
                            salePrice={item.salePrice}
                            category={item.category}
                            rating={item.rating}
                            desc={item.description}
                            key={i}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center">
                        <h2 className="text-center mb-6">Sorry, No products found matching the Search</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchPage