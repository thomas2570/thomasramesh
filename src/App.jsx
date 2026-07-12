import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="bg-black min-h-screen text-[#e4e4e7] selection:bg-white selection:text-black font-sans relative">
      <CursorEffect />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
