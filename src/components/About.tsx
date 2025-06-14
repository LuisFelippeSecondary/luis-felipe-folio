
const About = () => {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-brown-elegant mb-8 tracking-tight">
              Sobre mim
            </h2>
            <div className="space-y-6 text-brown-muted text-lg leading-relaxed">
              <p>
                Meu nome é Luis Felipe, e atuo no desenvolvimento de interfaces de usuário 
                e APIs com JavaScript/TypeScript desde 2022.
              </p>
              <p>
                Sou apaixonado por soluções visuais e funcionais, com forte interesse no 
                universo front-end. Minha trajetória acadêmica reflete meu compromisso 
                com a excelência técnica.
              </p>
              <p>
                Busco sempre criar experiências digitais que unem estética refinada 
                com funcionalidade impecável, inspirado pelas melhores práticas de design 
                e desenvolvimento moderno.
              </p>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="glass-card rounded-3xl p-8 apple-shadow hover:apple-shadow-hover transition-all duration-300">
              <img 
                src="/lovable-uploads/8f078d0d-ca4e-4a69-962f-86894027db62.png" 
                alt="Setup de desenvolvedor"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brown-light/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brown-elegant/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
