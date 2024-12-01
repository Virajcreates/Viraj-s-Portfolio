import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Viraj D Naik</h1>
          
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900">Projects</button>
            <button onClick={() => scrollToSection('certificates')} className="text-gray-600 hover:text-gray-900">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Virajcreates" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/viraj-naik-182659320" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">Projects</button>
            <button onClick={() => scrollToSection('certificates')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;