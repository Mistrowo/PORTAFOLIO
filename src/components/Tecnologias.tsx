import React, { useState } from 'react';

const Tecnologias = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todas');
  
  const categorias = ['Todas', 'Frontend', 'Backend', 'Bases de Datos', 'Herramientas', 'Cloud', 'DevOps'];
  
  const tecnologias = [
    // Frontend
    { name: 'React', level: 90, categoria: 'Frontend', descripcion: 'Biblioteca para crear interfaces de usuario interactivas', icono: 'logo-react' },
    { name: 'JavaScript', level: 85, categoria: 'Frontend', descripcion: 'Lenguaje de programación para desarrollo web', icono: 'logo-javascript' },
    { name: 'TypeScript', level: 78, categoria: 'Frontend', descripcion: 'Superset tipado de JavaScript', icono: 'code-outline' },
    { name: 'Tailwind CSS', level: 88, categoria: 'Frontend', descripcion: 'Framework CSS de utilidades para diseño rápido', icono: 'code-slash-outline' },
    { name: 'HTML5', level: 95, categoria: 'Frontend', descripcion: 'Lenguaje de marcado para estructura web', icono: 'logo-html5' },
    { name: 'CSS3', level: 92, categoria: 'Frontend', descripcion: 'Lenguaje de estilos para diseño web', icono: 'logo-css3' },
    { name: 'SASS', level: 85, categoria: 'Frontend', descripcion: 'Preprocesador CSS con funcionalidades avanzadas', icono: 'color-filter-outline' },
    { name: 'Vue.js', level: 72, categoria: 'Frontend', descripcion: 'Framework progresivo para UI', icono: 'logo-vue' },
    
    // Backend
    { name: 'Node.js', level: 75, categoria: 'Backend', descripcion: 'Entorno JavaScript del lado del servidor', icono: 'server-outline' },
    { name: 'Express.js', level: 78, categoria: 'Backend', descripcion: 'Framework minimalista para Node.js', icono: 'code-working-outline' },
    { name: 'NestJS', level: 72, categoria: 'Backend', descripcion: 'Framework Node.js progresivo para apps server-side', icono: 'construct-outline' },
    { name: 'Laravel', level: 83, categoria: 'Backend', descripcion: 'Framework PHP elegante para desarrollo web', icono: 'logo-laravel' },
    { name: 'Django', level: 68, categoria: 'Backend', descripcion: 'Framework Python de alto nivel', icono: 'logo-python' },
    { name: 'ASP.NET', level: 65, categoria: 'Backend', descripcion: 'Framework para aplicaciones web de Microsoft', icono: 'code-slash-outline' },
    
    // Bases de Datos
    { name: 'MongoDB', level: 75, categoria: 'Bases de Datos', descripcion: 'Base de datos NoSQL orientada a documentos', icono: 'server-outline' },
    { name: 'MySQL', level: 78, categoria: 'Bases de Datos', descripcion: 'Sistema de gestión de bases de datos relacional', icono: 'analytics-outline' },
    { name: 'PostgreSQL', level: 74, categoria: 'Bases de Datos', descripcion: 'Sistema de base de datos relacional avanzado', icono: 'cube-outline' },
    { name: 'Redis', level: 65, categoria: 'Bases de Datos', descripcion: 'Almacén de estructura de datos en memoria', icono: 'flash-outline' },
    { name: 'Elasticsearch', level: 62, categoria: 'Bases de Datos', descripcion: 'Motor de búsqueda y análisis distribuido', icono: 'search-outline' },
    
    // Herramientas
    { name: 'Git', level: 82, categoria: 'Herramientas', descripcion: 'Sistema de control de versiones', icono: 'git-branch-outline' },
    { name: 'Docker', level: 70, categoria: 'Herramientas', descripcion: 'Plataforma de contenedores', icono: 'cube-outline' },
    { name: 'Apache Spark', level: 65, categoria: 'Herramientas', descripcion: 'Framework de procesamiento de datos a gran escala', icono: 'flame-outline' },
    { name: 'Webpack', level: 75, categoria: 'Herramientas', descripcion: 'Empaquetador de módulos para JavaScript', icono: 'aperture-outline' },
    { name: 'GraphQL', level: 68, categoria: 'Herramientas', descripcion: 'Lenguaje de consulta para APIs', icono: 'git-network-outline' },
    { name: 'Jest', level: 72, categoria: 'Herramientas', descripcion: 'Framework de testing para JavaScript', icono: 'flask-outline' },
    
    // Cloud
    { name: 'AWS', level: 75, categoria: 'Cloud', descripcion: 'Amazon Web Services - Plataforma de servicios en la nube', icono: 'cloud-outline' },
    { name: 'Google Cloud', level: 68, categoria: 'Cloud', descripcion: 'Plataforma de computación en la nube de Google', icono: 'logo-google' },
    { name: 'Azure', level: 65, categoria: 'Cloud', descripcion: 'Servicios en la nube de Microsoft', icono: 'cloud-done-outline' },
    { name: 'Firebase', level: 78, categoria: 'Cloud', descripcion: 'Plataforma de desarrollo de apps en la nube', icono: 'flame-outline' },
    { name: 'Vercel', level: 82, categoria: 'Cloud', descripcion: 'Plataforma para despliegue de frontend', icono: 'triangle-outline' },
    
    // DevOps
    { name: 'Kubernetes', level: 62, categoria: 'DevOps', descripcion: 'Plataforma para automatizar el despliegue de contenedores', icono: 'apps-outline' },
    { name: 'Jenkins', level: 65, categoria: 'DevOps', descripcion: 'Servidor de automatización de código abierto', icono: 'cog-outline' },
    { name: 'GitHub Actions', level: 70, categoria: 'DevOps', descripcion: 'Automatización de flujos de trabajo en GitHub', icono: 'git-merge-outline' },
    { name: 'Terraform', level: 60, categoria: 'DevOps', descripcion: 'Herramienta de infraestructura como código', icono: 'build-outline' },
    { name: 'Ansible', level: 58, categoria: 'DevOps', descripcion: 'Herramienta de automatización IT', icono: 'settings-outline' },
  ];
  
  const tecnologiasFiltradas = filtroActivo === 'Todas' 
    ? tecnologias 
    : tecnologias.filter(tech => tech.categoria === filtroActivo);
  
  const getGradientColor = (level) => {
    if (level >= 85) return 'from-indigo-600 to-blue-500';
    if (level >= 70) return 'from-blue-500 to-cyan-400';
    return 'from-cyan-400 to-teal-500';
  };

  return (
    <section id="tecnologias" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">Stack Tecnológico</span>
          <h2 className="text-4xl font-bold mb-4 text-slate-800">
            Tecnologías y Habilidades
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Mi stack tecnológico está en constante evolución, combinando herramientas probadas con nuevas tecnologías para desarrollar soluciones eficientes y escalables.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filtroActivo === categoria
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tecnologiasFiltradas.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ion-icon name={tech.icono} style={{ fontSize: '1.5rem' }}></ion-icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{tech.name}</h4>
                    <p className="text-sm text-slate-500">{tech.descripcion}</p>
                  </div>
                </div>
                
                {/* Indicador de nivel */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-slate-500">Nivel de experiencia</span>
                    <span className="text-xs font-semibold text-blue-600">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getGradientColor(tech.level)}`}
                      style={{ width: `${tech.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className={`h-1 w-full bg-gradient-to-r ${getGradientColor(tech.level)}`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Metodologías y Enfoques</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { nombre: 'Desarrollo Ágil', icono: 'sync-outline' },
              { nombre: 'UI/UX', icono: 'color-palette-outline' },
              { nombre: 'Responsive Design', icono: 'phone-portrait-outline' },
              { nombre: 'SEO', icono: 'search-outline' },
              { nombre: 'Clean Code', icono: 'code-slash-outline' },
              { nombre: 'Testing (TDD)', icono: 'flask-outline' },
              { nombre: 'CI/CD', icono: 'git-network-outline' },
              { nombre: 'PWA', icono: 'globe-outline' },
              { nombre: 'Microservicios', icono: 'apps-outline' },
              { nombre: 'API RESTful', icono: 'repeat-outline' },
              { nombre: 'DevSecOps', icono: 'shield-checkmark-outline' },
              { nombre: 'Big Data', icono: 'analytics-outline' }
            ].map((item, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow duration-300">
                <ion-icon name={item.icono} className="text-blue-600"></ion-icon>
                <span className="text-slate-700 font-medium">{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>
        
     
      </div>
    </section>
  );
};

export default Tecnologias;