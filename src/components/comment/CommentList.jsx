import React from 'react';
import CommentCard from './CommentCard';

const comments = [
    { name: 'John Doe', comment: 'Great service and friendly staff!', rating: 5 },
    { name: 'Jane Smith', comment: 'Loved the product quality!', rating: 4 },
    { name: 'Alice Johnson', comment: 'Good experience overall.', rating: 4.5 },
    { name: 'Michael Brown', comment: 'Fast delivery and excellent support!', rating: 5 },
    { name: 'Emily Davis', comment: 'Reasonable prices, will shop again!', rating: 4 },
    { name: 'John Doe', comment: 'Great service and friendly staff!', rating: 5 },
    { name: 'Jane Smith', comment: 'Loved the product quality!', rating: 4 },
    { name: 'Alice Johnson', comment: 'Good experience overall.', rating: 4.5 },
    { name: 'Michael Brown', comment: 'Fast delivery and excellent support!', rating: 5 },
    { name: 'Emily Davis', comment: 'Reasonable prices, will shop again!', rating: 4 },
];

const CommentList = () => {
    return (
        <div className="p-6 w-[1370px]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {comments.map((comment, index) => (
                    <CommentCard key={index} data={comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;
