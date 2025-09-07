
import React, { useState } from 'react';
import '../../../index.css';
import logo from '../../../assets/Blog/zoro.png';

const Header = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-16 bg-gray-50 shadow-md flex items-center justify-between px-4 sm:px-8 lg:px-12 relative z-10">
            <img className="h-8 w-auto" src={logo} alt="Company Logo" />

           
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">Home</a>
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">Services</a>
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">About</a>
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">Projects</a>
                <a href="#" className="text-orange-500 text-base font-normal font-['Segoe_UI']">Blog</a>
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">Careers & Certs</a>
                <a href="#" className="text-gray-700 text-base font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors">Contact</a>
            </nav>

      
            <button className="md:hidden p-2 text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
            
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>

      
            <div className={`
                md:hidden
                absolute top-16 left-0 w-full bg-gray-50 shadow-lg
                flex flex-col items-center py-4 space-y-4
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
            `}>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>Home</a>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>Services</a>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>About</a>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>Projects</a>
                <a href="#" className="block text-orange-500 text-lg font-normal font-['Segoe_UI']" onClick={toggleMenu}>Blog</a>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>Careers & Certs</a>
                <a href="#" className="block text-gray-700 text-lg font-normal font-['Segoe_UI'] hover:text-orange-500 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
        </div>
    );
}

export default Header;