
import React from 'react';
import { Zap, Sun, Wrench } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => {
  return (
    <div className="service-card bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
        <Icon className="h-8 w-8 text-vj-red" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Algemene elektriciteitswerken",
      description: "Volledige elektrische installaties voor nieuwbouw en renovatie, conform alle veiligheidsnormen en regelgeving.",
      icon: Zap
    },
    {
      title: "Zonnepanelen",
      description: "Professionele installatie van zonnepanelen, van advies en ontwerp tot montage en aansluiting op het net.",
      icon: Sun
    },
    {
      title: "Herstellingen & onderhoud",
      description: "Snelle en betrouwbare herstellingen van elektrische installaties, vervangen van defecte componenten en regulier onderhoud.",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Onze diensten</h2>
          <div className="w-16 h-1 bg-vj-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bij VJ Electric bieden we een breed scala aan elektrische diensten aan, steeds op maat van uw behoeften en met oog voor kwaliteit en duurzaamheid.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
