
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast.success('Bericht verzonden! We nemen spoedig contact met u op.');
    reset();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Contacteer <span className="text-vj-red">Ons</span>
            </h1>
            <div className="w-16 h-1 bg-vj-red mx-auto mt-4"></div>
          </div>
        </div>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contactgegevens</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Adres</h3>
                        <p className="text-gray-600 mt-1">Kapellestraat 32<br />8978 Watou (Poperinge)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <a href="mailto:info@vj-electric.be" className="text-gray-600 hover:text-vj-red transition mt-1 block">
                          info@vj-electric.be
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-vj-red/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-vj-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Telefoon</h3>
                        <a href="tel:+32471990952" className="text-gray-600 hover:text-vj-red transition mt-1 block">
                          +32 471 99 09 52
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-2">Openingsuren</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Maandag - Vrijdag: 8:00 - 18:00</p>
                      <p>Zaterdag: Op afspraak</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam <span className="text-vj-red">*</span></label>
                      <Input
                        id="name"
                        {...register('name', { required: 'Naam is verplicht' })}
                        placeholder="Uw naam"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-vj-red">*</span></label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is verplicht',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Ongeldig emailadres'
                          }
                        })}
                        placeholder="uw.email@voorbeeld.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Onderwerp</label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="Waar gaat uw vraag over?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Bericht <span className="text-vj-red">*</span></label>
                    <Textarea
                      id="message"
                      {...register('message', { required: 'Bericht is verplicht' })}
                      placeholder="Uw bericht..."
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                  </div>
                  
                  <Button type="submit" variant="default" className="w-full md:w-auto">
                    Verzenden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 p-4 rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10096.636044154134!2d2.7554499!3d50.8669779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf2bbb596cd73%3A0xfa8a2fb877b23dc5!2sWatou%2C%208978%20Poperinge!5e0!3m2!1snl!2sbe!4v1658328854301!5m2!1snl!2sbe" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Google Maps Location VJ Electric"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
