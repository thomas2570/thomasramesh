import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Core Team Member",
      company: "The Elites",
      period: "Oct 2025 - Present",
      desc: "Working closely with the core team on initiatives and technical projects, contributing as a full-stack developer."
    },
    {
      id: "02",
      role: "Sponsorship Team Member",
      company: "The Elites",
      period: "Mar 2025 - Oct 2025",
      desc: "Led sponsorship acquisition efforts, collaborating with companies to support community initiatives."
    },
    {
      id: "03",
      role: "Contributor (Trainee)",
      company: "GirlScript Summer of Code '25",
      period: "Jul 2025 - Oct 2025",
      desc: "Actively contributed to open-source projects, enhancing skills in collaborative development and version control."
    },
    {
      id: "04",
      role: "Public Relations Volunteer",
      company: "HackwithIndia",
      period: "Dec 2024 - Oct 2025",
      desc: "Managed public relations and communications for HackwithIndia, developing strong interpersonal and organizational skills."
    }
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#121212] group-hover:bg-white transition-colors duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                  <span className="text-sm font-mono text-gray-500 bg-black px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="text-gray-300 font-medium mb-4">{exp.company}</div>
                <p className="text-gray-400 leading-relaxed font-sans text-sm">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
