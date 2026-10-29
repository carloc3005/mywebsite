"use client";

import Image from 'next/image';
import { Mail, ArrowUpRight, MapPin, Cloud, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerChildren, slideUp } from '../data/animations';
import { site } from '../data/site';

const stats = [
  { value: '99.9%', label: 'Multi-cloud uptime' },
  { value: '~2 min', label: 'Failover RTO' },
  { value: '2', label: 'AWS certifications' },
];

export default function HeroSection() {
  return (
    <motion.section
      id="top"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="py-16 md:py-28"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div variants={slideUp} className="lg:col-span-7 space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium text-sm">
              <Cloud className="w-4 h-4 mr-2" />
              Seeking Associate Cloud Engineer &amp; Cloud Support roles
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              {site.title}
              <span className="block mt-2 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AWS Certified Solutions Architect – Associate
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Computer Science graduate who builds highly available AWS and Azure environments with
              Terraform, including a multi-cloud failover system with 99.9% uptime and a ~2-minute RTO.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-500/25"
            >
              <span>View Projects</span>
              <ArrowUpRight size={20} />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 hover:border-emerald-300 text-gray-800 font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
            <a href={`mailto:${site.email}`} className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>{site.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>{site.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideUp} className="lg:col-span-5 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-100">
                  <Image
                    src="/profile-pic1.jpg"
                    alt={site.name}
                    width={128}
                    height={128}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{site.name}</p>
                  <p className="text-emerald-600 font-medium">{site.title}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
