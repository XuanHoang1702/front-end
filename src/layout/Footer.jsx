import React from 'react';
import { FaEnvelope, FaFacebookF, FaHeadset, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    // Dữ liệu giả lập cho thông tin liên hệ
    const contactInfo = {
        address: '123 Main Street, City, Country',
        phone: '+123 456 7890',
        email: 'info@example.com',
        hotline: '+098 765 4321',
    };

    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Phần các biểu tượng mạng xã hội */}
                <div className="flex justify-center mb-6">
                    <a href="#" className="mx-2 text-white hover:text-purple-700"><FaFacebookF /></a>
                    <a href="#" className="mx-2 text-white hover:text-purple-700"><FaTwitter /></a>
                    <a href="#" className="mx-2 text-white hover:text-purple-700"><FaInstagram /></a>
                    <a href="#" className="mx-2 text-white hover:text-purple-700"><FaYoutube /></a>
                </div>

                {/* Phần nội dung chính của footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Giới thiệu về chúng tôi */}
                    <div>
                        <h3 className="font-bold mb-4">ABOUT US</h3>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Đăng ký nhận tin */}
                    <div>
                        <h3 className="font-bold mb-4">NEWSLETTER</h3>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full p-2 mb-4 text-gray-900 rounded" 
                        />
                        <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">SUBSCRIBE</button>
                    </div>

                    {/* Hỗ trợ khách hàng */}
                    <div>
                        <h3 className="font-bold mb-4">NEED HELP</h3>
                        <p className="text-gray-400">
                            For assistance, please contact our support team. We are here to help you with any inquiries or issues you may have.
                        </p>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div>
                        <h3 className="font-bold mb-4">CONTACT US</h3>
                        <div className="text-gray-400">
                            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> ADDRESS: {contactInfo.address}</p>
                            <p className="flex items-center"><FaPhone className="mr-2" /> PHONE: {contactInfo.phone}</p>
                            <p className="flex items-center"><FaEnvelope className="mr-2" /> EMAIL: {contactInfo.email}</p>
                            <p className="flex items-center"><FaHeadset className="mr-2" /> HOTLINE: {contactInfo.hotline}</p>
                        </div>
                    </div>
                </div>

                {/* Phần bản quyền */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-400">© 2024 All Rights Reserved By Free Html Templates</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
