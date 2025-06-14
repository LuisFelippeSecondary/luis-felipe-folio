
const Education = () => {
  const education = [
    {
      degree: "Pós-graduação Lato Sensu em Desenvolvimento Full Stack",
      institution: "Estácio",
      period: "2024 - atual",
      status: "Em andamento"
    },
    {
      degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
      institution: "IFPB",
      period: "2021 - 2024",
      status: "Concluído"
    },
    {
      degree: "Técnico em Informática",
      institution: "ECIT",
      period: "2017 - 2019",
      status: "Concluído"
    }
  ];

  return (
    <section id="formacao" className="py-20 px-6 bg-cream-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-brown-elegant mb-6 tracking-tight">
            Formação
          </h2>
          <p className="text-lg text-brown-muted max-w-2xl mx-auto">
            Minha trajetória acadêmica e profissional
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 apple-shadow hover:apple-shadow-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-brown-elegant mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-brown-muted font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-brown-muted/70">
                    {edu.period}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    edu.status === 'Em andamento' 
                      ? 'bg-brown-light/20 text-brown-elegant' 
                      : 'bg-brown-elegant/10 text-brown-elegant'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
