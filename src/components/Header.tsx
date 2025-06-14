
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-white/80 backdrop-blur-md border-b border-cream-alt/20 apple-shadow' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-xl text-brown-elegant">
            Luis Felipe
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('experiencia')}
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('formacao')}
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              Formação
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-brown-elegant text-cream-white px-6 py-2 rounded-full hover:bg-brown-elegant/90 transition-all duration-200 apple-shadow hover:apple-shadow-hover"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
