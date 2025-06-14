
const Experience = () => {
  const experiences = [
    {
      company: "Korporate Solution Factory",
      role: "Desenvolvedor Front-end",
      period: "07/2024 – atual",
      description: "Desenvolvedor front-end de sistemas voltados ao setor de seguros, focando em performance, UI e acessibilidade."
    },
    {
      company: "Tridev Soluções",
      role: "Desenvolvedor Full-stack",
      period: "04/2024 – 07/2024",
      description: "Atuação como desenvolvedor full-stack autônomo, entregando soluções ponta a ponta a clientes reais."
    },
    {
      company: "NoBullying",
      role: "Idealizador e Desenvolvedor",
      period: "01/2023 – 04/2024",
      description: "Idealizei e desenvolvi um sistema de denúncias voltado ao combate ao bullying e assédio no IFPB-CZ."
    },
    {
      company: "Loopis Jr",
      role: "Consultor de Projetos",
      period: "12/2022 – 01/2024",
      description: "Iniciei como trainee e fui promovido a consultor de projetos na empresa júnior do IFPB-CZ."
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-6 bg-cream-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-brown-elegant mb-6 tracking-tight">
            Experiência
          </h2>
          <p className="text-lg text-brown-muted max-w-2xl mx-auto">
            Minha jornada profissional no desenvolvimento de software
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 apple-shadow hover:apple-shadow-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-medium text-brown-elegant mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-brown-muted font-medium">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-brown-muted/70 font-medium mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <p className="text-brown-muted leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
