
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              VJ <span className="text-vj-red">Electric</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light leading-relaxed">
              Expert in elektriciteitswerken en zonnepanelen.
              <br />
              <span className="font-medium">Betrouwbaar en efficiënt.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-vj-red hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center"
              >
                Contacteer ons
              </a>
              <a
                href="#services"
                className="bg-white border-2 border-vj-red text-vj-red hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300 text-center"
              >
                Onze diensten
              </a>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-vj-red/10 rounded-full -z-10"></div>
              <img
                src="/lovable-uploads/fd2a8cf3-9539-48ed-93be-fdacb9e3ce8e.png"
                alt="Joran Vandeputte - VJ Electric"
                className="max-h-[450px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
