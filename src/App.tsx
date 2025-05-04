import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EkoMini from './components/EkoMini';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage, LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <EkoMini />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;