import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Vibly Chat",
      desc: "A real-time chat application built with PHP. Features include message routing, user authentication, and real-time backend functionality.",
      tech: ["PHP", "MySQL", "WebSocket"],
      github: "https://github.com/thomas2570/vibly-chat",
      live: "https://vibly-chat.vercel.app/",
      image: "/vibly.png"
    },
    {
      title: "ProFix",
      desc: "A comprehensive platform designed to streamline professional services and workflow management.",
      tech: ["React", "Node.js", "TailwindCSS"],
      github: "https://github.com/thomas2570/ProFix",
      live: "https://pro-fix-two.vercel.app",
      image: "/profix.png"
    },
    {
      title: "ZPeriod",
      desc: "An interactive web application showcasing dynamic user input handling, real-time output capabilities, and clean UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/thomas2570/-Zperiod",
      live: "https://zperiod.vercel.app/",
      image: "/zperiod.png"
    },
    {
      title: "TRIC School Management",
      desc: "A robust school management system for handling student records, attendance, and administrative tasks efficiently.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/thomas2570/TRIC-School-Management",
      live: "https://tric-school-management.vercel.app",
      image: "/tric.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Here are a few projects I've worked on recently.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="w-full h-48 md:h-56 bg-[#121212] rounded-xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
                <img 
                  src={project.image} 
                  alt={`${project.title} UI`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.github && (
                    <a href={project.github} className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110" target="_blank" rel="noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110" target="_blank" rel="noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">{project.title}</h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="font-sans text-xs text-gray-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://github.com/thomas2570" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white bg-transparent border border-white/10 rounded-full hover:bg-white/5 transition-all"
          >
            Explore More on GitHub
            <Github className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
