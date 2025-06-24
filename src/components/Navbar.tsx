
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Over ons', href: '/#about' },
    { name: 'Diensten', href: '/#services' },
    { name: 'Projecten', href: '/projecten' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handles both internal links with hash and regular navigation
  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle hash navigation on same page
    if (href.includes('#') && location.pathname === '/') {
      const element = document.getElementById(href.split('#')[1]);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/88d2ce8f-12f1-43f8-8d47-d3722bb805ff.png" 
                alt="VJ Electric Logo" 
                className="h-12 md:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-vj-red font-medium transition duration-200"
                onClick={() => handleLinkClick(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-vj-red focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden',
          isMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-vj-red hover:bg-gray-50 rounded-md font-medium"
              onClick={() => handleLinkClick(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
