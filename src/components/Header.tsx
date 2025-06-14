
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-cream-white/80 backdrop-blur-md border-b border-cream-alt/20 apple-shadow translate-y-0' 
        : 'bg-transparent translate-y-0'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-xl text-brown-elegant transform transition-all duration-300 hover:scale-105">
            Luis Felipe
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['sobre', 'experiencia', 'projetos', 'formacao'].map((section, index) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-brown-muted hover:text-brown-elegant transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brown-elegant after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {section === 'sobre' ? 'Sobre' : 
                 section === 'experiencia' ? 'Experiência' : 
                 section === 'projetos' ? 'Projetos' : 'Formação'}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-brown-elegant text-cream-white px-6 py-2 rounded-full hover:bg-brown-elegant/90 transition-all duration-300 apple-shadow hover:apple-shadow-hover transform hover:scale-105 hover:-translate-y-1"
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
