"use client";

import Image from 'next/image';
import { Mail, ArrowUpRight, Phone, MapPin, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerChildren, slideUp } from '../data/animations';

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="py-20 md:py-32"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div variants={slideUp} className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 font-medium text-sm"
            >
              <Code className="w-4 h-4 mr-2" />
              Available for new opportunities
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Full-Stack Developer &
              <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                IT Specialist
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              A Computer Science graduate with a passion for building full-stack applications 
              and managing the cloud infrastructure they run on. My experience ranges from 
              developing applications with Next.js and AI to assembling hardware and deploying 
              websites on AWS.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-violet-600" />
              <span>949-870-0448</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-violet-600" />
              <span>carlofc95@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-violet-600" />
              <span>Rancho Santa Margarita, CA 92688</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="mailto:carlofc95@gmail.com" 
               className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/25">
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a href="#projects" 
               className="bg-white border-2 border-gray-200 hover:border-violet-300 text-gray-800 font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg">
              <span>View Projects</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          variants={slideUp}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-violet-100">
                  <Image
                    src="/profile-pic1.jpg"
                    alt="Carlo Castillo"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Carlo Castillo</h3>
                  <p className="text-violet-600 font-medium">IT Support Specialist</p>
                </div>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">2025</div>
                    <div className="text-sm text-gray-500">Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
