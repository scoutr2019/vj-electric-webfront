
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zonnepanelen installatie Poperinge',
      category: 'Residentieel',
      location: 'Poperinge',
      description: 'Volledige installatie van 24 zonnepanelen op een residentiële woning met een totaal vermogen van 8,4 kWp. Het project omvatte de plaatsing van de panelen, omvormer en alle benodigde bekabeling.',
      details: [
        '24 hoogwaardige zonnepanelen',
        'SolarEdge omvormer met optimizers',
        'Monitoring systeem geïnstalleerd',
        'Volledige keuring en certificatie'
      ],
      images: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1601292793517-526f48cdf3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      year: '2024'
    },
    {
      id: 2,
      title: 'Elektrische renovatie kantoorpand',
      category: 'Commercieel',
      location: 'Ieper',
      description: 'Complete renovatie van de elektrische installatie van een kantoorpand van 400m². Vernieuwing van het volledige elektriciteitsnet conform de nieuwste normen en voorschriften.',
      details: [
        'Volledige herbedrading van het pand',
        'Nieuwe hoofdverdeelkast geïnstalleerd',
        'LED-verlichting in alle ruimtes',
        'Netwerk- en telecommunicatiebekabeling'
      ],
      images: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      year: '2024'
    },
    {
      id: 3,
      title: 'EV-laadpaal installatie Watou',
      category: 'Residentieel',
      location: 'Watou',
      description: 'Installatie van een slimme EV-laadpaal voor een particuliere klant. Inclusief de benodigde versterkingen aan de elektrische installatie en smart charging mogelijkheden.',
      details: [
        '11 kW slimme laadpaal geïnstalleerd',
        'Aparte kring vanuit hoofdbord',
        'Smart charging app connectiviteit',
        'Load balancing voor optimaal gebruik'
      ],
      images: [
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 md:py-24">
          <div className="absolute top-0 left-0 w-full h-1 bg-vj-red"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-vj-red"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Onze <span className="text-vj-red">Projecten</span>
              </h1>
              <div className="w-16 h-1 bg-vj-red mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Ontdek enkele van onze recente realisaties in elektriciteitswerken en zonnepanelen
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <img 
                              src={image} 
                              alt={`${project.title} - foto ${index + 1}`} 
                              className="w-full h-64 object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-vj-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-vj-red font-medium">
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-2">Kenmerken:</h4>
                      <ul className="space-y-1">
                        {project.details.map((detail, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-vj-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Heeft u een project in gedachten?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op om de mogelijkheden voor uw elektriciteits- of zonnepaneelproject te bespreken.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-vj-red text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Contact opnemen
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
