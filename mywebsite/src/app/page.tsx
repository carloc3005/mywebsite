"use client";

import Image from 'next/image';
import { Mail, Linkedin, Github, Download, ArrowUpRight, Phone, MapPin, Code, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const projects = [
    {
      name: 'Spotify',
      description: 'A feature-rich music streaming application built with Next.js where users can build a personal library of their favorite songs. The platform delivers an engaging playback experience with a real-time sound wave visualizer and a high-fidelity interface modeled after Spotify. \n\nTest Credentials:\nUsername: carlotest@gmail.com\nPassword: lol123321',
      tech: ['Next.js', 'TailwindCSS', 'Neon Postgres', 'Node.js', 'Stripe'],
      href: 'https://spotify-iota-amber.vercel.app/',
      category: 'Full-Stack'
    },
    {
      name: 'KnifeX',
      description: 'Developed a CS:GO skin-trading platform where users can browse, list, and securely trade virtual knife skins. Delivered a responsive interface and robust REST-style APIs for real-time user flow and trade execution while overcoming state management and plugin-handling challenges. \n\nTest Credentials:\nUsername: carlotest@gmail.com\nPassword: lol123321',
      tech: ['React', 'Node.js', 'Express', 'Neon Postgres'],
      href: 'https://knifex.netlify.app/',
      category: 'Full-Stack'
    },
    {
      name: 'Hello Po',
      description: 'An AI-enhanced video conferencing platform with its core video and chat software powered by GetStream.io. The application connects users in a real-time call with OpenAI\'s generative AI for a live conversation. Upon completion, an Inngrest-managed pipeline automatically generates a concise summary of the discussion. \n\nTest Credentials:\nUsername: carlotest@gmail.com\nPassword: lol123321',
      tech: ['Next.js', 'TailwindCSS', 'Inngest', 'Javascript', 'Neon Postgres', 'GetStream.io'],
      href: 'https://hello-isc1smnye-carlo-castillos-projects-1517593b.vercel.app',
      category: 'AI/Video'
    },
    {
      name: 'AWS Route 53',
      description: 'Developed and deployed my personal portfolio using AWS Route 53 to register a custom domain and configure its DNS records. The static site is hosted on AWS S3 servers, globally distributed via a CloudFront content delivery network with HTTPS enabled through an SSL certificate from AWS Certificate Manager to enhance HTTPS performance.',
      tech: ['Next.js', 'TailwindCSS', 'AWS Route 53', 'AWS S3', 'AWS CloudFront'],
      href: 'https://www.carlofc.com',
      category: 'Cloud/DevOps'
    },
    {
      name: 'Netflix Data Visualization',
      description: 'Created interactive data visualizations using AWS QuickSight to analyze Netflix content trends. Imported a Netflix CSV dataset and built multiple insightful graphs and dashboards to visualize patterns in content distribution, ratings, genres, and release trends. This beginner-level project demonstrates proficiency in AWS cloud services and data visualization techniques.',
      tech: ['AWS QuickSight', 'Data Visualization', 'CSV Data Analysis', 'AWS S3'],
      href: 'https://www.canva.com/design/DAG3TsKihNM/7hTnwhnqbzFiOrqq0rRqUQ/edit',
      category: 'Cloud/DevOps'
    },
    {
      name: 'AWS IAM Security & Access Management',
      description: 'Implemented AWS Identity and Access Management (IAM) best practices by provisioning an EC2 instance and designing custom security policies using JSON. Created IAM users with specific permissions and tested the policy enforcement to ensure proper access control. This project demonstrates hands-on experience with AWS security fundamentals, least privilege principles, and policy-based access management for cloud resources.',
      tech: ['AWS IAM', 'AWS EC2', 'JSON Policy', 'Access Control', 'Cloud Security'],
      href: 'https://www.canva.com/design/DAG3_H68-3Y/rZGDfMm4ejLV7d0P4Xxtmw/edit',
      category: 'Cloud/DevOps'
    },
    {
      name: 'Custom PC & System Configuration',
      description: 'Built and configured custom gaming and workstation PCs from the ground up, including component selection, assembly, BIOS configuration, and operating system installation. Specialized in performance optimization, thermal management, and system troubleshooting. Projects include high-performance gaming rigs, development workstations, and budget-friendly builds tailored to specific user requirements. \n\nGallery coming soon - Pictures will be added to showcase completed builds and configurations.',
      tech: ['PC Hardware Assembly', 'Windows/Linux Installation', 'BIOS Configuration', 'System Optimization', 'Troubleshooting'],
      href: 'https://docs.google.com/document/d/13zbWH6eNL_1RS9pi--bo2DGuau4_rFT_fFn1gnzbqRo/edit?tab=t.0',
      category: 'Hardware/IT'
    },
  ];

  const workExperience = [
    {
      company: 'Starbucks',
      role: 'Barista',
      period: 'August 2025 - Current',
      description: 'Engagement in a team-wide meeting for a proactive approach to learning and a strong willingness to contribute, quickly becoming a valuable member of the store.'
    },
    {
      company: 'Chipotle Mexican Grill',
      role: 'Crew Member',
      period: 'November 2023 - August 2025',
      description: 'Proven ability to excel in a high-pressure setting managing a continuous flow of customer orders while upholding strict standards for speed, quality, and service.'
    },
    {
      company: 'Applied Medical',
      role: 'Production Associate',
      period: 'September 2017 - August 2023',
      description: 'A results-driven team lead in their ability to organize and distribute processes, delegating tasks and ensuring operational efficiency.'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-gray-800 min-h-screen">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Carlo Castillo
            </h1>
            <p className="text-sm text-gray-500 font-medium">IT Support Specialist & Full Stack Developer</p>
          </motion.div>
          
          <nav className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#about" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">About</a>
              <a href="#projects" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-violet-600 transition-colors font-medium">Experience</a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/carlo-castillo-59827a354/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-violet-600 transition-colors p-2 rounded-lg hover:bg-violet-50">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/carloc3005" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-violet-600 transition-colors p-2 rounded-lg hover:bg-violet-50">
                <Github size={20} />
              </a>
              <a
                href="/Gray and Black Proffessional CV Resume-1.pdf"
                download
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/25"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
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

        {/* About & Education Section */}
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
                    <p className="text-gray-600 text-sm">AWS (Exam Scheduled December 2025)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve built that showcase my skills in full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                variants={slideUp}
                custom={i}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-2xl font-bold text-gray-900">{project.name}</h4>
                        <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-violet-100 hover:text-violet-700 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-violet-600 hover:text-violet-700 font-semibold text-sm transition-colors group"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Work Experience Section */}
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

        {/* Call to Action Section */}
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
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Carlo Castillo</h4>
              <p className="text-gray-400">IT Support Specialist & Full-Stack Developer</p>
              <p className="text-gray-400 text-sm">
                Building digital solutions with clean code and intuitive design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-gray-300">Quick Links</h5>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-gray-300">Connect</h5>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/carlo-castillo-59827a354/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/carloc3005" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:carlofc95@gmail.com" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <div className="text-gray-400 text-sm space-y-1">
                <p>carlofc95@gmail.com</p>
                <p>949-870-0448</p>
                <p>Rancho Santa Margarita, CA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Carlo Castillo. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}