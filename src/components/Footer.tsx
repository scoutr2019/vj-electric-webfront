
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/88d2ce8f-12f1-43f8-8d47-d3722bb805ff.png" 
                alt="VJ Electric Logo" 
                className="h-12"
              />
            </div>
            <p className="text-gray-300 mb-2">Expert in elektriciteitswerken en zonnepanelen</p>
            <div id="contact" className="mt-4">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 mr-3 text-vj-red" />
                <p className="text-gray-300">Kapellestraat 32, 8978 Watou (Poperinge)</p>
              </div>
              <div className="flex items-center mb-3">
                <Mail className="h-5 w-5 mr-3 text-vj-red" />
                <a href="mailto:info@vj-electric.be" className="text-gray-300 hover:text-white transition">
                  info@vj-electric.be
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-vj-red" />
                <a href="tel:+32471990952" className="text-gray-300 hover:text-white transition">
                  +32 471 99 09 52
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition">Over ons</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-white transition">Diensten</a>
              </li>
              <li>
                <a href="/#why-choose-us" className="text-gray-300 hover:text-white transition">Waarom ons kiezen</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              VJ Electric – Joran Vandeputte | BTW BE0123.456.789
            </p>
            <p className="text-gray-400 text-sm">
              © 2025. Design & Development by ThuisIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
