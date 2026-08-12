'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

type Props = {
  onRetry: () => void;
};

export default function ErrorBoundaryFallback({ onRetry }: Props) {
  const { t } = useLocale();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-500/20 text-red-400 mb-4">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">{t('errorBoundary.title')}</h2>
        <p className="text-gray-400 text-sm mb-6">{t('errorBoundary.description')}</p>
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/50 font-medium hover:bg-red-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <RefreshCw className="w-4 h-4" />
          {t('errorBoundary.retry')}
        </button>
        <p className="text-gray-500 text-xs mt-4">{t('errorBoundary.persist')}</p>
      </div>
    </div>
  );
}
