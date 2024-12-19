import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductDetail = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]); // Ảnh hiển thị chính

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Phần ảnh sản phẩm */}
            <div className="space-y-4">
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-[450px] object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Phần thông tin sản phẩm */}
            <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-red-500 text-3xl font-bold">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>

                {/* Nút hành động */}
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                        <FaShoppingCart className="text-lg" />
                        Add to Cart
                    </button>
                    <button className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
                        <FaHeart className="text-lg" />
                    </button>
                </div>

                {/* Phần ảnh thu nhỏ của sản phẩm */}
                <div className="flex gap-2 mt-4">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform ${
                                selectedImage === image
                                    ? "ring-2 ring-purple-600 scale-105"
                                    : "opacity-80"
                            }`}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
