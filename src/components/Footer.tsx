
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-cream-alt/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-brown-muted mb-4 md:mb-0">
            © 2024 Luis Felipe. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-brown-muted hover:text-brown-elegant transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
