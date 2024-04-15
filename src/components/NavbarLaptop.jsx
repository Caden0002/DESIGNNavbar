import React from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contact' }
];

const iconList = [
    { icon: <FaUser /> },
    { icon: <FaHeart /> },
    { icon: <FaShoppingCart /> }
];

function NavbarLaptop(props) {
    return (
        <div className="h-screen bg-gray-800">
            <div className="flex justify-between mx-auto items-center py-4 px-24">
                <div className="text-white font-bold text-xl">Logo</div>
                <ul className="flex gap-16 items-center justify-center text-center cursor-pointer">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-white text-sm ">{link.title}</li>
                    ))}
                </ul>
                <ul className="flex text-white gap-6 items-center cursor-pointer">
                    {iconList.map((item, index) => (
                        <div key={index}>{item.icon}</div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavbarLaptop;
