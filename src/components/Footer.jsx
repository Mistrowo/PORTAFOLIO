import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800">
      <div className="container mx-auto px-4 text-center text-white">
        <p>© {new Date().getFullYear()} Portafolio 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
