import React, { useEffect, useState } from 'react'

import productsData from '../../Dummy_Data/products'
import SingleProductCard from '../../Components/SingleProductCard'
import ShopFiltereing from './ShopFiltereing'


const filters = {
    categories: [
        'all',
        'Clothing',
        'Accessories',
        'Electronics',
        'Footwear',
        'Sports & Fitness',
        'Home Decor',
        'Home Appliances',
        'Beauty',
        'Toys & Games',
        'Jewelry',
        'Furniture',
        'Books',
        'Automotive',
        'Groceries',
        'Pet Supplies'
    ],
    priceranges: [
        {
            label: "0$ - 50$",
            min: 0,
            max: 50
        },
        {
            label: "50$ - 100$",
            min: 50,
            max: 100
        },
        {
            label: "100$ - 150$",
            min: 100,
            max: 150
        },
        {
            label: "150$ - 200$",
            min: 150,
            max: 200
        },
        {
            label: "200$ - 300$",
            min: 200,
            max: 300
        },
        {
            label: "Above 300$",
            min: 301,
            max: Infinity
        },
    ]
}
function ShopPage() {
    const [products, setProducts] = useState(productsData)
    const [filterState, setFilterState] = useState({
        category: "all",
        pricerange: ""
    })

    const filterApply = () => {
        let filteredProducts = productsData;

        // Category filtering
        if (filterState.category && filterState.category !== 'all') {
            filteredProducts = filteredProducts.filter(item => item.category === filterState.category);
        }

        // Price filtering
        if (filterState.pricerange) {
            const [minPrice, maxPrice] = filterState.pricerange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(item => item.salePrice >= minPrice && item.salePrice <= maxPrice);
        }

        setProducts(filteredProducts);
    };


    useEffect(() => {
        filterApply()
    }, [filterState])

    //clear filters

    const clearFilters = () => {
        setFilterState({
            category: "all",
            pricerange: ""
        })
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <section className="bg-pink-100 py-16 container mx-auto rounded-xl mb-14">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
                        Availabe Products
                    </h2>
                    <p className="text-gray-600 text-lg">

                        Discover an extensive selection of top-quality products, thoughtfully curated to meet all your needs and preferences. Whether you're searching for everyday essentials or unique finds, our collection is designed to inspire and delight.
                    </p>
                </div>
            </section>
            <div className='flex container mx-auto'>
                <div className="">
                    <ShopFiltereing filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilters={clearFilters} />
                </div>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        products.length > 0 ? products.map((item, i) => (
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
                            />)) : (
                            <div className="flex justify-center col-span-full">
                                <h1 className="text-center font-mono">No products found</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopPage