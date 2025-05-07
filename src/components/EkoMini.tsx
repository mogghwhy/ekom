import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const EkoMini = () => {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    {
      src: "/images/modular-house-concept.png",
      alt: "EKO Mini exterior view"
    },
    {
      src: "/images/modular-house-blueprint-concept.png",
      alt: "EKO Mini floor plan"
    }
  ];
  
  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };
  
  const specifications = [
    { key: 'ekomini.area', valueKey: 'ekomini.area.value' },
    { key: 'ekomini.structure', valueKey: 'ekomini.structure.value' },
    { key: 'ekomini.insulation', valueKey: 'ekomini.insulation.value' },
    { key: 'ekomini.solar', valueKey: 'ekomini.solar.value' },
    { key: 'ekomini.efficiency', valueKey: 'ekomini.efficiency.value' },
    { key: 'ekomini.installation', valueKey: 'ekomini.installation.value' },
    { key: 'ekomini.mobile', valueKey: 'ekomini.mobile.value' },
  ];
  
  const benefits = [
    'benefits.sustainable',
    'benefits.energy',
    'benefits.quick',
    'benefits.mobile',
  ];

  return (
    <section id="ekomini" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d550c] mb-4">
            {t('ekomini.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('ekomini.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative aspect-square">
            <div className="relative h-full overflow-hidden rounded-lg shadow-xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-[#3d550c]" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-[#3d550c]" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeImage ? 'bg-[#81b622]' : 'bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-[#3d550c] mb-6">
              {t('ekomini.components')}
            </h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className={index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}>
                      <td className="py-3 font-medium text-gray-700">{t(spec.key)}</td>
                      <td className="py-3 text-gray-900">{t(spec.valueKey)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <h3 className="text-2xl font-semibold text-[#3d550c] mb-4">
              {t('benefits.title')}
            </h3>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 pt-1 text-[#81b622]">
                    <Check size={20} />
                  </span>
                  <span className="text-gray-700">{t(benefit)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EkoMini;