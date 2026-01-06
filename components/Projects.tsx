'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Briefcase } from 'lucide-react';
import { projects } from '@/lib/data';

const whatsappNumbers = [
  { country: 'NG', number: '+2349064082774', label: 'Nigeria' },
  { country: 'US', number: '+16722749582', label: 'United States' },
];

export default function Projects() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {/* Hire Me Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                >
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Hire Me</span>
                </button>
                
                {/* WhatsApp Buttons */}
                <div className="flex gap-2">
                  {whatsappNumbers.map((item) => (
                    <a
                      key={item.country}
                      href={`https://wa.me/${item.number.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
                      aria-label={`WhatsApp ${item.label}`}
                    >
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">{item.country}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

