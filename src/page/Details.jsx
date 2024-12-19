import React from "react";
import ProductDetail from "../components/products/ProductDetail";
import ProductReview from "../components/products/ProductReview";
import Related from "../components/products/Related";

const Details = () => {
    const sampleProduct = {
        id: 1,
        name: "Stylish Jacket",
        price: 79.99,
        description: "High-quality jacket perfect for all seasons.",
        images: [
            require('../assets/image/P3.jpg'),
            require('../assets/image/PP1.jpg'),
            require('../assets/image/PP2.jpg'),
            require('../assets/image/PP3.jpg')

        ],
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-10">
            <ProductDetail product={sampleProduct} />
            <Related productId={sampleProduct.id} />
            <ProductReview productId={sampleProduct.id} />
        </div>
    );
};

export default Details;
