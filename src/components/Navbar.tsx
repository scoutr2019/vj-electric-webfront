
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Over ons', href: '#about' },
    { name: 'Diensten', href: '#services' },
    { name: 'Realisaties', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/c2c65240-e4bf-47ba-b22f-f1cefcf7f6e2.png" 
                alt="VJ Electric Logo" 
                className="h-12 md:h-16"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-vj-red font-medium transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-vj-red focus:outline-none"
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
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-vj-red hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
