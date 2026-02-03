"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { staggerChildren, slideUp } from '../data/animations';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div variants={slideUp} className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are some of the projects I&apos;ve built that showcase my skills in full-stack development, 
          AI integration, and modern web technologies.
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            variants={slideUp}
            custom={i}
            className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-2xl font-bold text-gray-900">{project.name}</h4>
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-violet-100 hover:text-violet-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 font-semibold text-sm transition-colors group"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
