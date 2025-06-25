
import React from 'react';
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
            {/* Featured Project Cards */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="/lovable-uploads/75b14702-33eb-49ee-9444-7286735131f3.png" 
                  alt="Zonnepanelen installatie" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-vj-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    Zonnepanelen
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Zonnepanelen installatie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Volledige installatie van 24 zonnepanelen op een residentiële woning met een totaal vermogen van 10 kWp.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e8cbe1f3-40f6-45db-b3e2-660d67cd6f66.png" 
                  alt="Buitenverlichting installatie" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-vj-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    Verlichting
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Buitenverlichting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Moderne wand- en tuinverlichting bij een landelijke woning met stijlvolle wandarmaturen en robuuste tuinverlichting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="/lovable-uploads/137da254-a1bf-48f8-b964-7b0c723e6997.png" 
                  alt="LED-sfeerverlichting" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-vj-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    LED Verlichting
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">LED-sfeerverlichting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  RGB LED-verlichting in moderne tuinlounge met bediening via afstandsbediening en smartphone app.
                </CardDescription>
              </CardContent>
            </Card>
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
