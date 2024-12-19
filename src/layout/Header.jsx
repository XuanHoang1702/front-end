import React, { useState } from 'react';
import { FaShoppingBag, FaUser } from 'react-icons/fa';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fakeMenus = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'About', link: '/about' },
        { id: 4, name: 'Contact', link: '/contact' },
    ];

    const fakeSearchResults = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ];

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.trim()) {
            setSearchResults(fakeSearchResults);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <nav className="bg-[#8A2BE2] p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-3xl font-bold text-white">GiftShop</a>
                </div>

                <div className="hidden md:flex space-x-6">
                    {fakeMenus.map((menu) => (
                        <a 
                            key={menu.id} 
                            href={menu.link} 
                            className="text-white hover:text-black"
                        >
                            {menu.name}
                        </a>
                    ))}
                </div>

                <div className="relative w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="px-4 py-2 border border-purple-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    {searchResults.length > 0 && (
                        <div className="absolute top-full mt-2 w-full bg-white border border-purple-300 shadow-lg z-20">
                            {searchResults.map((product) => (
                                <a 
                                    key={product.id} 
                                    href={`/product/${product.id}`} 
                                    className="block p-2 text-gray-800 hover:bg-purple-100"
                                >
                                    {product.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex space-x-6 items-center">
                    <a href="/login" className="text-white hover:text-black flex items-center">
                        <FaUser className="mr-2" /> Login
                    </a>
                    <a href="/cart" className="text-white hover:text-black flex items-center relative">
                        <FaShoppingBag className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
