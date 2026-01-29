'use client';

import { motion } from 'framer-motion';

export default function ProjectSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 animate-pulse">
      <div className="h-44 sm:h-48 bg-gray-800 rounded-xl mb-4" />
      <div className="h-6 bg-gray-800 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-800 rounded w-full mb-2" />
      <div className="h-4 bg-gray-800 rounded w-5/6 mb-4" />
      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-gray-800 rounded-full" />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="h-12 flex-1 bg-gray-800 rounded-xl" />
        <div className="h-12 flex-1 bg-gray-800 rounded-xl" />
      </div>
    </div>
  );
}

function Shimmer() {
  return (
    <motion.div
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: '200%' }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
    />
  );
}

export function ProjectSkeletonWithShimmer() {
  return (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden relative">
      <Shimmer />
      <div className="h-44 sm:h-48 bg-gray-800/80 rounded-xl mb-4" />
      <div className="h-6 bg-gray-800/80 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-800/80 rounded w-full mb-2" />
      <div className="h-4 bg-gray-800/80 rounded w-5/6 mb-4" />
      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-gray-800/80 rounded-full" />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="h-12 flex-1 bg-gray-800/80 rounded-xl" />
        <div className="h-12 flex-1 bg-gray-800/80 rounded-xl" />
      </div>
    </div>
  );
}
