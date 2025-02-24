import React from 'react';

const About = () => {
 

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 relative inline-block">
            Sobre Mí
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 mt-4">Desarrollador Full Stack con enfoque en experiencias web modernas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Soy un desarrollador <span className="font-semibold text-blue-600">apasionado por crear</span> interfaces modernas, 
              intuitivas y responsivas. Me especializo en React y uso Tailwind CSS para diseñar de forma rápida y eficiente.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Mi enfoque combina <span className="font-semibold text-blue-600">funcionalidad y estética</span> para entregar 
              productos que no solo cumplen con los requerimientos técnicos sino que también brindan una excelente experiencia de usuario.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Lo que me define:</h3>
              <ul className="space-y-3">
                {[
                  "Comprometido con el código limpio y bien estructurado",
                  "Enfocado en soluciones escalables y mantenibles",
                  "Pasión por el aprendizaje continuo y nuevas tecnologías",
                  "Experiencia en desarrollo ágil y trabajo en equipo"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">
                      <ion-icon name="checkmark-circle-outline" role="img" aria-label="checkmark circle outline"></ion-icon>
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 z-10 rounded-lg"></div>
              <img
              src="/imagenes/portafolio.svg"
              alt="Alex Parada"
              className="w-full h-auto relative z-0 rounded-lg"
            />

            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 z-0 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full opacity-70 z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
      
      
        
      </div>
    </section>
  );
};

export default About;