import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill out the fields!');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Invalid email!');
            return;
        }
        toast.success('Login success!');
        navigate('/')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg")' }}>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>

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

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-white">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <a href="#st" className="text-white">Forget Password</a>
                    </div>

                    <button type="submit" className="w-full py-2 bg-white text-purple-700 font-bold rounded-full">Login</button>

                    <p className="text-center text-white mt-4">
                        You have no account? <Link to="/register" className="font-bold">Register</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
