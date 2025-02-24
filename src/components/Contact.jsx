import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <p className="mb-4">Si deseas contactarme, envíame un mensaje:</p>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-3 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
          <textarea placeholder="Mensaje" className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
