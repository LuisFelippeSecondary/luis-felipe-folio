
const Projects = () => {
  const projects = [
    {
      title: "NoBullying App",
      description: "App para registro e gestão de denúncias internas de bullying e assédio.",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Tridev Landing Page",
      description: "Landing institucional para marca de soluções digitais full-stack.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Sistema de reservas – Chácara do Dandão",
      description: "Sistema web com módulos para usuários comuns e administradores.",
      tech: ["React", "Express", "MongoDB", "JWT"]
    },
    {
      title: "Kerigma Systems",
      description: "Landing Page institucional para atração de clientes.",
      tech: ["React", "Styled Components", "AOS"]
    },
    {
      title: "Este portfólio pessoal",
      description: "Portfólio pessoal desenvolvido com foco em design e performance.",
      tech: ["React", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-brown-elegant mb-6 tracking-tight">
            Projetos
          </h2>
          <p className="text-lg text-brown-muted max-w-2xl mx-auto">
            Seleção dos meus trabalhos mais relevantes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 apple-shadow hover:apple-shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium text-brown-elegant mb-4">
                {project.title}
              </h3>
              <p className="text-brown-muted mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-brown-elegant/10 text-brown-elegant px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
