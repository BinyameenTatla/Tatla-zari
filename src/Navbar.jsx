import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600 tracking-widest drop-shadow-sm">
          TZ
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {['Home', 'Products', 'Services', 'About'].map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium bg-white shadow-inner">
          {['Home', 'Products', 'Services', 'About'].map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
