import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'tecnologias', 'projects'];
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero', icon: 'home-outline' },
    { name: 'Sobre mí', href: '#about', icon: 'person-outline' },
    { name: 'Tecnologías', href: '#tecnologias', icon: 'code-slash-outline' },
    { name: 'Proyectos', href: '#projects', icon: 'layers-outline' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/95 backdrop-blur-sm shadow-md' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                scrolled ? 'text-indigo-600' : 'text-white'
              }`}
            >
              <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${
                scrolled 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'bg-white/20 text-white'
              } transition-all duration-300`}>
                <ion-icon name="code-slash-outline" style={{ fontSize: '1.25rem' }}></ion-icon>
              </div>
              
              <div className="flex flex-col opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <span className="text-xl font-bold leading-tight">
                  Alex Parada
                </span>
                <span className={`text-xs leading-tight ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                  alex.parada.per@gmail.com
                </span>
              </div>
            </a>
            
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    opacity-0 animate-fadeIn
                    ${scrolled 
                      ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }
                    ${activeSection === link.href.substring(1) 
                      ? scrolled 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-white bg-white/10' 
                      : ''
                    }
                  `}
                  style={{ 
                    animationDelay: `${0.1 + index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className="flex items-center gap-1.5">
                    <ion-icon name={link.icon} style={{ fontSize: '1rem' }}></ion-icon>
                    {link.name}
                  </span>
                  
                  {}
                  {activeSection === link.href.substring(1) && (
                    <span className={`
                      absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 translate-y-1
                      ${scrolled ? 'bg-indigo-500' : 'bg-white'}
                    `}></span>
                  )}
                </a>
              ))}
              
             
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none transition-colors duration-300 ${
                scrolled 
                  ? menuOpen ? 'bg-indigo-50' : 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 mb-1 transition-all duration-300 ${
                menuOpen ? 'transform rotate-45 translate-y-1.5 bg-indigo-600' : 
                scrolled ? 'bg-gray-700' : 'bg-white'
              }`}></span>
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 
                scrolled ? 'bg-gray-700' : 'bg-white'
              }`}></span>
              <span className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                menuOpen ? 'transform -rotate-45 -translate-y-1.5 bg-indigo-600' : 
                scrolled ? 'bg-gray-700' : 'bg-white'
              }`}></span>
            </button>
          </div>
        </div>
        
        <div 
          className={`
            md:hidden absolute left-0 right-0 transition-all duration-300 ease-in-out
            shadow-lg bg-white backdrop-blur-sm
            ${menuOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="py-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`
                    flex items-center gap-3 py-3 px-4 text-base transition-colors duration-200
                    ${activeSection === link.href.substring(1) 
                      ? 'text-indigo-600 font-medium' 
                      : 'text-gray-700 hover:text-indigo-600'
                    }
                  `}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className="w-6 h-6 flex items-center justify-center text-lg">
                    <ion-icon name={link.icon}></ion-icon>
                  </span>
                  {link.name}
                  
                  {activeSection === link.href.substring(1) && (
                    <span className="ml-auto text-indigo-500">
                      <ion-icon name="chevron-forward"></ion-icon>
                    </span>
                  )}
                </a>
              ))}
              
              <div className="mt-4 px-4 pb-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  <ion-icon name="download-outline"></ion-icon>
                  Descargar CV
                </a>
              </div>
              
              <div className="flex justify-center gap-5 mt-5 pt-5 border-t border-gray-100">
                {[
                  { icon: 'logo-github', link: 'https://github.com/tuusuario' },
                  { icon: 'logo-linkedin', link: 'https://linkedin.com/in/tuusuario' },
                  { icon: 'logo-twitter', link: 'https://twitter.com/tuusuario' },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <ion-icon name={social.icon}></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation-name: fadeIn;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
  }
`;
document.head.appendChild(styleTag);

export default Navbar;