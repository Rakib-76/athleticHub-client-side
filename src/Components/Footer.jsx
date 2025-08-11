import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10 mt-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-blue-400 mb-2">Athletic Hub</h2>
                    <p className="text-sm text-gray-300">
                        Powering athletes and organizers with the tools to create, join, and celebrate sports events.
                    </p>
                </div>

                <div>
                    <h6 className="font-semibold text-lg mb-2">Events</h6>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Upcoming Events</a></li>
                        <li><a href="#" className="hover:text-white">My Bookings</a></li>
                        <li><a href="#" className="hover:text-white">Create Event</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-semibold text-lg mb-2">Company</h6>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-semibold text-lg mb-2">Follow Us</h6>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500">Facebook</a>
                        <a href="#" className="hover:text-sky-400">Twitter</a>
                        <a href="#" className="hover:text-pink-500">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Athletic Hub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
