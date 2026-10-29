"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Check, Info } from 'lucide-react';
import { staggerChildren, slideUp } from '../data/animations';
import { featuredProjects, moreProjects, type ProjectLink } from '../data/projects';

function Links({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
        >
          {link.label === 'GitHub' ? (
            <Github className="w-4 h-4 mr-1.5" />
          ) : null}
          <span>{link.label}</span>
          {link.label !== 'GitHub' && (
            <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          )}
        </a>
      ))}
    </div>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span key={item} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerChildren}
    >
      <motion.div variants={slideUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hands-on AWS and Azure builds, each with its architecture and the problems I had to debug along the way.
        </p>
      </motion.div>

      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <motion.article
            key={project.name}
            variants={slideUp}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-5 min-w-0">
                <div className="space-y-2">
                  <div className="flex items-center flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.tagline}</p>
                </div>

                <pre
                  aria-label="Architecture"
                  className="rounded-lg bg-gray-900 text-emerald-200 font-mono text-xs md:text-sm px-4 py-3 overflow-x-auto"
                >
                  {project.architecture.join('\n')}
                </pre>

                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 lg:border-l lg:border-gray-100 lg:pl-8">
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Tech</h4>
                  <TechChips tech={project.tech} />
                </div>
                {project.note && (
                  <p className="flex gap-2 text-sm text-gray-500">
                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                    <span>{project.note}</span>
                  </p>
                )}
                <Links links={project.links} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div variants={slideUp} className="mt-20 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">More Projects</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreProjects.map((project) => (
          <motion.article
            key={project.name}
            variants={slideUp}
            className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow p-6 flex flex-col gap-4"
          >
            <div className="space-y-2">
              <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                {project.category}
              </span>
              <h4 className="text-lg font-bold text-gray-900">{project.name}</h4>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>

            <TechChips tech={project.tech} />

            {project.demoLogin && (
              <p className="text-xs text-gray-500">
                Demo login: <span className="font-mono">{project.demoLogin.username}</span> /{' '}
                <span className="font-mono">{project.demoLogin.password}</span>
              </p>
            )}
            {project.note && <p className="text-xs text-gray-500">{project.note}</p>}

            <div className="mt-auto">
              <Links links={project.links} />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
