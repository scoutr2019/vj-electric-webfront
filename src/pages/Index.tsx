
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // All available projects
  const allProjects = [
    {
      id: 1,
      title: 'Zonnepanelen installatie',
      category: 'Zonnepanelen',
      description: 'Volledige installatie van 24 zonnepanelen op een residentiële woning met een totaal vermogen van 10 kWp.',
      image: '/lovable-uploads/75b14702-33eb-49ee-9444-7286735131f3.png'
    },
    {
      id: 2,
      title: 'Buitenverlichting',
      category: 'Verlichting',
      description: 'Moderne wand- en tuinverlichting bij een landelijke woning met stijlvolle wandarmaturen en robuuste tuinverlichting.',
      image: '/lovable-uploads/e8cbe1f3-40f6-45db-b3e2-660d67cd6f66.png'
    },
    {
      id: 3,
      title: 'LED-sfeerverlichting',
      category: 'LED Verlichting',
      description: 'RGB LED-verlichting in moderne tuinlounge met bediening via afstandsbediening en smartphone app.',
      image: '/lovable-uploads/137da254-a1bf-48f8-b964-7b0c723e6997.png'
    },
    {
      id: 4,
      title: 'Binnenverlichting',
      category: 'Verlichting',
      description: 'Stijlvolle binnenverlichting in landelijke woning met wandlampen, hanglampen en trapverlichting.',
      image: '/lovable-uploads/07b7a4f6-ca26-4ef2-be91-6a9d3b76639a.png'
    },
    {
      id: 5,
      title: 'Thuisbatterij installatie',
      category: 'Batterij',
      description: 'Krachtig batterijopslagsysteem van 33 kWh met BYD-modules voor maximale zonne-energie opslag.',
      image: '/lovable-uploads/0736e609-87c4-4b2e-be29-660a2854c31c.png'
    },
    {
      id: 6,
      title: 'Zonnepanelen op loods',
      category: 'Zonnepanelen',
      description: 'Installatie van 40 zonnepanelen van 410 Wp op landbouwloods voor optimaal rendement.',
      image: '/lovable-uploads/4a55d0dd-5ca7-4a8a-b91c-b89ad922e1a8.png'
    },
    {
      id: 7,
      title: 'Industriële zonnepanelen',
      category: 'Zonnepanelen',
      description: 'Krachtig zonnestroomsysteem van 17 kWp op bedrijfspand met drie omvormers.',
      image: '/lovable-uploads/c3d43939-4045-4832-9ecf-fd0fdbeb9649.png'
    }
  ];

  // Randomly select 3 projects
  const featuredProjects = useMemo(() => {
    const shuffled = [...allProjects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      
      {/* Projects Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Onze <span className="text-vj-red">Realisaties</span>
            </h2>
            <div className="w-16 h-1 bg-vj-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Bekijk enkele van onze recente projecten en ontdek wat wij voor u kunnen betekenen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-vj-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link 
              to="/projecten" 
              className="inline-flex items-center gap-2 bg-vj-red text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors group"
            >
              Bekijk alle projecten
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
