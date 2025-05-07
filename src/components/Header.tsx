import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'lv' ? 'en' : 'lv');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#81b622] flex items-center">
              <Home className="mr-2" size={24} />
              EKO-MĀJAS
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-[#81b622] hover:text-[#ecf87f] transition-colors font-medium">{t('nav.home')}</a>
            <a href="#ekomini" className="text-[#81b622] hover:text-[#ecf87f] transition-colors font-medium">{t('nav.ekomini')}</a>
            <a href="#portfolio" className="text-[#81b622] hover:text-[#ecf87f] transition-colors font-medium">{t('nav.portfolio')}</a>
            <a href="#about" className="text-[#81b622] hover:text-[#ecf87f] transition-colors font-medium">{t('nav.about')}</a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-[#81b622] text-white rounded hover:bg-[#3d550c] transition-colors font-medium"
            >
              {t('nav.contact')}
            </a>
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 border border-[#81b622] text-[#81b622] rounded hover:bg-[#ecf87f] hover:border-[#3d550c] hover:text-[#3d550c] transition-colors font-medium"
            >
              {language === 'lv' ? 'EN' : 'LV'}
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguage}
              className="mr-4 px-2 py-1 border border-[#81b622] text-[#81b622] rounded hover:bg-[#ecf87f] hover:border-[#3d550c] hover:text-[#3d550c] transition-colors"
            >
              {language === 'lv' ? 'EN' : 'LV'}
            </button>
            <button 
              onClick={toggleMenu}
              className="text-[#81b622] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#home" 
                className="text-[#81b622] hover:text-[#3d550c] transition-colors font-medium"
                onClick={toggleMenu}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#ekomini" 
                className="text-[#81b622] hover:text-[#3d550c] transition-colors font-medium"
                onClick={toggleMenu}
              >
                {t('nav.ekomini')}
              </a>
              <a 
                href="#portfolio" 
                className="text-[#81b622] hover:text-[#3d550c] transition-colors font-medium"
                onClick={toggleMenu}
              >
                {t('nav.portfolio')}
              </a>
              <a 
                href="#about" 
                className="text-[#81b622] hover:text-[#3d550c] transition-colors font-medium"
                onClick={toggleMenu}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 bg-[#81b622] text-white rounded hover:bg-[#3d550c] transition-colors text-center font-medium"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;