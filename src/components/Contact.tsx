import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d550c] mb-4">
            {t('contact.title')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#3d550c] text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6">EKO-MĀJAS</h3>
                <p className="mb-8 opacity-90">
                  {t('contact.info')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">{t('contact.email.label')}</p>
                      <p className="font-medium">info@eko-majas.lv</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">{t('contact.phone.label')}</p>
                      <p className="font-medium">+371 2x xxx xxx</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t('contact.name')}
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#81b622]"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t('contact.email')}
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#81b622]"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t('contact.message')}
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#81b622]"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-[#81b622] text-white rounded-md flex items-center justify-center 
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#59981a]'} transition-colors`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {t('contact.send')}
                  </button>
                  
                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md border border-green-200">
                      Your message has been sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;