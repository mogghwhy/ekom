import { useLanguage } from '../contexts/LanguageContext';
import { Leaf, Clock, Recycle, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: <Leaf size={36} className="text-[#81b622]" />,
      title: 'Sustainability',
      description: 'We use eco-friendly materials and technologies to minimize our environmental impact.'
    },
    {
      icon: <Clock size={36} className="text-[#81b622]" />,
      title: 'Efficiency',
      description: 'Our modular solutions are designed for quick installation and optimal energy use.'
    },
    {
      icon: <Recycle size={36} className="text-[#81b622]" />,
      title: 'Innovation',
      description: 'We constantly research and implement new, sustainable building methods.'
    },
    {
      icon: <Award size={36} className="text-[#81b622]" />,
      title: 'Quality',
      description: 'Every EKO-MĀJAS house is built to the highest standards of craftsmanship.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d550c] mb-6">
              {t('about.title')}
            </h2>
            
            <div className="text-gray-700 space-y-4">
              {t('about.text').split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-[#ecf87f] rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mb-3">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-[#3d550c] mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;