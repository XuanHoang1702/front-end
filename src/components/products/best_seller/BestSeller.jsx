import React from 'react';
import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
    const fakeProducts = [
        {
            id: 1,
            name: "Product 1",
            pricebuy: 99.99,
            alt: "Product 1 Image",
            src: require('../../../assets/image/adr02.jpg'),
        },
        {
            id: 2,
            name: "Product 2",
            pricebuy: 149.99,
            alt: "Product 2 Image",
            src: require('../../../assets/image/shose02.jpg'),
        },
        {
            id: 3,
            name: "Product 3",
            pricebuy: 199.99,
            alt: "Product 3 Image",
            src: require('../../../assets/image/aer.jpg'),
        },
        {
            id: 4,
            name: "Product 4",
            pricebuy: 49.99,
            alt: "Product 4 Image",
            src: require('../../../assets/image/clother02.jpg'),
        },
        {
            id: 5,
            name: "Product 5",
            pricebuy: 63.49,
            alt: "Product 5 Image",
            src: require('../../../assets/image/p03.jpg'),
        },
    ];

    return (
        <div className="px-10 py-5 ml-9">
            {/* Container for BestSaller and categories */}
            <div className="flex justify-between items-center mb-8">
                {/* Best Seller title */}
                <h1 className="text-3xl font-semibold text-gray-800">Best Seller</h1>

                {/* Categories list */}
                <div className="flex space-x-6">
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Ardon</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Clother</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Shose</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Earring</span>
                </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {fakeProducts.map(product => (
                    <BestSellerCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
