import { useLanguage } from '../contexts/LanguageContext';
import { Home, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3d550c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Home className="mr-2" size={24} />
              EKO-MĀJAS
            </div>
            <p className="opacity-80 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex items-center">
              <Mail size={18} className="mr-2 opacity-80" />
              <a href="mailto:info@eko-majas.lv" className="hover:text-[#ecf87f] transition-colors">
                info@eko-majas.lv
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="flex items-center hover:text-[#ecf87f] transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#ekomini" className="flex items-center hover:text-[#ecf87f] transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  {t('nav.ekomini')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="flex items-center hover:text-[#ecf87f] transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  {t('nav.portfolio')}
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center hover:text-[#ecf87f] transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center hover:text-[#ecf87f] transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter')}</h3>
            <p className="opacity-80 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-3 py-2 text-gray-700 rounded-l-md focus:outline-none"
              />
              <button 
                className="bg-[#81b622] hover:bg-[#59981a] transition-colors px-4 py-2 rounded-r-md"
              >
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#ecf87f] transition-colors mr-6">
                {t('footer.terms')}
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#ecf87f] transition-colors mr-6">
                {t('footer.privacy')}
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#ecf87f] transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
            <div className="opacity-80 text-sm">
              &copy; {currentYear} EKO-MĀJAS | {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;