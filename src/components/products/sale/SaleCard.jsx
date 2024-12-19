import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SaleCard = ({ product }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/details/${product.id}`);
    };

    return (
        <div
        className="bg-white p-4 rounded-lg relative shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out"
        onClick={handleNavigate}>
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:opacity-90 transition duration-200">
                {product.discount ? `${product.discount}% OFF` : "Sale"}
            </span>

            <img
                src={product.src}
                alt={product.alt}
                className="w-full h-[230px] object-cover mb-4 rounded-md transition-transform duration-300 hover:scale-105"
            />

            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate text-center">{product.name}</h2>
                
                <div className="flex items-center justify-center gap-2">
                    {product.discount && (
                        <p className="text-lg text-red-500 font-bold line-through">${product.pricebuy}</p>
                    )}
                    <p className={`text-lg ${product.discount ? 'text-green-600' : 'text-red-500'} font-semibold`}>
                        ${product.discount
                            ? (product.pricebuy - (product.pricebuy * product.discount / 100)).toFixed(2)
                            : product.pricebuy.toFixed(2)}
                    </p>
                </div>
            </div>

            {/* Actions: Wishlist and Add to Cart */}
            <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-200">
                <button
                className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition duration-200"
                onClick={(e) => e.stopPropagation}>
                    <FaHeart className="text-xl" />
                    <span className="text-sm">Wishlist</span>
                </button>
                <button
                className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition duration-200"
                onClick={(e) => e.stopPropagation}>
                    <FaShoppingCart className="text-xl" />
                    <span className="text-sm">Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default SaleCard;
