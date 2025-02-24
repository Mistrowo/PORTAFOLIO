import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const background = heroSection.querySelector('.bg-layer');
        if (background) {
          background.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden"
    >
      <div 
        className="bg-layer absolute inset-0 bg-cover bg-center bg-fixed z-0 transform transition-transform duration-500 ease-out"
        style={{ 
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          filter: "brightness(0.85) contrast(1.1)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 via-blue-900/60 to-slate-900/70 z-0"></div>
      
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                'rgba(56, 189, 248, 0.18)', 
                'rgba(59, 130, 246, 0.15)', 
                'rgba(29, 78, 216, 0.12)',  
                'rgba(186, 230, 253, 0.10)', 
                'rgba(96, 165, 250, 0.14)'  
              ][i],
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center space-y-6 transform transition-all duration-1000 animate-fadeIn">
        <h5 className="font-bold text-2xl text-slate-200 opacity-0 animate-slideDown" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Hola <span className="inline-block animate-wave">👋</span>, soy
        </h5>
        
        <h1 className="font-bold text-6xl md:text-7xl text-white opacity-0 animate-slideDown" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500">
            Alex Parada
          </span>
        </h1>
        
        <h5 className="font-bold text-2xl text-slate-200 opacity-0 animate-slideDown" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          Desarrollador Full Stack
        </h5>
      </div>
      
      <div className="relative z-10 mt-12 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 opacity-0 animate-slideUp" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <a
          href="/pdf/a.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-blue-500/20 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center group"
        >
          <span>Descargar CV</span>
          <span className="font-bold ml-2 text-lg group-hover:translate-y-1 transition-transform duration-300">
            <ion-icon name="cloud-download-outline" role="img" aria-label="cloud download outline"></ion-icon>
          </span>
        </a>
        
        <a
          href="mailto:alex.parada.per@gmail.com"
          className="px-6 py-3 border-2 border-sky-400 text-sky-400 font-medium rounded-lg hover:bg-sky-900/20 transition-all duration-300"
        >
          Contáctame
        </a>
      </div>
      
      <div className="relative z-10 mt-12 flex justify-center items-center text-5xl text-slate-200 space-x-6 opacity-0 animate-slideUp" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-riquelme-566a16261/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform transition-all duration-300 hover:scale-125 hover:text-sky-400"
        >
          <ion-icon name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon>
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-slideUp" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
        <div className="w-8 h-12 rounded-full border-2 border-slate-400/60 flex justify-center pt-2">
          <div className="w-1 h-3 bg-sky-400 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;