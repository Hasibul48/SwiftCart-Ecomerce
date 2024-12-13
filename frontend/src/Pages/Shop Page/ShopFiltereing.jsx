import React from 'react'

function ShopFiltereing({ filters, filterState, setFilterState, clearFilters }) {
    return (
        <div className="mr-12">
            <h2 className=' font-sans font-bold'>Filter Products</h2>
            <hr />
            <br />
            <hr />
            <h3 className='font-semibold mb-1'>Categories</h3>
            <div className="flex flex-col space-y-1">
                {filters.categories.map(category => (
                    <label className="cursor-pointer" key={category}>
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={category === filterState.category}
                            onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                        />
                        <span className="ml-1">{category}</span>
                    </label>
                ))}
            </div>
            <hr />
            <br />
            <hr />
            <h3 className='font-semibold mb-1'>Price Range</h3>
            <div className="flex flex-col space-y-1">
                {filters.priceranges.map(range => (
                    <label className="cursor-pointer" key={range.label}>
                        <input
                            type="radio"
                            name="pricerange"
                            value={`${range.min}-${range.max}`}
                            checked={`${range.min}-${range.max}` === filterState.pricerange}
                            onChange={(e) => setFilterState({ ...filterState, pricerange: e.target.value })}
                        />
                        <span className="ml-1">{range.label}</span>
                    </label>
                ))}
            </div>
            <br />
            <button onClick={clearFilters} className="bg-red-500 text-white px-4 py-2 rounded">
                Clear Filters
            </button>
        </div>
    );
}

export default ShopFiltereing