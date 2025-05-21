
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Over VJ Electric</h2>
          <div className="w-16 h-1 bg-vj-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            VJ Electric is een gespecialiseerd elektriciteitsbedrijf gevestigd in Watou (Poperinge), geleid door Joran Vandeputte.
            Met jarenlange ervaring bieden wij hoogwaardige elektrische installaties en diensten aan voor zowel particuliere als zakelijke klanten.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Wij staan voor kwaliteit, betrouwbaarheid en klanttevredenheid in alles wat we doen. Van kleine herstellingen tot complete elektrische installaties en de plaatsing van zonnepanelen - bij VJ Electric bent u verzekerd van een professionele aanpak en uitstekende service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
