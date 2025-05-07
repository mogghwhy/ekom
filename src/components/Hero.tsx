import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center relative"
      style={{
        backgroundImage: 'url("/images/modular-house-blueprint-concept.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            EKO-MĀJAS<br />
            <span className="text-[#ecf87f]">{t('hero.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#81b622] text-white text-lg font-medium rounded-md hover:bg-[#59981a] transition-colors inline-block text-center"
            >
              {t('hero.cta')}
            </a>
            <a 
              href="#ekomini" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-medium rounded-md hover:bg-white hover:text-[#3d550c] transition-colors inline-block text-center"
            >
              {t('nav.ekomini')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;