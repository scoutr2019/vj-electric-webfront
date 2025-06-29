import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zonnepanelen installatie',
      category: 'Residentieel',
      description: 'Volledige installatie van 24 zonnepanelen op een residentiële woning met een totaal vermogen van 10 kWp. Het project omvatte de plaatsing van de panelen, omvormer en alle benodigde bekabeling.',
      details: [
        '24 hoogwaardige zonnepanelen',
        'Fronius omvormer met optimizers',
        'Monitoring systeem geïnstalleerd',
        'Volledige keuring en certificatie'
      ],
      images: [
        '/lovable-uploads/75b14702-33eb-49ee-9444-7286735131f3.png',
        '/lovable-uploads/a138ac42-3ee6-4729-b6d7-07b663c10734.png'
      ]
    },
    {
      id: 2,
      title: 'Buitenverlichting installatie',
      category: 'Residentieel',
      description: 'Volledige installatie van moderne wand- en tuinverlichting bij een landelijke woning. Het project omvatte het voorzien van stijlvolle wandarmaturen onder de overkapping en robuuste tuinverlichting op houten palen langs het gazon.',
      details: [
        'Design wandlampen met E27 filamentlampen en glazen behuizing',
        'Robuuste tuinverlichting op hardhouten palen met dubbele lampbehuizing',
        'Geïntegreerde bekabeling volledig weggewerkt',
        'Aansluiting en configuratie via tijdsschakelaar en schemerschakelaar',
        'Installatie klaar voor gebruik, inclusief controle en nazicht'
      ],
      images: [
        '/lovable-uploads/e8cbe1f3-40f6-45db-b3e2-660d67cd6f66.png',
        '/lovable-uploads/a21a67b0-136e-456b-8ed4-d7974403945b.png',
        '/lovable-uploads/c4de389e-460a-44fd-a612-3f3cae9be17c.png'
      ]
    },
    {
      id: 3,
      title: 'LED-sfeerverlichting installatie',
      category: 'Residentieel',
      description: 'Installatie van hoogwaardige RGB LED-verlichting in een moderne tuinlounge. Het project werd volledig geïntegreerd in de constructie, met bediening via afstandsbediening of smartphone, voor een sfeervolle beleving bij dag en nacht.',
      details: [
        'RGB LED-profielen ingewerkt in plafond en zijwanden',
        'Bediening via draadloze controller én mobiele app',
        'Meerdere kleurmodi en dimbare instellingen',
        'Energiezuinige en duurzame installatie',
        'Extra tuinspots voor accentverlichting in het groen'
      ],
      images: [
        '/lovable-uploads/137da254-a1bf-48f8-b964-7b0c723e6997.png',
        '/lovable-uploads/dab89103-60ed-4787-96e0-118dbf449ff1.png',
        '/lovable-uploads/650c7096-5ba3-4351-99b3-dc412ae923c7.png'
      ]
    },
    {
      id: 4,
      title: 'Binnenverlichting installatie',
      category: 'Residentieel',
      description: 'Installatie van stijlvolle binnenverlichting in een landelijke woning, met aandacht voor sfeer, functionaliteit en design. De verlichting werd zorgvuldig gekozen en geplaatst in de slaapkamers, traphal en nachthal voor een warme, uitnodigende uitstraling.',
      details: [
        'Wandlampen met indirect licht naast het bed',
        'Hanglampen met moderne afwerking in de nachthal',
        'Up & down wandarmaturen aan de trap voor sfeervolle accenten',
        'Alle armaturen voorzien van energiezuinige LED-verlichting',
        'Strakke afwerking en discrete inbouw van elektrische aansluitingen'
      ],
      images: [
        '/lovable-uploads/07b7a4f6-ca26-4ef2-be91-6a9d3b76639a.png',
        '/lovable-uploads/6e536e5d-6ee7-493f-9de4-01735d65e545.png',
        '/lovable-uploads/f2314332-6eab-48c1-98b0-adfd288110aa.png'
      ]
    },
    {
      id: 5,
      title: 'Thuisbatterij installatie',
      category: 'Residentieel',
      description: 'Installatie van een krachtig batterijopslagsysteem op basis van BYD-modules, met een totale capaciteit van 33 kWh. Deze oplossing laat toe om zonne-energie maximaal op te slaan en zelfverbruik sterk te verhogen, met volledige integratie in het bestaande energiesysteem.',
      details: [
        '12 BYD high-voltage batterijen van 2,76 kWh per stuk',
        'Totale opslagcapaciteit van ±33 kWh',
        'Uitbreidbaar en compatibel met diverse omvormers (o.a. Fronius/SMA)',
        'Modulair en onderhoudsvriendelijk systeem',
        'Slim energiebeheer via monitoring en sturing'
      ],
      images: [
        '/lovable-uploads/0736e609-87c4-4b2e-be29-660a2854c31c.png'
      ]
    },
    {
      id: 6,
      title: 'Zonnepanelen installatie op loods',
      category: 'Commercieel',
      description: 'Plaatsing van 40 zonnepanelen van elk 410 Wp op het dak van een landbouwloods. Deze installatie zorgt voor een hoog rendement en maakt optimaal gebruik van het grote dakoppervlak, perfect voor eigen verbruik en energiebesparing op het bedrijf.',
      details: [
        '40 zonnepanelen van 410 Wp – totaalvermogen van 16,4 kWp',
        'Stevige montage op golfplaten dak',
        'Omvormer(s) afgestemd op piekbelasting',
        'Volledige bekabeling, aarding en beveiliging voorzien',
        'Klaar voor keuring en koppeling met monitoringsysteem'
      ],
      images: [
        '/lovable-uploads/4a55d0dd-5ca7-4a8a-b91c-b89ad922e1a8.png'
      ]
    },
    {
      id: 7,
      title: 'Industriële zonnepanelen installatie',
      category: 'Commercieel',
      description: 'Installatie van een krachtig zonnestroomsysteem op een bedrijfspand, met een totaalvermogen van 17 kWp verdeeld over drie omvormers. De panelen werden zorgvuldig geplaatst op een metalen dak met optimale oriëntatie voor maximale opbrengst.',
      details: [
        '17 kWp aan zonnepanelen op metalen dak',
        '3 afzonderlijke omvormers: 3 kW + 3 kW + 4 kW',
        'Efficiënte spreiding van belasting en opbrengst',
        'Volledig uitgeruste installatie met aarding en overspanningsbeveiliging',
        'Klaar voor monitoring, keuring en netkoppeling'
      ],
      images: [
        '/lovable-uploads/c3d43939-4045-4832-9ecf-fd0fdbeb9649.png'
      ]
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
                            <Dialog>
                              <DialogTrigger asChild>
                                <img 
                                  src={image} 
                                  alt={`${project.title} - foto ${index + 1}`} 
                                  className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                                <img 
                                  src={image} 
                                  alt={`${project.title} - foto ${index + 1}`} 
                                  className="w-full h-auto object-contain"
                                />
                              </DialogContent>
                            </Dialog>
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
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">
                      {project.title}
                    </CardTitle>
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
            <Link 
              to="/contact" 
              className="inline-block bg-vj-red text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Contact opnemen
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
