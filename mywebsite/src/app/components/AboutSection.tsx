"use client";

import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { staggerChildren, slideUp } from '../data/animations';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerChildren}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div variants={slideUp} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900">About Me</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey began as a production associate at Applied Medical, where I developed 
              strong organizational and procedural skills. This experience taught me the importance 
              of precision and attention to detail qualities that translate directly to writing 
              clean, maintainable code and following best practices in software development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My customer service roles at Starbucks and Chipotle taught me to handle pressure 
              and communicate clearly both critical skills for IT support and collaborating on 
              a development team. These experiences, combined with my Computer Science degree, 
              give me a unique perspective on both the technical and human aspects of technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I enjoy the entire technology lifecycle, from building a computer from scratch 
              and troubleshooting hardware issues to writing the code for a new application 
              and deploying it to the cloud. As an AWS Certified Cloud Practitioner, 
              I&apos;m eager to apply my full-stack development skills and cloud expertise in a 
              professional environment.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">Technical Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Languages:</h5>
                <p className="text-gray-600 text-sm">JavaScript, Python, SQL</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Frameworks & Libraries:</h5>
                <p className="text-gray-600 text-sm">Next.js, React, Node.js, Express, Tailwind CSS</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Cloud & DevOps:</h5>
                <p className="text-gray-600 text-sm">AWS (Route 53, S3, CloudFront), Git, Vercel</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Databases:</h5>
                <p className="text-gray-600 text-sm">PostgreSQL (Neon), MongoDB, Firebase</p>
              </div>
              <div className="md:col-span-2">
                <h5 className="font-medium text-gray-700 mb-2">IT & Hardware:</h5>
                <p className="text-gray-600 text-sm">PC Hardware Assembly, OS Installation & Configuration, System Troubleshooting, Network Fundamentals</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideUp} className="space-y-8">
          {/* Education */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-violet-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-violet-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Education</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900">Bachelor in Computer Science</h5>
                <p className="text-violet-600 font-medium">California State University, Fullerton</p>
                <p className="text-gray-500">2019-2025</p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-900">CSU General Education - Breadth</h5>
                <p className="text-violet-600 font-medium">Saddleback College & Irvine Valley College</p>
                <p className="text-gray-500">2013-2022</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Online Courses & Certificates</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-violet-200 pl-4">
                <h5 className="font-semibold text-gray-900">Full-Stack Web Development</h5>
                <p className="text-gray-600 text-sm">Udemy</p>
              </div>
              <div className="border-l-4 border-violet-200 pl-4">
                <h5 className="font-semibold text-gray-900">Python Programming</h5>
                <p className="text-gray-600 text-sm">Udemy</p>
              </div>
              <div className="border-l-4 border-violet-200 pl-4">
                <h5 className="font-semibold text-gray-900">C++ Programming</h5>
                <p className="text-gray-600 text-sm">Udemy</p>
              </div>
              <div className="border-l-4 border-violet-200 pl-4">
                <h5 className="font-semibold text-gray-900">JavaScript Full Course</h5>
                <p className="text-gray-600 text-sm">Supersimpledev</p>
              </div>
              <a 
                href="https://www.credly.com/badges/e5b9e874-0858-4ebf-80e9-5ec36176222c/public_url" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border-l-4 border-violet-200 pl-4 hover:border-violet-400 hover:bg-violet-50 py-2 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                      AWS Certified Cloud Practitioner ✓
                    </h5>
                    <p className="text-gray-600 text-sm">AWS (Certified 2025) • Click to verify credential</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>
              </a>
              <div className="border-l-4 border-violet-200 pl-4">
                <h5 className="font-semibold text-gray-900">AWS Solutions Architect Associate - In Progress</h5>
                <p className="text-gray-600 text-sm">AWS (Exam Scheduled April 2)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
