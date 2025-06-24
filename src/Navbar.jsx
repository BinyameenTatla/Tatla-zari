import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; // ✅ Correct import

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600 tracking-widest drop-shadow-sm cursor-pointer">
          TZ
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 cursor-pointer hover:text-blue-600 hover:scale-105 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
          isOpen ? "max-h-60 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium bg-white shadow-inner">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-300 cursor-pointer hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
