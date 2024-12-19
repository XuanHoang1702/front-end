import React from 'react';

const Ads = () => {
    const adsImages = [
        { src: require("../assets/image/ads01.jpg"), title: "Advertisement 1" },
        { src: require("../assets/image/ads02.jpg"), title: "Advertisement 2" },
        { src: require("../assets/image/ads03.jpg"), title: "Advertisement 3" },
        { src: require("../assets/image/ads04.jpg"), title: "Advertisement 4" },
    ];

    return (
        <div className="flex justify-center items-center my-10">
            {adsImages.map((ad, index) => (
                <div key={index} className="relative w-1/4 group ml-10">
                    {/* Image */}
                    <img
                        src={ad.src}
                        alt={ad.title}
                        className="w-[325px] h-[325px] object-cover rounded-lg shadow-md"
                    />
                    {/* Title Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-lg">{ad.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ads;
