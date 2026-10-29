"use client";

import { motion } from 'framer-motion';
import { Mail, Download, Linkedin } from 'lucide-react';
import { fadeIn } from '../data/animations';
import { site } from '../data/site';

export default function CTASection() {
  return (
    <motion.section
      id="contact"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          I&apos;m looking for an entry-level Associate Cloud Engineer or Cloud Support role. If you&apos;re hiring,
          I&apos;d love to talk.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <a
            href={`mailto:${site.email}`}
            className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
