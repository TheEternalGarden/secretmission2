'use client';

import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </div>
  );
} 