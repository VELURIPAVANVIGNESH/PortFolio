import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactComponent = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x: Math.min(Math.max(x, 0), 100), y: Math.min(Math.max(y, 0), 100) });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div 
            id='contact'
            ref={containerRef}
            className="min-h-screen bg-black text-white py-16 px-8 relative overflow-hidden"
            style={{
                border: '4px solid',
                borderImage: `linear-gradient(to bottom, #000000 ${100 - mousePosition.y}%, #10b981 ${100 - mousePosition.y}%, #10b981 ${mousePosition.y}%, #000000 ${mousePosition.y}%) 1`,
                borderImageSlice: 1
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-6xl font-bold leading-tight">
                                <span className="text-white">Get Ready To</span>
                                <br />
                                <span className="text-white">Create Great</span>
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <Mail className="text-green-500" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">E-mail:</p>
                                    <p className="text-white font-medium">ckuladeepreddy2006@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <MapPin className="text-green-500" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location:</p>
                                    <p className="text-white font-medium">Punganur</p>
                                    <p className="text-gray-400 text-sm">(Home)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white mb-2">GET IN TOUCH</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows={6}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                                >
                                    <span>LesssGooo</span>
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600/5 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;