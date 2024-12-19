import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fakeBanners = [
            { id: 1, image: require('../assets/image/banner01.jpg') },
            { id: 2, image: require('../assets/image/banner02.png') },
            { id: 3, image: require('../assets/image/banner03.jpg') },
            { id: 4, image: require('../assets/image/banner04.jpg') },
            { id: 5, image: require('../assets/image/banner05.jpg') },
        ];

        const fetchFakeBanners = () => {
            setTimeout(() => {
                setBanners(fakeBanners);
            }, 500);
        };

        fetchFakeBanners();
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg m-5">
            <Swiper
                effect={'fade'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
                className="w-full h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <img
                            src={banner.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"></div>
            </Swiper>
        </div>
    );
};
export default Banner;
