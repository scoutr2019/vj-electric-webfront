
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Contacteer <span className="text-vj-red">Ons</span>
            </h1>
            <div className="w-16 h-1 bg-vj-red mx-auto mt-4"></div>
          </div>
        </div>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <div className="w-full">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contactgegevens</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Adres</h3>
                        <p className="text-gray-600 mt-1">Kapellestraat 32<br />8978 Watou (Poperinge)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <a href="mailto:info@vj-electric.be" className="text-gray-600 hover:text-vj-red transition mt-1 block">
                          info@vj-electric.be
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Telefoon</h3>
                        <a href="tel:+32471990952" className="text-gray-600 hover:text-vj-red transition mt-1 block">
                          +32 471 99 09 52
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Button className="flex items-center gap-2" onClick={() => window.open('tel:+32471990952')}>
                      <Phone className="h-5 w-5" /> Bel Ons
                    </Button>
                    <Button className="flex items-center gap-2" onClick={() => window.open('mailto:info@vj-electric.be')}>
                      <Mail className="h-5 w-5" /> Email Ons
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section - Updated with correct address coordinates */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 p-4 rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.950686859554!2d2.7150567760811883!3d50.73166277417167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf328632023a3%3A0xdf5e275b29e21066!2sKapellestraat%2032%2C%208978%20Watou!5e0!3m2!1sen!2sbe!4v1715866846515!5m2!1sen!2sbe" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Google Maps Location VJ Electric"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
