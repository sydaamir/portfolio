'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-teal-600 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
                <i className="fa fa-home"></i>
        </Link>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-teal-700" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="block py-2 px-4 text-sm hover:bg-teal-700" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" className="block py-2 px-4 text-sm hover:bg-teal-700" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-teal-700" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;