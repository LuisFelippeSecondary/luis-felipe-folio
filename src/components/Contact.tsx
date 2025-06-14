
const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-brown-elegant mb-8 tracking-tight">
            Vamos conversar?
          </h2>
          <p className="text-lg text-brown-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="#"
              className="bg-brown-elegant text-cream-white px-8 py-4 rounded-full hover:bg-brown-elegant/90 transition-all duration-300 apple-shadow hover:apple-shadow-hover transform hover:scale-105"
            >
              Download CV
            </a>
            <a 
              href="mailto:luisfelipe@email.com"
              className="border-2 border-brown-elegant text-brown-elegant px-8 py-4 rounded-full hover:bg-brown-elegant hover:text-cream-white transition-all duration-300"
            >
              Enviar Email
            </a>
          </div>
          
          <div className="glass-card rounded-2xl p-8 apple-shadow">
            <img 
              src="/lovable-uploads/fc94f253-9268-4ba7-a6ea-15da80793e36.png" 
              alt="Luis Felipe"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover apple-shadow"
            />
            <h3 className="text-2xl font-medium text-brown-elegant mb-2">
              Luis Felipe
            </h3>
            <p className="text-brown-muted">
              Frontend Developer • JavaScript • TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
