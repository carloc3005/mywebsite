"use client";

import Image from 'next/image';
import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const projects = [
    {
      name: 'MediLink',
      description: 'Built a HIPAA and GDPR compliant healthcare web app that lets patients securely save and share their records.',
      tech: ['React', 'TailwindCSS', 'Supabase', 'Node.js'],
      href: '#', 
    },
    {
      name: 'KnifeX',
      description: 'Developed a CS:GO skin-trading platform where users can browse, list, and securely trade virtual knife skins.',
      tech: ['React', 'Node.js', 'Express'],
      href: '#', 
    },
    {
      name: 'Tapioca Express',
      description: 'Developed an online ordering site for a local boba shop that showcases the full menu and lets customers place orders.',
      tech: ['React', 'MongoDB', 'JavaScript'],
      href: '#', 
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Carlo Castillo</h1>
          <nav className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/carlo-castillo-59827a354/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-violet-600 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/carloc3005" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-violet-600 transition-colors">
              <Github size={22} />
            </a>
            <a
              href="/Gray and Black Proffessional CV Resume-1.pdf"
              download
              className="hidden sm:inline-flex bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg items-center space-x-2 transition-colors transform hover:scale-105"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 sm:py-24">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Full-Stack Developer Passionate About Building Digital Experiences.
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              I create clean, responsive interfaces and connect them to secure, scalable backends. Currently seeking opportunities to contribute to a dynamic, collaborative team.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="mailto:carlofc95@gmail.com" className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors">
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
              <a href="#projects" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors">
                <span>View Projects</span>
              </a>
            </div>
          </div>
          <motion.div
            className="md:col-span-2 relative w-full h-80 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/your-main-photo.jpg"
              alt="Carlo Castillo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl shadow-gray-600/10"
            />
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
               <h3 className="text-3xl font-bold text-gray-900">About Me</h3>
               <p className="text-gray-600 leading-relaxed">
                 As a Computer Science graduate from California State University, Fullerton, my focus is on turning ideas into real, usable products. I have a strong foundation in both front-end and back-end technologies, including React, Node.js, Python, and SQL/NoSQL databases.
                 <br/><br/>
                 I am particularly interested in UI/UX and secure API integration. My professional experience includes roles at Chipotle and Applied Medical, where I developed strong teamwork and procedural skills. I am always eager to learn and grow as a developer.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-52 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image src="/your-second-photo.jpg" alt="Photo of Carlo 1" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-full h-52 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mt-8">
                 <Image src="/your-third-photo.jpg" alt="Another photo of Carlo" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">My Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-violet-400 transition-colors group flex flex-col justify-between shadow-sm hover:shadow-lg"
                custom={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-violet-600 mt-4 text-sm font-semibold">
                  <span>View Project</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-gray-200 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Carlo Castillo. All Rights Reserved.</p>
      </footer>
    </div>
  );
}