"use client";

import { motion } from 'framer-motion';
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
      <motion.div variants={slideUp} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Operations and customer-facing roles that built the reliability and teamwork I bring to engineering.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 divide-y divide-gray-100">
        {workExperience.map((job) => (
          <motion.div key={job.company} variants={slideUp} className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-lg text-gray-900">
                <span className="font-bold">{job.role}</span>
                <span className="text-gray-600">, {job.company}</span>
              </h3>
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{job.period}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
