import { Mail, Linkedin, Github } from 'lucide-react';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-xl font-bold">{site.name}</p>
            <p className="text-gray-400">{site.title}</p>
            <p className="text-gray-400 text-sm">
              Building reliable, automated cloud infrastructure on AWS and Azure.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-300">Quick Links</p>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Resume (PDF)</a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-300">Connect</p>
            <div className="flex space-x-4">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email"
                 className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{site.email}</p>
              <p>{site.phone}</p>
              <p>{site.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
