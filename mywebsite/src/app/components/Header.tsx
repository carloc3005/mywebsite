"use client";

import { Linkedin, Github, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '../data/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {site.name}
          </span>
          <span className="block text-sm text-gray-500 font-medium">{site.title}</span>
        </motion.a>

        <nav className="flex items-center space-x-6" aria-label="Main">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">About</a>
            <a href="#projects" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:block text-gray-500 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:block text-gray-500 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
            >
              <Github size={20} />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-colors shadow-lg shadow-emerald-500/25"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
