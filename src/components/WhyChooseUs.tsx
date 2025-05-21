
import React from 'react';
import { Check, Zap, Clock, Sun } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Check className="h-8 w-8 text-vj-red" />,
      title: "Professionele Aanpak",
      description: "Met jarenlange ervaring garanderen wij kwaliteit en vakmanschap bij elke installatie."
    },
    {
      icon: <Zap className="h-8 w-8 text-vj-red" />,
      title: "Betrouwbare Service",
      description: "Wij streven naar excellentie en bieden een uitstekende service voor uw volledige gemoedsrust."
    },
    {
      icon: <Sun className="h-8 w-8 text-vj-red" />,
      title: "Duurzame Oplossingen",
      description: "Focus op energie-efficiëntie en milieuvriendelijke elektrische oplossingen voor uw woning of bedrijf."
    },
    {
      icon: <Clock className="h-8 w-8 text-vj-red" />,
      title: "Stipte Oplevering",
      description: "Wij respecteren deadlines en zorgen ervoor dat elk project op tijd wordt afgerond."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Waarom Kiezen Voor <span className="text-vj-red">Ons?</span>
          </h2>
          <div className="w-16 h-1 bg-vj-red mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Als ervaren elektricien bieden wij hoogwaardige diensten voor al uw elektrische behoeften, van kleine reparaties tot volledige installaties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-t-4 border-t-vj-red hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto mb-4 bg-gray-100 p-4 rounded-full">
                  {reason.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
