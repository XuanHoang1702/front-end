import React from "react";

const ProductReview = ({ productId }) => {
    const comments = [
        { id: 1, name: "John Doe", comment: "Great product!", rating: 5 },
        { id: 2, name: "Jane Smith", comment: "Loved the quality!", rating: 4 },
        { id: 3, name: "Alice Johnson", comment: "Good value for money.", rating: 4 },
        { id: 4, name: "Michael Lee", comment: "The product is okay, but could be improved.", rating: 3 },
        { id: 5, name: "Sarah Brown", comment: "Not as expected, quite disappointed.", rating: 2 },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl font-semibold text-gray-800">{comment.name}</h3>
                            <div className="flex text-yellow-500">
                                {[...Array(comment.rating)].map((_, index) => (
                                    <span key={index}>⭐</span>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.comment}</p>
                        <span className="text-gray-500 text-sm">Rating: {comment.rating}/5</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductReview;
