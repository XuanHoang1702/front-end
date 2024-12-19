import React from 'react';
import Category from '../components/category/Category';
import CommentList from '../components/comment/CommentList';
import BestSaller from '../components/products/best_seller/BestSeller';
import ProductList from '../components/products/new/ProductList';
import Sale from '../components/products/sale/Sale';
import Ads from '../layout/Ads';
import Banner from '../layout/Banner';
import ContactUs from '../layout/Contact';
import WhyUs from '../layout/WhyUs';

const Home = () => {
    return (
        <div className="justify-center items-center mt-20">
            <div className="flex w-full justify-center items-center">
                <div className="w-1/4 bg-white">
                    <Category />
                </div>
                <div className="w-2/4 bg-white">
                    <Banner />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Ads/>
            </div>
            <div className="flex justify-center items-center">
                <ProductList/>
            </div>
            <img className='w-[1405px] h-[500px] ml-[270px] my-10' src={require('../assets/image/download.jpg')} alt='#'/>
            <div className="flex justify-center items-center">
                <BestSaller/>
            </div>
            <div className="flex justify-center items-center">
                <Sale/>
            </div>
            <div className="flex justify-center items-center">
                <WhyUs/>
            </div>
            <div className="flex justify-center items-center">
                <CommentList/>
            </div>
            <div className="flex justify-center items-center">
                <ContactUs/>
            </div>
        </div>
    );
}

export default Home;
