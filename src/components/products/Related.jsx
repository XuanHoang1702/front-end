import React from "react";
import ProductCard from "./new/ProductCard";

const Related = ({ productId }) => {
    const relatedProducts = [
        { id: 2, name: "Cool T-Shirt", price: 29.99, src: require('../../assets/image/P4.jpg') },
        { id: 3, name: "Comfy Jeans", price: 49.99, src: require('../../assets/image/P2.jpg') },
        { id: 4, name: "Cool T-Shirt", price: 29.99, src: require('../../assets/image/P4.jpg') },
        { id: 5, name: "Comfy Jeans", price: 49.99, src: require('../../assets/image/P2.jpg') },
        { id: 2, name: "Cool T-Shirt", price: 29.99, src: require('../../assets/image/P4.jpg') },
        { id: 3, name: "Comfy Jeans", price: 49.99, src: require('../../assets/image/P2.jpg') },
        { id: 2, name: "Cool T-Shirt", price: 29.99, src: require('../../assets/image/P4.jpg') },
        { id: 3, name: "Comfy Jeans", price: 49.99, src: require('../../assets/image/P2.jpg') },

    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Related;
