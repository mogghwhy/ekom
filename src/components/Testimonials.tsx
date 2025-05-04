import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: 'testimonial1.text',
      author: 'testimonial1.author',
      location: 'testimonial1.location',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160'
    },
    {
      id: 2,
      text: 'testimonial2.text',
      author: 'testimonial2.author',
      location: 'testimonial2.location',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160'
    },
    {
      id: 3,
      text: 'testimonial3.text',
      author: 'testimonial3.author',
      location: 'testimonial3.location',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160'
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#ecf87f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d550c] mb-4">
            {t('testimonials.title')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#3d550c] opacity-30">
            <Quote size={64} />
          </div>
          
          <div className="relative overflow-hidden min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center 
                ${index === activeIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <p className="text-xl md:text-2xl text-[#3d550c] italic mb-8 text-center px-12">
                  "{t(testimonial.text)}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#81b622]">
                    <img 
                      src={testimonial.avatar} 
                      alt={t(testimonial.author)} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-[#3d550c]">{t(testimonial.author)}</p>
                    <p className="text-sm text-[#59981a]">{t(testimonial.location)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#3d550c]' : 'bg-[#81b622]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 md:-left-12">
            <button 
              onClick={prevTestimonial}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-[#3d550c]" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 md:-right-12">
            <button 
              onClick={nextTestimonial}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-[#3d550c]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;