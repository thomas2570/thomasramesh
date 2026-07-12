import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ name, icon, color, invert }) => (
  <div className="relative group w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#0a0a0a] border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
    <div className={`absolute inset-0 bg-gradient-to-tr ${color} to-transparent opacity-0 group-hover:opacity-40 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
    <img src={icon} alt={name} className={`w-8 h-8 sm:w-10 sm:h-10 relative z-10 transition-transform duration-300 group-hover:scale-110 ${invert ? 'invert' : ''}`} title={name} />
  </div>
);

const Skills = () => {
  const techCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-blue-500" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "from-[#00599c]" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-[#e76f00]" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-[#ffde57]" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "from-purple-500" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "from-[#38b2ac]" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-white", invert: true },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-[#68a063]" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400", invert: true }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-[#47a248]" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-[#00758f]" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "from-[#3ecf8e]" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-500" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-[#f34f29]" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "from-yellow-500" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "from-[#777bb4]" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Mock Orbital Animation Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[800px] mx-auto aspect-square flex items-center justify-center mb-16"
        >
          {/* Center node */}
          <div className="absolute w-24 h-24 rounded-full flex items-center justify-center p-[2px] z-30 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 animate-[spin_4s_linear_infinite]" />
            <div className="relative w-full h-full bg-black rounded-full flex items-center justify-center z-10 border border-white/10">
              <span className="font-bold text-white tracking-widest text-lg">DEV</span>
              <span className="absolute -bottom-6 text-xs text-gray-500 tracking-widest font-mono">CORE</span>
            </div>
          </div>
          
          {/* Orbit 1: Inner (6 Items) */}
          <div className="absolute inset-20 sm:inset-28 md:inset-36 border-[1px] border-dashed border-white/30 rounded-full" style={{ animation: 'spin 35s linear infinite' }}>
            {/* 0 deg */}
            <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 60 deg */}
            <div className="absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-7 h-7 invert" />
                 </div>
               </div>
            </div>
            {/* 120 deg */}
            <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#38b2ac] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 180 deg */}
            <div className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#68a063] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 240 deg */}
            <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#47a248] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 300 deg */}
            <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#3ecf8e] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-7 h-7" />
                 </div>
               </div>
            </div>
          </div>
          
          {/* Orbit 2: Outer (6 Items) */}
          <div className="absolute inset-0 sm:inset-4 md:inset-8 border-[1px] border-dashed border-white/30 rounded-full" style={{ animation: 'spin 50s linear infinite reverse' }}>
            {/* 0 deg */}
            <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#e76f00] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 60 deg */}
            <div className="absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00599c] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 120 deg */}
            <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#ffde57] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 180 deg */}
            <div className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#777bb4] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 240 deg */}
            <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00758f] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-7 h-7" />
                 </div>
               </div>
            </div>
            {/* 300 deg */}
            <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#f34f29] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-7 h-7" />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto z-10 relative mt-20 space-y-12 text-left">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {category.skills.map((skill, sIdx) => (
                  <TechIcon key={sIdx} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
