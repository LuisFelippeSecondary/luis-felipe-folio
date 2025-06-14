
import { ExternalLink, Github, Lock, Code, Globe, Calendar, Building, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NoBullying App",
      description: "App para registro e gestão de denúncias internas de bullying e assédio.",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      projectUrl: "#",
      isPrivateRepo: true,
      logo: <Building size={20} className="text-brown-elegant" />
    },
    {
      title: "Tridev Landing Page",
      description: "Landing institucional para marca de soluções digitais full-stack.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false,
      logo: <Code size={20} className="text-brown-elegant" />
    },
    {
      title: "Sistema de reservas – Chácara do Dandão",
      description: "Sistema web com módulos para usuários comuns e administradores.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      projectUrl: "#",
      isPrivateRepo: true,
      logo: <Calendar size={20} className="text-brown-elegant" />
    },
    {
      title: "Kerigma Systems",
      description: "Landing Page institucional para atração de clientes.",
      tech: ["React", "Styled Components", "AOS"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false,
      logo: <Globe size={20} className="text-brown-elegant" />
    },
    {
      title: "Este portfólio pessoal",
      description: "Portfólio pessoal desenvolvido com foco em design e performance.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      projectUrl: "#",
      githubUrl: "#",
      isPrivateRepo: false,
      logo: <User size={20} className="text-brown-elegant" />
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brown-elegant/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
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
              className="glass-card rounded-2xl p-6 apple-shadow hover:apple-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group flex flex-col h-full relative"
            >
              {/* Logo no canto superior direito */}
              <div className="absolute top-4 right-4 p-2 bg-brown-elegant/5 rounded-full">
                {project.logo}
              </div>
              
              {/* Conteúdo principal */}
              <div className="flex-grow">
                <h3 className="text-xl font-medium text-brown-elegant mb-4 group-hover:text-brown-elegant/80 transition-colors duration-300 pr-12">
                  {project.title}
                </h3>
                <p className="text-brown-muted mb-6 leading-relaxed group-hover:text-brown-muted/80 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-brown-elegant/10 text-brown-elegant px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-brown-elegant/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Botões sempre na parte inferior */}
              <div className="flex items-center justify-between pt-4 border-t border-cream-alt/20 mt-auto">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brown-elegant text-cream-white px-4 py-2 rounded-full hover:bg-brown-elegant/90 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:-translate-y-1"
                >
                  <ExternalLink size={16} />
                  Ver Projeto
                </a>
                
                <div className="flex items-center">
                  {project.isPrivateRepo ? (
                    <div className="p-2 rounded-full bg-brown-muted/20 text-brown-muted transition-all duration-300 hover:bg-brown-muted/30">
                      <Lock size={18} />
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brown-elegant/10 text-brown-elegant hover:bg-brown-elegant hover:text-cream-white transition-all duration-300 transform hover:scale-110"
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
