import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Code2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Code, Coffee, and <br/>
              <span className="text-gray-500">Building the Future.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
              <p>
                I am a passionate and driven Software Engineer, eager to explore the vast world of technology and innovation. My academic journey is fueled by a profound interest in programming, problem-solving, and cutting-edge technologies like AI, machine learning, and cloud computing.
              </p>
              <p>
                I've built a strong foundation in data structures, algorithms, and full-stack web development. I love turning complex problems into elegant, optimal solutions, and I'm continuously seeking opportunities to learn, build, and grow as a developer.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <Coffee className="w-6 h-6 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-400">Cups of coffee</div>
              </div>
              <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <Rocket className="w-6 h-6 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-1">92%</div>
                <div className="text-sm text-gray-400">Problem Solving</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-6 transform origin-bottom-left transition-transform hover:rotate-0 duration-500 ease-out border border-white/10 z-0"></div>
            <div className="relative z-10 bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Code2 className="w-5 h-5 text-gray-400" />
                <span className="font-mono text-sm text-gray-400 tracking-wider">CORE READOUTS</span>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">01</span>
                  <p className="text-gray-300">Problem Solving (92%)</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">02</span>
                  <p className="text-gray-300">Full-Stack Dev (85%)</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">03</span>
                  <p className="text-gray-300">AI / ML (80%)</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">04</span>
                  <p className="text-gray-300">Data Structures & Algorithms (78%)</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
