
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();
  const cardRef = useScrollAnimation();

  return (
    <section id="contato" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brown-light/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl md:text-5xl font-light text-brown-elegant mb-8 tracking-tight animate-on-scroll"
          >
            Vamos conversar?
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-lg text-brown-muted mb-12 max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-stagger-1"
          >
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          
          <div 
            ref={buttonsRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-on-scroll animate-stagger-2"
          >
            <a 
              href="#"
              className="bg-brown-elegant text-cream-white px-8 py-4 rounded-full hover:bg-brown-elegant/90 transition-all duration-500 apple-shadow hover:apple-shadow-hover transform hover:scale-105 hover:-translate-y-1"
            >
              Download CV
            </a>
            <a 
              href="mailto:luisfelipe@email.com"
              className="border-2 border-brown-elegant text-brown-elegant px-8 py-4 rounded-full hover:bg-brown-elegant hover:text-cream-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              Enviar Email
            </a>
          </div>
          
          <div 
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className="glass-card rounded-2xl p-8 apple-shadow hover:apple-shadow-hover transition-all duration-500 transform hover:scale-105 animate-on-scroll animate-stagger-3 group"
          >
            <img 
              src="/lovable-uploads/fc94f253-9268-4ba7-a6ea-15da80793e36.png" 
              alt="Luis Felipe"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover apple-shadow transition-all duration-500 group-hover:scale-110"
            />
            <h3 className="text-2xl font-medium text-brown-elegant mb-2 group-hover:text-brown-elegant/80 transition-colors duration-300">
              Luis Felipe
            </h3>
            <p className="text-brown-muted group-hover:text-brown-muted/80 transition-colors duration-300">
              Frontend Developer • JavaScript • TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
