
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-white to-cream-alt opacity-60"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brown-light/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brown-elegant/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light text-brown-elegant mb-6 tracking-tight">
            Luis Felipe
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-brown-muted mb-8 tracking-wide">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-brown-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor apaixonado por criar interfaces elegantes e funcionais. 
            Especializado em JavaScript, TypeScript e tecnologias modernas de frontend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brown-elegant text-cream-white px-8 py-4 rounded-full hover:bg-brown-elegant/90 transition-all duration-300 apple-shadow hover:apple-shadow-hover transform hover:scale-105"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-brown-elegant text-brown-elegant px-8 py-4 rounded-full hover:bg-brown-elegant hover:text-cream-white transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brown-muted/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brown-muted/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
