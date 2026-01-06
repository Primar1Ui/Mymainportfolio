'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern frameworks and best practices.',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Creating intelligent web and mobile applications powered by AI.',
    },
    {
      icon: Rocket,
      title: 'SaaS MVPs',
      description: 'Rapidly developing and deploying scalable SaaS products.',
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm David, a passionate full-stack developer specializing in building
              modern web applications, AI-powered solutions, and scalable SaaS products.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in frontend and backend development, I create seamless
              user experiences while ensuring robust, performant systems. I'm particularly
              focused on integrating AI capabilities into web and mobile applications,
              helping businesses leverage cutting-edge technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's setting up Supabase backends, developing Next.js applications,
              or building complete SaaS MVPs, I bring a comprehensive approach to every
              project.
            </p>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

