
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 px-6 relative overflow-hidden">
      {/* Background parallax decoration */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-brown-light/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl md:text-5xl font-light text-brown-elegant mb-8 tracking-tight animate-on-scroll"
            >
              Sobre mim
            </h2>
            <div 
              ref={textRef as React.RefObject<HTMLDivElement>}
              className="space-y-6 text-brown-muted text-lg leading-relaxed animate-on-scroll animate-stagger-1"
            >
              <p className="transform transition-all duration-700 hover:translate-x-2">
                Meu nome é Luis Felipe, e atuo no desenvolvimento de interfaces de usuário 
                e APIs com JavaScript/TypeScript desde 2022.
              </p>
              <p className="transform transition-all duration-700 hover:translate-x-2" style={{ transitionDelay: '0.1s' }}>
                Sou apaixonado por soluções visuais e funcionais, com forte interesse no 
                universo front-end. Minha trajetória acadêmica reflete meu compromisso 
                com a excelência técnica.
              </p>
              <p className="transform transition-all duration-700 hover:translate-x-2" style={{ transitionDelay: '0.2s' }}>
                Busco sempre criar experiências digitais que unem estética refinada 
                com funcionalidade impecável, inspirado pelas melhores práticas de design 
                e desenvolvimento moderno.
              </p>
            </div>
          </div>
          
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative animate-on-scroll animate-stagger-2"
          >
            <div className="glass-card rounded-3xl p-8 apple-shadow hover:apple-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <img 
                src="/lovable-uploads/8f078d0d-ca4e-4a69-962f-86894027db62.png" 
                alt="Setup de desenvolvedor"
                className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brown-light/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brown-elegant/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
