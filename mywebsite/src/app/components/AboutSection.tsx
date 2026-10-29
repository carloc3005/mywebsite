"use client";

import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Code2, Cloud, Database, Workflow, Sparkles, BadgeCheck, Clock } from 'lucide-react';
import { staggerChildren, slideUp } from '../data/animations';
import { skillGroups, type SkillGroup } from '../data/skills';
import { certifications, coursework } from '../data/certifications';

const skillIcons: Record<SkillGroup['icon'], typeof Cloud> = {
  cloud: Cloud,
  devops: Workflow,
  code: Code2,
  data: Database,
  ai: Sparkles,
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerChildren}
    >
      <div className="space-y-12">
        <motion.div variants={slideUp} className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
            Associate Cloud Engineer with a Bachelor of Science in Computer Science and the AWS Certified
            Solutions Architect – Associate and Cloud Practitioner certifications. I design and automate cloud
            infrastructure on AWS and Azure using Terraform and CI/CD, with an emphasis on high availability,
            security, and cost efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column: story + skills */}
          <motion.div variants={slideUp} className="lg:col-span-2 space-y-10">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My professional background began in operations, including six years as a Production Associate at
                Applied Medical, followed by high-volume, customer-facing roles at Chipotle Mexican Grill and
                Starbucks. These positions developed my commitment to accuracy, reliability, and performance under
                pressure, qualities I apply to building and operating cloud infrastructure.
              </p>
              <p>
                In addition to infrastructure work, I develop full-stack applications with Next.js and Node.js,
                which gives me a practical understanding of the workloads that the infrastructure supports. I am
                seeking an entry-level Associate Cloud Engineer or Cloud Support position in which I can continue
                to develop my expertise on real-world systems.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillGroups.map((group) => {
                  const Icon = skillIcons[group.icon];
                  return (
                    <div
                      key={group.title}
                      className={`bg-white p-6 rounded-xl border border-gray-200 ${group.skills.length > 10 || group.icon === 'ai' ? 'md:col-span-2' : ''}`}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-semibold text-gray-900">{group.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      {group.note && <p className="text-sm text-gray-500 mt-3">{group.note}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right column: certifications + education */}
          <motion.div variants={slideUp} className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => {
                  const earned = Boolean(cert.href);
                  const body = (
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        {earned ? (
                          <BadgeCheck className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                        ) : (
                          <Clock className="w-5 h-5 mt-0.5 text-yellow-600 shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-900">{cert.name}</p>
                          <p className="text-gray-600 text-sm">
                            {cert.detail}
                            {earned && ' • Click to verify'}
                          </p>
                        </div>
                      </div>
                      {earned && <ArrowUpRight className="w-4 h-4 text-green-600 shrink-0" />}
                    </div>
                  );
                  return earned ? (
                    <a
                      key={cert.name}
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-l-4 border-green-400 pl-4 py-3 pr-3 bg-green-50 hover:bg-green-100 rounded transition-colors"
                    >
                      {body}
                    </a>
                  ) : (
                    <div key={cert.name} className="border-l-4 border-yellow-400 pl-4 py-3 pr-3 bg-yellow-50 rounded">
                      {body}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                <span className="font-medium text-gray-600">Also completed:</span> {coursework.join(' · ')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-200 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900">B.S. in Computer Science</h4>
                  <p className="text-emerald-600 font-medium text-sm mt-1">California State University, Fullerton</p>
                  <p className="text-gray-500 text-sm">2022-2025</p>
                </div>

                <div className="bg-white/70 p-4 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900">CSU General Education - Breadth</h4>
                  <p className="text-emerald-600 font-medium text-sm mt-1">Saddleback College & Irvine Valley College</p>
                  <p className="text-gray-500 text-sm">2013-2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
