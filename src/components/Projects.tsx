
import React from 'react';

const Projects = () => {
  // Placeholder project data - in a real implementation, this would be replaced with actual project images
  const projects = [
    {
      id: 1,
      title: 'Zonnepanelen installatie',
      category: 'Residentieel',
      description: 'Installatie van 24 zonnepanelen voor een woning in Poperinge.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Elektrische renovatie',
      category: 'Commercieel',
      description: 'Volledige renovatie van de elektrische installatie voor een kantoorpand.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Laadpaal installatie',
      category: 'Residentieel',
      description: 'Installatie van EV-laadpaal voor een particuliere klant in Watou.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Onze realisaties</h2>
          <div className="w-16 h-1 bg-vj-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek enkele van onze recente projecten. Als professioneel elektriciteitsbedrijf werken we aan diverse projecten voor zowel particuliere als zakelijke klanten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="text-sm font-medium text-vj-red mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
