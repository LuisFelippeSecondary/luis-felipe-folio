
import { useParallax, useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  useParallax();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration with parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-white to-cream-alt opacity-60 parallax-slow"></div>
      
      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brown-light/10 rounded-full blur-xl animate-float animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brown-elegant/5 rounded-full blur-2xl animate-float animate-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-brown-light/8 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div>
          <h1 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-5xl md:text-7xl font-light text-brown-elegant mb-6 tracking-tight animate-on-scroll"
          >
            Luis Felipe
          </h1>
          <h2 
            ref={subtitleRef as React.RefObject<HTMLHeadingElement>}
            className="text-2xl md:text-3xl font-light text-brown-muted mb-8 tracking-wide animate-on-scroll animate-stagger-1"
          >
            Frontend Developer
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-lg md:text-xl text-brown-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-stagger-2"
          >
            Desenvolvedor apaixonado por criar interfaces elegantes e funcionais. 
            Especializado em JavaScript, TypeScript e tecnologias modernas de frontend.
          </p>
          
          <div 
            ref={buttonsRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll animate-stagger-3"
          >
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brown-elegant text-cream-white px-8 py-4 rounded-full hover:bg-brown-elegant/90 transition-all duration-500 apple-shadow hover:apple-shadow-hover transform hover:scale-105 hover:-translate-y-1"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-brown-elegant text-brown-elegant px-8 py-4 rounded-full hover:bg-brown-elegant hover:text-cream-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brown-muted/30 rounded-full flex justify-center parallax-medium">
          <div className="w-1 h-3 bg-brown-muted/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
