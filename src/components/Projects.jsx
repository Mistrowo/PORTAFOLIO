import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Dashboard Analítico',
    description: 'Plataforma de análisis de datos para empresas con visualizaciones interactivas y reportes personalizados.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    category: 'Frontend',
    link: '#',
    github: 'https://github.com/username/dashboard-project'
  },
  {
    id: 2,
    title: 'E-commerce Responsive',
    description: 'Tienda online completa con carrito de compras, pasarela de pagos y panel de administración.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Redux', 'Express', 'Stripe API'],
    category: 'Fullstack',
    link: '#',
    github: 'https://github.com/username/ecommerce-project'
  },
  {
    id: 3,
    title: 'API REST de Gestión',
    description: 'API robusta para gestión de recursos empresariales con autenticación JWT y documentación Swagger.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    category: 'Backend',
    link: '#',
    github: 'https://github.com/username/api-management'
  },
  {
    id: 4,
    title: 'Aplicación de Notas',
    description: 'App para tomar notas con organización por categorías, recordatorios y sincronización en la nube.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile',
    link: '#',
    github: 'https://github.com/username/notes-app'
  },
  {
    id: 5,
    title: 'Portfolio Creativo',
    description: 'Diseño web personal con efectos de parallax, animaciones avanzadas y optimización SEO.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    category: 'Frontend',
    link: '#',
    github: 'https://github.com/username/creative-portfolio'
  },
  {
    id: 6,
    title: 'Sistema de Reservas',
    description: 'Plataforma para gestión de reservas en tiempo real con notificaciones y calendario interactivo.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    category: 'Fullstack',
    link: '#',
    github: 'https://github.com/username/booking-system'
  },
];

const categories = ['Todos', ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 relative inline-block">
            Mis Proyectos
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 mt-4">Una selección de mis trabajos más recientes y destacados</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent flex flex-col justify-end p-4 transform transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-2 mb-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
                    >
                      <ion-icon name="globe-outline" role="img" aria-label="globe outline" className="mr-1"></ion-icon>
                      Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-slate-800 px-3 py-1 rounded text-sm font-medium hover:bg-slate-50 transition-colors duration-300 flex items-center"
                    >
                      <ion-icon name="logo-github" role="img" aria-label="logo github" className="mr-1"></ion-icon>
                      Código
                    </a>
                  </div>
                </div>
                
                {/* Tag de categoría */}
                <span className="absolute top-4 right-4 bg-blue-500/90 text-white text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                {/* Tecnologías utilizadas */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Enlace principal */}
              <div className="px-6 pb-6 pt-2">
                <a 
                  href={project.link} 
                  className="text-blue-500 font-medium hover:text-blue-700 transition-colors duration-300 flex items-center"
                >
                  Ver detalles
                  <span className="ml-1 text-lg">
                    <ion-icon name="arrow-forward-outline" role="img" aria-label="arrow forward outline"></ion-icon>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/username" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-300"
          >
            <span className="mr-2 text-xl">
              <ion-icon name="logo-github" role="img" aria-label="logo github"></ion-icon>
            </span>
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;