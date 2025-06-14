
import { ExternalLink, Github, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NoBullying App",
      description: "App para registro e gestão de denúncias internas de bullying e assédio.",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      projectUrl: "#",
      isPrivateRepo: true
    },
    {
      title: "Tridev Landing Page",
      description: "Landing institucional para marca de soluções digitais full-stack.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false
    },
    {
      title: "Sistema de reservas – Chácara do Dandão",
      description: "Sistema web com módulos para usuários comuns e administradores.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      projectUrl: "#",
      isPrivateRepo: true
    },
    {
      title: "Kerigma Systems",
      description: "Landing Page institucional para atração de clientes.",
      tech: ["React", "Styled Components", "AOS"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false
    },
    {
      title: "Este portfólio pessoal",
      description: "Portfólio pessoal desenvolvido com foco em design e performance.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false
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
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-brown-elegant/10 text-brown-elegant px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-cream-alt/20">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brown-elegant text-cream-white px-4 py-2 rounded-full hover:bg-brown-elegant/90 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Ver Projeto
                </a>
                
                <div className="flex items-center">
                  {project.isPrivateRepo ? (
                    <div className="p-2 rounded-full bg-brown-muted/20 text-brown-muted">
                      <Lock size={18} />
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brown-elegant/10 text-brown-elegant hover:bg-brown-elegant hover:text-cream-white transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
