"use client";

import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Carlo Castillo
          </h1>
          <p className="text-sm text-gray-500 font-medium">IT Support Specialist & Full Stack Developer</p>
        </motion.div>
        
        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">About</a>
            <a href="#projects" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Experience</a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.linkedin.com/in/carlo-castillo-59827a354/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-500 hover:text-violet-600 transition-colors p-2 rounded-lg hover:bg-violet-50">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/carloc3005" target="_blank" rel="noopener noreferrer" 
               className="text-gray-500 hover:text-violet-600 transition-colors p-2 rounded-lg hover:bg-violet-50">
              <Github size={20} />
            </a>
            <a
              href="/Carlo-Castillo-Resume-2026.pdf"
              download
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/25"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
