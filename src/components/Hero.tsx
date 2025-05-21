
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 md:py-28">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c2c65240-e4bf-47ba-b22f-f1cefcf7f6e2.png')] bg-no-repeat bg-center opacity-5"></div>
      
      {/* Red accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-vj-red"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-vj-red"></div>
      <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-32 bg-vj-red/80 rounded-r-full blur-sm"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content - Mobile: Order 2, Desktop: Order 1 */}
          <div className="w-full md:w-1/2 order-2 md:order-1 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center md:text-left">
              VJ <span className="text-vj-red">Electric</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 font-light leading-relaxed text-center md:text-left">
              Expert in elektriciteitswerken en zonnepanelen.
              <br />
              <span className="font-medium">Betrouwbaar en efficiënt.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-vj-red hover:bg-red-700 text-white font-medium py-3 px-6 sm:px-8 rounded-md transition duration-300 text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Contacteer ons</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-medium py-3 px-6 sm:px-8 rounded-md transition duration-300 text-center"
              >
                Onze diensten
              </a>
            </div>
          </div>
          
          {/* Image Content - Mobile: Order 1, Desktop: Order 2 */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center z-10 mb-6 md:mb-0">
            <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-full">
              {/* Glowing effect behind image */}
              <div className="absolute -bottom-6 -right-6 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-vj-red/30 rounded-full blur-md"></div>
              {/* Profile photo */}
              <img
                src="/lovable-uploads/fd2a8cf3-9539-48ed-93be-fdacb9e3ce8e.png"
                alt="Joran Vandeputte - VJ Electric"
                className="relative z-10 animate-fade-in w-auto h-auto max-h-[280px] sm:max-h-[320px] md:max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
