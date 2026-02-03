"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { staggerChildren, slideUp } from '../data/animations';
import { workExperience } from '../data/workExperience';

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div variants={slideUp} className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work Experience</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional experience that has shaped my work ethic and team collaboration skills.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {workExperience.map((job) => (
          <motion.div
            key={job.company}
            variants={slideUp}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="p-3 bg-violet-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                  <p className="text-lg text-violet-600 font-semibold">{job.company}</p>
                </div>
              </div>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {job.period}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
