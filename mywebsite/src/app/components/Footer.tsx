"use client";

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Carlo Castillo</h4>
            <p className="text-gray-400">Cloud Solution Architect and Web Developer</p>
            <p className="text-gray-400 text-sm">
              Building digital solutions with clean code and intuitive design.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-gray-300">Quick Links</h5>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-gray-300">Connect</h5>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/carlo-castillo-59827a354/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/carloc3005" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:carlofc95@gmail.com" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>carlofc95@gmail.com</p>
              <p>949-870-0448</p>
              <p>Rancho Santa Margarita, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Carlo Castillo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
