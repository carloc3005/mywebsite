"use client";

import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Code2, Cloud, Database, Cpu } from 'lucide-react';
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
      <div className="space-y-12">
        {/* Main About Content */}
        <motion.div variants={slideUp} className="space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">About Me</h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
            AWS Certified Solutions Architect – Associate and Cloud Practitioner with full-stack development expertise.
            I build and automate cloud infrastructure on AWS while developing applications end-to-end, focused on solutions that are
            secure, scalable, and solve real business challenges.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - About + Skills */}
          <motion.div variants={slideUp} className="lg:col-span-2 space-y-8">
            {/* Story */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">My Cloud Journey</h4>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My career began in manufacturing and operations at Applied Medical, followed by high-volume customer service
                  at Starbucks and Chipotle. Those roles taught me that precision, reliability, and efficiency are what keep any
                  system running smoothly under pressure, lessons that now shape how I approach cloud architecture.
                </p>
                <p>
                  With my Computer Science degree and AWS Certified Solutions Architect – Associate and Cloud Practitioner
                  certifications, my focus has shifted to cloud engineering while maintaining strong full-stack development
                  skills. I am passionate about provisioning and automating AWS infrastructure, building applications end-to-end,
                  and tackling challenges across the entire technology stack, front-end and back-end. From infrastructure design
                  to deployment automation and cost optimization, I am building comprehensive cloud engineering expertise.
                </p>
                <p>
                  I am driven by the challenge of taking complex requirements and turning them into reliable, well-architected
                  cloud systems. Whether it is provisioning secure networks, automating deployments, or optimizing performance
                  and cost, I am committed to building infrastructure that just works. I am looking for opportunities to grow as
                  a cloud engineer and contribute meaningfully to building and operating the infrastructure that powers modern
                  applications.
                </p>
              </div>
            </div>

            {/* Technical Skills - Enhanced */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">Technical Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Cloud className="w-5 h-5 text-teal-600" />
                    <h5 className="font-semibold text-gray-900">AWS & Cloud Architecture</h5>
                  </div>
                  <p className="text-gray-700 text-sm">EC2 • S3 • Lambda • CloudFront • Route 53 • VPC • IAM • CloudFormation • RDS • DynamoDB • API Gateway</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <h5 className="font-semibold text-gray-900">Languages</h5>
                  </div>
                  <p className="text-gray-700 text-sm">JavaScript • Python • SQL • TypeScript</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="w-5 h-5 text-purple-600" />
                    <h5 className="font-semibold text-gray-900">Development</h5>
                  </div>
                  <p className="text-gray-700 text-sm">React • Next.js • Node.js • Express • Tailwind CSS</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Database className="w-5 h-5 text-orange-600" />
                    <h5 className="font-semibold text-gray-900">Databases</h5>
                  </div>
                  <p className="text-gray-700 text-sm">PostgreSQL • MongoDB • Firebase • DynamoDB</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Certifications */}
          <motion.div variants={slideUp} className="space-y-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-200 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Education</h4>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-70 p-4 rounded-xl">
                  <h5 className="text-lg font-semibold text-gray-900">Bachelor in Computer Science</h5>
                  <p className="text-emerald-600 font-medium text-sm mt-1">California State University, Fullerton</p>
                  <p className="text-gray-500 text-sm">2022-2025</p>
                </div>
                
                <div className="bg-white bg-opacity-70 p-4 rounded-xl">
                  <h5 className="text-lg font-semibold text-gray-900">CSU General Education - Breadth</h5>
                  <p className="text-emerald-600 font-medium text-sm mt-1">Saddleback College & Irvine Valley College</p>
                  <p className="text-gray-500 text-sm">2013-2022</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Courses</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-emerald-400 pl-4 py-2 hover:bg-emerald-50 rounded transition-colors">
                  <h5 className="font-semibold text-gray-900">Full-Stack Web Development</h5>
                  <p className="text-gray-600 text-sm">Udemy</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4 py-2 hover:bg-emerald-50 rounded transition-colors">
                  <h5 className="font-semibold text-gray-900">Python Programming</h5>
                  <p className="text-gray-600 text-sm">Udemy</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4 py-2 hover:bg-emerald-50 rounded transition-colors">
                  <h5 className="font-semibold text-gray-900">C++ Programming</h5>
                  <p className="text-gray-600 text-sm">Udemy</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4 py-2 hover:bg-emerald-50 rounded transition-colors">
                  <h5 className="font-semibold text-gray-900">JavaScript Full Course</h5>
                  <p className="text-gray-600 text-sm">Supersimpledev</p>
                </div>
                
                {/* AWS Solutions Architect Associate - Verified */}
                <a
                  href="https://www.credly.com/badges/595b79e8-aa8a-4ebb-852b-82e8934d0908/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-green-400 pl-4 py-2 bg-green-50 hover:bg-green-100 rounded transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        AWS Certified Solutions Architect – Associate ✓
                      </h5>
                      <p className="text-gray-600 text-sm">Certified August 2026 • Click to verify</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>

                {/* AWS Certified - Verified */}
                <a
                  href="https://www.credly.com/badges/e5b9e874-0858-4ebf-80e9-5ec36176222c/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-4 border-green-400 pl-4 py-2 bg-green-50 hover:bg-green-100 rounded transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        AWS Certified Cloud Practitioner ✓
                      </h5>
                      <p className="text-gray-600 text-sm">Certified 2025 • Click to verify</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
