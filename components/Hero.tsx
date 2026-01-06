'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TEXTS = [
  "Full-Stack Developer",
  "Embedded System Analyst",
  "Community Builder",
  "SaaS Builder"
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = TEXTS[currentTextIndex];
    
    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 blur-xl opacity-50 animate-pulse" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400/50 overflow-hidden shadow-2xl shadow-cyan-500/20">
              <Image
                src="/images/profile.jpg"
                alt="David - Full-Stack Developer"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl"><span class="text-white font-bold">D</span></div>';
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="text-2xl md:text-3xl">👋</span>
          <span className="text-lg md:text-xl text-gray-300">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            David
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 min-h-[3rem]"
        >
          <span className="text-gray-300">I'm a </span>
          <span className="text-cyan-400">{displayedText}</span>
          <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            |
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Passionate about building{' '}
          <span className="text-cyan-400 font-semibold">intelligent</span>,{' '}
          <span className="text-cyan-400 font-semibold">efficient</span>, and{' '}
          <span className="text-cyan-400 font-semibold">meaningful</span> tech solutions.
          Turning ideas into reality through code, creativity, and collaboration.
        </motion.p>
      </div>
    </section>
  );
}
