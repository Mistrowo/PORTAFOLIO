// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Tecnologias />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
