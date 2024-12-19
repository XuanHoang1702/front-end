import React, { useState } from 'react';
import { FaAddressCard, FaPhoneAlt, FaTransgenderAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordconfirmation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const handleGoback = (e) =>{
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg")' }}>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <MdOutlineDriveFileRenameOutline className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Phone</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <FaPhoneAlt className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Address</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <FaAddressCard className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Gender</label>
                        <div className="relative">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none appearance-none"
                            >
                                <option value="" disabled>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <FaTransgenderAlt className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Username</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <IoIosInformationCircle className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <MdEmail className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <RiLockPasswordFill className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Password Confirmation</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password_confirmation}
                                onChange={(e) => setPasswordconfirmation(e.target.value)}
                                className="w-full p-2 pl-10 bg-transparent border-b border-white text-white focus:outline-none"
                            />
                            <PiPasswordFill className="absolute left-2 top-3 text-white" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-white">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <a href="#st" className="text-white">Forget Password</a>
                    </div>
                    <button type="submit" className="w-full py-2 bg-white text-purple-700 font-bold rounded-full">Register</button>
                    <p className="text-center text-white mt-4">
                        You have an account? 
                        <a href="#st" onClick={handleGoback} className="text-white font-bold">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
