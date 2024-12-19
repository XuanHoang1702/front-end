import React from 'react';
import { FaBasketballBall, FaBook, FaHeart, FaHome, FaLaptop, FaTshirt } from 'react-icons/fa';

const categories = [
    { name: 'Fashion', icon: <FaTshirt /> },
    { name: 'Electronics', icon: <FaLaptop /> },
    { name: 'Home', icon: <FaHome /> },
    { name: 'Beauty', icon: <FaHeart /> },
    { name: 'Books', icon: <FaBook /> },
    { name: 'Sports', icon: <FaBasketballBall /> },
];

const Category = () => {
    return (
        <div className="bg-gradient-to-br p-6 rounded-lg m-5 border border-purple-500 shadow-xl h-[600px]">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">
                Categories
            </h2>
            <div className="flex flex-col gap-5">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative flex items-center gap-4 bg-purple-600 text-white py-4 px-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer group hover:bg-purple-700"
                    >
                        <div className="text-3xl text-white absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-black">
                            {category.icon}
                        </div>
                        
                        <div className="text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">
                            {category.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
