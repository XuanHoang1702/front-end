import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        contents: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.title && formData.contents) {
            toast.success('Message sent successfully!');
            setFormData({ email: '', title: '', contents: '' });
        } else {
            toast.error('Please fill out all fields.');
        }
    };

    return (
        <div className="container p-8 w-[1400px]">
            <ToastContainer />
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">CONTACT US</h1>
                <p className="text-gray-600 mt-4">
                    We're here to help and answer any question you might have.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter the subject"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="contents" className="block text-sm font-semibold text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="contents"
                                placeholder="Write your message"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={formData.contents}
                                onChange={(e) => setFormData({ ...formData, contents: e.target.value })}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-purple-500 text-white font-bold rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
                            >
                                <FaPaperPlane className="mr-2" />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col justify-center bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                    <p className="text-gray-700 mb-6">
                        Feel free to contact us via email or phone. We're always happy to help!
                    </p>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-purple-500 font-semibold">📧 Email:</span>
                            <span>support@example.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-purple-500 font-semibold">📞 Phone:</span>
                            <span>+1 (123) 456-7890</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-purple-500 font-semibold">📍 Address:</span>
                            <span>123 Main Street, City, Country</span>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0401670913264!2d106.62965731465974!3d10.823098992263424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2a5f0a33ab%3A0x7d5f464b64fba616!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1633023149997!5m2!1sen!2s"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Google Map"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
