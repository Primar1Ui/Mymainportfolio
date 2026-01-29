'use client';

import { motion } from 'framer-motion';

export default function TestimonialSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 animate-pulse">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gray-800 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-4/5" />
          <div className="h-4 bg-gray-800 rounded w-3/4" />
        </div>
      </div>
      <div className="border-t border-gray-800 pt-4">
        <div className="h-4 bg-gray-800 rounded w-1/3 mb-2" />
        <div className="h-3 bg-gray-800 rounded w-1/4" />
      </div>
    </div>
  );
}

export function TestimonialSkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <TestimonialSkeleton key={i} />
      ))}
    </div>
  );
}
