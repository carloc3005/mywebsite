"use client";

import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { fadeIn } from '../data/animations';

export default function CTASection() {
  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h3>
        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and challenging projects. 
          Let&apos;s discuss how I can contribute to your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:carlofc95@gmail.com"
            className="bg-white text-violet-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
          <a 
            href="/Gray and Black Proffessional CV Resume-1.pdf"
            download
            className="border-2 border-white text-white hover:bg-white hover:text-violet-600 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
