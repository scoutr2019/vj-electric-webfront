
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Info, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c2c65240-e4bf-47ba-b22f-f1cefcf7f6e2.png')] bg-no-repeat bg-center opacity-5"></div>
          
          <div className="absolute top-0 left-0 w-full h-1 bg-vj-red"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-vj-red"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contacteer <span className="text-vj-red">VJ Electric</span>
              </h1>
              <div className="w-16 h-1 bg-vj-red mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Heeft u vragen over elektriciteitswerken of zonnepanelen? 
                <br className="hidden md:block" />
                Wij staan klaar om u te helpen!
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Text */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Klaar om uw elektriciteitsproblemen op te lossen?</h2>
              <p className="text-gray-600 mb-6">
                Bij VJ Electric staan we klaar om u te helpen met al uw elektrische behoeften. Of het nu gaat om een kleine reparatie, 
                een volledige installatie of advies over zonnepanelen - ons team van ervaren elektriciens staat voor u klaar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-vj-red mr-2" />
                  <span className="text-gray-700">Snelle responstijd</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-vj-red mr-2" />
                  <span className="text-gray-700">Kwaliteitsgarantie</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-vj-red mr-2" />
                  <span className="text-gray-700">Eerlijke prijzen</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <div className="w-full">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contactgegevens</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vj-red/10 p-3 rounded-full mb-4">
                        <MapPin className="h-6 w-6 text-vj-red" />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">Adres</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Kapellestraat+32%2C+8978+Watou+%28Poperinge%29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-vj-red transition cursor-pointer"
                      >
                        Kapellestraat 32<br />8978 Watou (Poperinge)
                      </a>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vj-red/10 p-3 rounded-full mb-4">
                        <Mail className="h-6 w-6 text-vj-red" />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                      <a href="mailto:info@vj-electric.be" className="text-gray-600 hover:text-vj-red transition">
                        info@vj-electric.be
                      </a>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vj-red/10 p-3 rounded-full mb-4">
                        <Phone className="h-6 w-6 text-vj-red" />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">Telefoon</h3>
                      <a href="tel:+32471990952" className="text-gray-600 hover:text-vj-red transition">
                        +32 471 99 09 52
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-6">
                    <Info className="h-6 w-6 text-vj-red mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Veelgestelde vragen</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-medium text-gray-900 mb-2">Biedt u nooddiensten aan?</h3>
                      <p className="text-gray-600">Ja, voor elektrische noodgevallen kunt u ons 24/7 bereiken op ons telefoonnummer.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-medium text-gray-900 mb-2">Geeft u offertes voor projecten?</h3>
                      <p className="text-gray-600">Neem contact met ons op om de mogelijkheden voor uw project te bespreken.</p>
                    </div>
                    
                    <div className="pb-4">
                      <h3 className="font-medium text-gray-900 mb-2">Welke regio's bedient u?</h3>
                      <p className="text-gray-600">Wij zijn actief in heel West-Vlaanderen, met focus op de regio rond Poperinge, Ieper en Veurne. Ook voor projecten buiten deze regio's nemen we graag contact op om de mogelijkheden te bespreken.</p>
                    </div>
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
