import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/logo.png" alt="Renovate Design Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm relative">
            <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</Link>

                {/* Services Dropdown */}
                <div className="relative group">
                <button
                    className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
                >
                    Services ▾
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-200 z-50">
                    <Link to="/kitchens" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Kitchens
                    </Link>
                    <Link to="/bathrooms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Bathrooms
                    </Link>
                    <Link to="/joinery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Joinery
                    </Link>
                    <Link to="/interiors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Interiors
                    </Link>
                </div>
                </div>

            <a href="/#about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a>
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center space-x-2 text-blue-500 text-sm">
            <Phone className="w-4 h-4" />
            <span className="font-medium">07505 541466</span>
          </div>

          {/* Mobile Nav button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 p-2">
            <X className="w-6 h-6" />
          </button>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/kitchens" onClick={() => setIsMenuOpen(false)}>Kitchens</Link>
          <Link to="/bathrooms" onClick={() => setIsMenuOpen(false)}>Bathrooms</Link>
          <Link to="/joinery" onClick={() => setIsMenuOpen(false)}>Joinery</Link>
          <Link to="/interiors" onClick={() => setIsMenuOpen(false)}>Interiors</Link>
          <a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
