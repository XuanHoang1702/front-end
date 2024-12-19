import React from 'react';

const CommentCard = ({ data }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg bg-white w-60 flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">
                    {data.name[0]}
                </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
            <p className="text-gray-600 text-sm text-center">{data.comment}</p>
            <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-yellow-400 ${
                            i < Math.round(data.rating) ? '' : 'opacity-50'
                        }`}
                    >
                        ⭐
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CommentCard;
