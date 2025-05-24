
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/c2c65240-e4bf-47ba-b22f-f1cefcf7f6e2.png" 
                alt="VJ Electric Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4">Expert in elektriciteitswerken en zonnepanelen</p>
            <div id="contact" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-vj-red" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kapellestraat+32%2C+8978+Watou+%28Poperinge%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    Kapellestraat 32, 8978 Watou (Poperinge)
                  </a>
                </div>
                <div className="flex items-center">
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
              VJ Electric – Joran Vandeputte | BTW BE0847.658.947
            </p>
            <p className="text-gray-400 text-sm">
              © 2025. Design & Development by{' '}
              <a 
                href="https://thuisit.be/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                ThuisIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
