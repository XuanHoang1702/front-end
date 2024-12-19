import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const fakeProducts = [
        {
            id: 1,
            name: "Product 1",
            price: 99.99,
            alt: "Product 1 Image",
            src : require('../../../assets/image/adr01.jpg')
        },
        {
            id: 2,
            name: "Product 2",
            price: 149.99,
            alt: "Product 2 Image",
            src : require('../../../assets/image/p01.jpg')
        },
        {
            id: 3,
            name: "Product 3",
            price: 199.99,
            alt: "Product 3 Image",
            src : require('../../../assets/image/perfume.jpg')
        },
        {
            id: 4,
            name: "Product 4",
            pricebuy: 49.99,
            alt: "Product 4 Image",
            src : require('../../../assets/image/shose01.jpg')
        },
        {
            id: 5,
            name: "Product 5",
            price: 63.49,
            alt: "Product 5 Image",
            src : require('../../../assets/image/p02.jpg')
        }
    ];

    return (
        <div className="px-10 py-5 ml-9">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">New</h1>
                <div className="flex space-x-6">
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Ardon</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Clother</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Shose</span>
                    <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Earring</span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {fakeProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
