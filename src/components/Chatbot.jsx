import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi! I am the Portfolio Assistant. Ask me anything about Thomas.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate LLM response
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let botReply = "I'm not quite sure about that, but Thomas is always learning new things! Ask me about his 'skills', 'experience', 'projects', or 'contact' info.";
      
      const knowledgeBase = {
        about: "Thomas is a passionate Software Engineer focused on AI, ML, Cloud Computing, and Full-Stack Web Development. He has strong problem-solving skills (92% rating) and loves turning complex problems into elegant solutions.",
        skills: "His tech stack includes Java, C++, Python, PHP, React, Next.js, Node.js, Tailwind, MySQL, MongoDB, Supabase, and Git.",
        experience: "He is currently a Core Team Member at The Elites (Oct 2025 - Present), and was previously a Sponsorship Team Member there. He also contributed to GirlScript Summer of Code '25 and volunteered for HackwithIndia.",
        projects: "Some of his featured projects include:\n- Vibly Chat: Real-time chat app with PHP/WebSocket.\n- ProFix: Professional services platform (React/Node).\n- ZPeriod: Interactive web app.\n- TRIC School Management: PHP/MySQL based management system.\n\nYou can ask me for the repository link of any specific project!",
        contact: "You can reach Thomas at thomasramesh449@gmail.com.\n\nHere are his important links:\n- GitHub: https://github.com/thomas2570\n- LinkedIn: https://www.linkedin.com/in/thomas-ramesh-3ab96a2a2/",
        linkedin: "Here is Thomas's LinkedIn profile: https://www.linkedin.com/in/thomas-ramesh-3ab96a2a2/",
        github: "Here is Thomas's GitHub profile: https://github.com/thomas2570",
        email: "You can email Thomas directly at thomasramesh449@gmail.com",
        resume: "Thomas's resume is available right here on the website! If you're having trouble finding it, you can request a copy directly at thomasramesh449@gmail.com",
        greetings: "Hi there! I'm Thomas's AI assistant. You can ask me about his skills, projects, experience, or how to contact him.",
        repo_vibly: "Here is the repository link for Vibly Chat: https://github.com/thomas2570/vibly-chat\n\nIt is a real-time chat application built with PHP, MySQL, and WebSockets.",
        repo_profix: "Here is the repository link for ProFix: https://github.com/thomas2570/ProFix\n\nIt is a comprehensive service booking platform built with React, Node.js, and TailwindCSS.",
        repo_zperiod: "Here is the repository link for ZPeriod: https://github.com/thomas2570/-Zperiod\n\nIt's an interactive periodic table built with HTML, CSS, and JavaScript.",
        repo_tric: "Here is the repository link for TRIC School Management: https://github.com/thomas2570/TRIC-School-Management\n\nIt's a complete school management system built with PHP, MySQL, and Bootstrap.",
        repo_general: "You can find all of Thomas's open-source work and repositories on his GitHub profile here: https://github.com/thomas2570"
      };

      const isMatch = (words) => words.some(word => new RegExp(`\\b${word}\\b`, 'i').test(lowerInput));

      if (isMatch(['vibly'])) {
        botReply = knowledgeBase.repo_vibly;
      } else if (isMatch(['profix', 'pro-fix', 'pro fix'])) {
        botReply = knowledgeBase.repo_profix;
      } else if (isMatch(['zperiod', 'period', 'periodic'])) {
        botReply = knowledgeBase.repo_zperiod;
      } else if (isMatch(['tric', 'school', 'management'])) {
        botReply = knowledgeBase.repo_tric;
      } else if (isMatch(['linkedin', 'linked in'])) {
        botReply = knowledgeBase.linkedin;
      } else if (isMatch(['github', 'git hub'])) {
        botReply = knowledgeBase.github;
      } else if (isMatch(['email', 'e-mail', 'mail'])) {
        botReply = knowledgeBase.email;
      } else if (isMatch(['resume', 'cv'])) {
        botReply = knowledgeBase.resume;
      } else if (isMatch(['repo', 'repository', 'source', 'code', 'link', 'links'])) {
        botReply = knowledgeBase.repo_general;
      } else if (isMatch(['contact', 'hire', 'reach', 'connect', 'message', 'phone', 'number', 'details'])) {
        botReply = knowledgeBase.contact;
      } else if (isMatch(['experience', 'job', 'jobs', 'intern', 'internship', 'role', 'history', 'worked', 'elites', 'hackwithindia', 'girlscript'])) {
        botReply = knowledgeBase.experience;
      } else if (isMatch(['project', 'projects', 'work', 'works', 'portfolio', 'build', 'built', 'made', 'created', 'vibly', 'profix', 'zperiod', 'tric'])) {
        botReply = knowledgeBase.projects;
      } else if (isMatch(['skill', 'skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'know', 'java', 'react', 'node', 'python', 'php'])) {
        botReply = knowledgeBase.skills;
      } else if (isMatch(['about', 'who', 'background', 'bio', 'intro', 'yourself', 'thomas', 'education', 'degree'])) {
        botReply = knowledgeBase.about;
      } else if (isMatch(['hi', 'hello', 'hey', 'greetings', 'sup', 'morning', 'evening', 'afternoon'])) {
        botReply = knowledgeBase.greetings;
      }

      setMessages(prev => [...prev, { role: 'system', content: botReply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-6 left-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-[#121212] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1e1e1e] p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-gray-300" />
                <h3 className="text-white font-medium text-sm">Portfolio Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-white/10 text-white' : 'bg-white text-black'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-none' : 'bg-[#1e1e1e] text-gray-300 rounded-tl-none border border-white/5 whitespace-pre-wrap'}`}>
                    {msg.role === 'system' ? (
                      <span dangerouslySetInnerHTML={{ __html: msg.content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noreferrer" class="text-blue-400 hover:underline">$1</a>') }} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1e1e1e] text-gray-300 rounded-tl-none border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-[#1e1e1e] border-t border-white/5">
              <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-full px-4 py-2 border border-white/5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="bg-transparent flex-grow outline-none text-sm text-white placeholder:text-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="text-white hover:text-gray-300 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
