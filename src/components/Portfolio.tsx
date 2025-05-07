import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      titleKey: 'portfolio.coastal.title',
      locationKey: 'portfolio.coastal.location',
      image: '/images/coastal-retreat.png'
    },
    {
      titleKey: 'portfolio.forest.title',
      locationKey: 'portfolio.forest.location',
      image: '/images/forest-hideaway.png'
    },
    {
      titleKey: 'portfolio.lake.title',
      locationKey: 'portfolio.lake.location',
      image: '/images/lakeside-cabin.png'
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d550c] mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3d550c] mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-600">{t(project.locationKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;