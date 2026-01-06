'use client';

import { MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumbers = [
  { country: 'NG', number: '+2349064082774', label: 'Nigeria' },
  { country: 'US', number: '+16722749582', label: 'United States' },
  { country: 'GER', number: '+4915213856751', label: 'Germany' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © David — All rights reserved
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            {/* Email */}
            <a
              href="mailto:davidtosin306@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">davidtosin306@gmail.com</span>
            </a>
            
            {/* WhatsApp Buttons */}
            {whatsappNumbers.map((item) => (
              <a
                key={item.country}
                href={`https://wa.me/${item.number.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
                aria-label={`WhatsApp ${item.label}`}
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">
                  {item.country} - {item.number}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

